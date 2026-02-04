import { visit } from 'unist-util-visit';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';

export default function remarkSpoiler() {
  return (tree, file) => {
    // Accept only these opening tag forms:
    // [spoiler]...[/spoiler]
    // [spoiler="Title"]...[/spoiler]
    // [spoiler='Title']...[/spoiler]
    // [spoiler=Title with spaces]...[/spoiler]
    // Title capture groups: 1 = double-quoted, 2 = single-quoted, 3 = bare (no brackets)
    // allow optional blockquote prefixes ("> ") before opening/closing tags
    const regex = /(?:^|\n)\s*(?:> ?)*\[spoiler(?:=(?:"([^"]*)"|'([^']*)'|([^\]]+)))?\]([\s\S]*?)\s*(?:> ?)*\[\/spoiler\]/gi;

    // Helper: reconstruct markdown for inline nodes so we can run regex across mixed children
    const nodeToMarkdown = (n) => {
      if (!n) return '';
      switch (n.type) {
        case 'text': return n.value || '';
        case 'strong': return `**${(n.children || []).map(nodeToMarkdown).join('')}**`;
        case 'emphasis': return `*${(n.children || []).map(nodeToMarkdown).join('')}*`;
        case 'inlineCode': return `\`${n.value || ''}\``;
        case 'link': return `[${(n.children || []).map(nodeToMarkdown).join('')}]( ${n.url || ''} )`;
        case 'break': return '\n';
        default:
          if (n.children && Array.isArray(n.children)) return n.children.map(nodeToMarkdown).join('');
          return '';
      }
    };

    // Collect paragraph nodes first to avoid modifying the tree while visiting.
    const paragraphs = [];
    visit(tree, 'paragraph', (node) => {
      if (node && node.children && node.children.length > 0) paragraphs.push(node);
    });

    // Try to use the original file contents slice for exact raw text if available.
    const fileContents = (file && (file.value || file.contents)) ? String(file.value || file.contents) : null;

    if (fileContents && typeof fileContents === 'string') {
      const newChildren = [];
      let lastIndex = 0;
      regex.lastIndex = 0;
      let mm;
      while ((mm = regex.exec(fileContents)) !== null) {
        if (mm.index > lastIndex) {
          const seg = fileContents.slice(lastIndex, mm.index);
          try {
            const parsedSeg = unified().use(remarkParse).use(remarkMdx).parse(seg || '');
            if (parsedSeg && Array.isArray(parsedSeg.children)) newChildren.push(...parsedSeg.children);
          } catch (e) {
            newChildren.push({ type: 'text', value: seg });
          }
        }

        const rawTitle = (mm[1] || mm[2] || mm[3] || '');
        const title = rawTitle.toString().trim() || undefined;
        // inner content may contain leading "> " from blockquote lines; strip them
        let innerContent = (mm[4] || '').toString().replace(/\r\n/g, '\n');
        innerContent = innerContent.replace(/^\s*> ?/gm, '');
        if (innerContent.startsWith('\n')) innerContent = innerContent.slice(1);

        let parsedChildren = [];
        try {
            const parsedInner = unified().use(remarkParse).use(remarkMdx).parse(innerContent || '');
            if (parsedInner && Array.isArray(parsedInner.children)) parsedChildren = parsedInner.children;
        } catch (_) {
            parsedChildren = [{ type: 'text', value: innerContent }];
        }

        const jsxNode = { type: 'mdxJsxFlowElement', name: 'Spoiler', attributes: [], children: parsedChildren };
        if (title) jsxNode.attributes.push({ type: 'mdxJsxAttribute', name: 'title', value: title });

        newChildren.push(jsxNode);
        lastIndex = mm.index + mm[0].length;
      }

      if (lastIndex < fileContents.length) {
            const rest = fileContents.slice(lastIndex);
            try {
            const parsedRest = unified().use(remarkParse).use(remarkMdx).parse(rest || '');
            if (parsedRest && Array.isArray(parsedRest.children)) newChildren.push(...parsedRest.children);
            } catch (_) {
            newChildren.push({ type: 'text', value: rest });
            }
      }

      // Replace entire root children with the rebuilt set
      tree.children = newChildren;
    } else {
      // fallback: process per-paragraph as before when file contents aren't available
      for (const node of paragraphs) {
        const fullText = node.children.map(nodeToMarkdown).join('');
        let last = 0;
        let mm2;
        const outChildren = [];
        let changed = false;

        regex.lastIndex = 0;
        while ((mm2 = regex.exec(fullText)) !== null) {
          const beforeRaw = fullText.slice(last, mm2.index);
          if (beforeRaw) {
            try {
              const parsedBefore = unified().use(remarkParse).parse(beforeRaw || '');
              if (parsedBefore && Array.isArray(parsedBefore.children)) {
                for (const c of parsedBefore.children) {
                  if (c.type === 'paragraph' && Array.isArray(c.children)) outChildren.push(...c.children);
                  else outChildren.push(c);
                }
              }
            } catch (e) {
              outChildren.push({ type: 'text', value: beforeRaw });
            }
          }

          const rawTitle = (mm2[1] || mm2[2] || mm2[3] || '');
          const title = rawTitle.toString().trim() || undefined;
          let innerContent = (mm2[4] || '').toString().replace(/\r\n/g, '\n');
          if (innerContent.startsWith('\n')) innerContent = innerContent.slice(1);

          let parsedChildren = [];
          try {
            const parsed = unified().use(remarkParse).use(remarkMdx).parse(innerContent || '');
            if (parsed && Array.isArray(parsed.children)) parsedChildren = parsed.children;
          } catch (e) {
            parsedChildren = [{ type: 'text', value: innerContent }];
          }

          const jsxNode = { type: 'mdxJsxFlowElement', name: 'Spoiler', attributes: [], children: parsedChildren };
          if (title) jsxNode.attributes.push({ type: 'mdxJsxAttribute', name: 'title', value: title });

          outChildren.push(jsxNode);
          last = mm2.index + mm2[0].length;
          changed = true;
        }

        const restRaw = fullText.slice(last);
        if (restRaw) {
          try {
            const parsedRest = unified().use(remarkParse).parse(restRaw || '');
            if (parsedRest && Array.isArray(parsedRest.children)) {
              for (const c of parsedRest.children) {
                if (c.type === 'paragraph' && Array.isArray(c.children)) outChildren.push(...c.children);
                else outChildren.push(c);
              }
            }
          } catch (e) {
            outChildren.push({ type: 'text', value: restRaw });
          }
        }

        if (changed) node.children = outChildren;
      }
    }

    // Second pass: handle split spoilers where opening tag is its own paragraph
    // and inner content (possibly blockquoted) follows and ends with [/spoiler]
    for (let i = 0; i < tree.children.length; i++) {
      const n = tree.children[i];
      if (!n || n.type !== 'paragraph' || !n.children || n.children.length === 0) continue;
      const firstText = (n.children[0] && n.children[0].value) ? String(n.children[0].value).trim() : '';
      const openMatch = firstText.match(/^\[spoiler(?:=(?:"([^"]*)"|'([^']*)'|([^\]]+)))?\]\s*$/);
      if (!openMatch) continue;
      // find closing node index
      let j = i + 1;
      let found = -1;
      const chunks = [];
      while (j < tree.children.length) {
        const cur = tree.children[j];
        // reconstruct markdown for this node
        try {
          const md = unified().use(remarkParse).use(remarkMdx).stringify({ type: 'root', children: [cur] });
          chunks.push(md);
        } catch (e) {
          if (cur.type === 'text') chunks.push(cur.value || '');
        }
        const textContent = (cur.children && cur.children[0] && cur.children[0].value) ? String(cur.children[0].value) : '';
        if (typeof textContent === 'string' && textContent.indexOf('[/spoiler]') !== -1) {
          found = j;
          break;
        }
        j++;
      }
      if (found === -1) continue;
      // build inner content from chunks, strip leading blockquote prefixes and wrapper markers
      let innerRaw = chunks.join('\n');
      innerRaw = innerRaw.replace(/^\s*> ?/gm, '');
      innerRaw = innerRaw.replace(/^\[type=[^\]]+\]\s*/i, '');
      innerRaw = innerRaw.replace(/\[\/spoiler\]\s*$/i, '');

      let parsedChildren = [];
      try {
        const parsedInner = unified().use(remarkParse).use(remarkMdx).parse(innerRaw || '');
        if (parsedInner && Array.isArray(parsedInner.children)) parsedChildren = parsedInner.children;
      } catch (e) {
        parsedChildren = [{ type: 'text', value: innerRaw }];
      }

      const rawTitle = (openMatch[1] || openMatch[2] || openMatch[3] || '');
      const title = rawTitle.toString().trim() || undefined;
      const jsxNode = { type: 'mdxJsxFlowElement', name: 'Spoiler', attributes: [], children: parsedChildren };
      if (title) jsxNode.attributes.push({ type: 'mdxJsxAttribute', name: 'title', value: title });

      // replace from i to found with single jsxNode
      tree.children.splice(i, found - i + 1, jsxNode);
    }
  };
};
