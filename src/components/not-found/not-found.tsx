import ComingSoon from '@/components/coming-soon';

import type { ComingSoonProps } from '@/components/page-flow/types/coming-soon-props';

const NotFound = ({ title = "not_found.title", text = "not_found.text", buttonText, link = "/blog" }: ComingSoonProps) => {
    return (
        <ComingSoon
            className='h-screen'
            title={title}
            text={text}
            buttonText={buttonText}
            link={link}
        />
    );
};

export default NotFound;
