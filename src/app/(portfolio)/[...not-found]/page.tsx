"use client";

import ComingSoon from '@/components/coming-soon';
import useLanguage from '@/utils/hook/use-language';

const NotFound = () => {

    const { language } = useLanguage();

    return (
        <ComingSoon
            className='h-screen'
            title={language.not_found.title}
            text={language.not_found.text}
        />
    );
};

export default NotFound;
