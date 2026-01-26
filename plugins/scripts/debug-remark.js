const fs = require('fs');
const path = require('path');
const { unified } = require('unified');
const remarkParseRaw = require('remark-parse');
const remarkParse = remarkParseRaw && remarkParseRaw.default ? remarkParseRaw.default : remarkParseRaw;
const remarkStringify = require('remark-stringify');

const remarkSpoiler = require('../remark-spoiler.js');
const remarkExpose = require('../remark-expose-node.js');
const remarkGfmRaw = require('remark-gfm');
const remarkGfm = remarkGfmRaw && remarkGfmRaw.default ? remarkGfmRaw.default : remarkGfmRaw;
const remarkTable = require('../remark-table.js');

const file = process.argv[2] || path.join(__dirname, 'tmp.mdx');

(async () => {
	try {
		const content = fs.readFileSync(file, 'utf8');
		console.log('unified:', typeof unified);
		console.log('remarkParse type:', typeof remarkParse);
		console.log('remarkSpoiler:', typeof remarkSpoiler);
		console.log('remarkExpose:', typeof remarkExpose);

		const processor = unified()
			.use(remarkParse)
			.use(remarkExpose)
			.use(remarkSpoiler)
			.use(remarkGfm)
			.use(remarkTable);

		const tree = await processor.parse(content);
		console.log('PARSED ROOT CHILDREN (brief):', JSON.stringify(tree.children.map(c => ({ type: c.type, value: c.value ? String(c.value).slice(0,80) : null, childrenTypes: c.children ? c.children.map(cc => cc.type) : null })), null, 2));
		const remarkStringify = require('remark-stringify');
		for (let i = 0; i < tree.children.length; i++) {
			try {
				const md = unified().use(remarkStringify).stringify({ type: 'root', children: [tree.children[i]] });
				console.log(`PARA[${i}]:\n${md}`);
			} catch (e) {
				// ignore
			}
		}
		const transformed = await processor.run(tree);
		console.log('--- TRANSFORMED MDAST (root children types) ---');
		console.log(transformed.type, transformed.children.map(c => c.type));
		// Full transformed tree for debugging
		try {
			console.log('--- FULL TRANSFORMED TREE ---');
			console.log(JSON.stringify(transformed, null, 2));
		} catch (e) {
			// ignore
		}
		// find spoiler nodes
		const spoilers = [];
		const visitRaw = require('unist-util-visit');
		const visit = (visitRaw && visitRaw.visit) ? visitRaw.visit : (visitRaw && visitRaw.default ? visitRaw.default : visitRaw);
		visit(transformed, (n) => {
			if (n.type === 'spoiler') spoilers.push(n);
			if (n.type === 'mdxJsxFlowElement' && n.name === 'Spoiler') spoilers.push(n);
		});
		console.log('Found spoiler nodes count:', spoilers.length);
		if (spoilers.length > 0) console.log(JSON.stringify(spoilers.slice(0,10), null, 2));
		process.exit(0);
	} catch (e) {
		console.error('Error:', e);
		process.exit(1);
	}
})();
