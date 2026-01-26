const visitRaw = require('unist-util-visit');
const visit = (visitRaw && visitRaw.visit) ? visitRaw.visit : (visitRaw && visitRaw.default ? visitRaw.default : visitRaw);

module.exports = function remarkTable() {
  return (tree) => {
    // helper to extract simple text from inline mdast nodes
    const textFromNode = (n) => {
      if (!n) return '';
      if (n.type === 'text') return n.value || '';
      if (n.type === 'strong' || n.type === 'emphasis' || n.type === 'inlineCode') {
        if (Array.isArray(n.children)) return n.children.map(textFromNode).join('');
        return n.value || '';
      }
      if (n.children && Array.isArray(n.children)) return n.children.map(textFromNode).join('');
      return '';
    };

    visit(tree, 'table', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;
      try {
        const align = Array.isArray(node.align) ? node.align : [];
        const rows = (node.children || []).map((row) => {
          // row.children are tableCell nodes
          return (row.children || []).map(cell => {
            // cell.children are inline content
            if (!cell || !cell.children) return '';
            return cell.children.map(textFromNode).join('');
          });
        });

        const tableObj = { align, rows };
        const attr = { type: 'mdxJsxAttribute', name: 'table', value: JSON.stringify(tableObj) };

        const jsxNode = {
          type: 'mdxJsxFlowElement',
          name: 'Table',
          attributes: [attr],
          children: [],
        };

        parent.children.splice(index, 1, jsxNode);
      } catch (e) {
        // on error, leave the node as-is
      }
    });
  };
};
