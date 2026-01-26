const visitRaw = require('unist-util-visit')
const visit = (visitRaw && visitRaw.visit) ? visitRaw.visit : (visitRaw && visitRaw.default ? visitRaw.default : visitRaw)

function serializeNode(n) {
  if (!n || typeof n !== 'object') return null;
  const out = { type: n.type };
  if (typeof n.value === 'string') out.value = n.value;
  if (typeof n.url === 'string') out.url = n.url;
  if (typeof n.alt === 'string') out.alt = n.alt;
  if (typeof n.lang === 'string') out.lang = n.lang;
  if (n.data && typeof n.data === 'object') {
    if (n.data.filename) out.data = { filename: n.data.filename };
  }
  if (Array.isArray(n.children) && n.children.length > 0) {
    out.children = n.children.map(serializeNode).filter(Boolean);
  }
  return out;
}

module.exports = function remarkExposeMdNode() {
  return (tree) => {
    visit(tree, (node) => {
      node.data = node.data || {}
      node.data.hProperties = node.data.hProperties || {}
      try {
        node.data.hProperties.__mdx_node = serializeNode(node)
      } catch (e) {
        node.data.hProperties.__mdx_node = undefined
      }
    })
  }
}
