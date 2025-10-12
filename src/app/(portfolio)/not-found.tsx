"use client";

import ErrorPage from 'next/error';

interface NotFoundInterface {
    statusCode?: number;
}

const NotFound = ({ statusCode = 404 }: NotFoundInterface) => {
    return (
        <div className='![&_*]:text-black relative w-screen h-screen bg-yellow-100 bg-opacity-75'>
            <ErrorPage statusCode={statusCode} />
        </div>
    );
}

export default NotFound;