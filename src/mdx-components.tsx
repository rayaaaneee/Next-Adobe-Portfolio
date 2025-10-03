import type { MDXComponents } from 'mdx/types'
 
const components: MDXComponents = {
    // Add custom components here
    // Example:
    // h1: (props) => <h1 style={{ color: 'tomato' }} {...props} />,
}

export const useMDXComponents = (): MDXComponents => (components)
