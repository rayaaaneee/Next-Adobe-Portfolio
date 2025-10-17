"use client";

import ComingSoon from '@/components/coming-soon';

interface NotFoundInterface {
    statusCode?: number;
}

const NotFound = ({ statusCode = 404 }: NotFoundInterface) => {
    return (
        <ComingSoon title="Page Not Found"/>
    );
}

export default NotFound;