import { visit } from "unist-util-visit";

// export default function remarkCustomBlocks() {
//   return (tree) => {
//     visit(tree, (node) => {
//       // On cherche les directives de type "container"
//       if (node.type === "containerDirective") {
//         const data = node.data || (node.data = {});
//         const hast = data.hProperties || (data.hProperties = {});

//         // Exemple: :::note
//         const name = node.name; // "note"

//         // On mappe le nom vers le composant React
//         data.hName = name.charAt(0).toUpperCase() + name.slice(1);
//         data.hProperties = hast;
//       }
//     });
//   };
// }