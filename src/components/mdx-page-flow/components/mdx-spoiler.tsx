import type ChildrenInterface from '@/util/interface/children';

// Placeholder for Spoiler component — left empty for later implementation
export const MdxSpoiler = (props: ChildrenInterface & { title?: string, node?: unknown }) => {
    // Prefer explicit title prop (set by the remark plugin via hProperties.title)
    const title = props.title || undefined;
    return (
        <details className='mdx-spoiler'>
            <summary className='cursor-pointer underline underline-offset-2'>
                { title || 'Spoiler' }
            </summary>
            <div className='mt-2'>
                { props.children }
            </div>
        </details>
    );
};
