import React from 'react';
import {Spin} from 'antd';

export default function Loading() {
    const randomMessages = [
        'Brings you to greatness...',
        'Show me your true colors...',
        "You're Amazing...",
        "Don't Forget You're great...",
        'Give me your best smile please...',
    ];
    const getMessages = Math.ceil(Math.random() * 5);
    return (
        <>
            <div className="flex flex-col w-screen h-screen inset-0 bg-gray-200 opacity-100">
                <div className="m-auto align-middle">
                    <h2 className="animate-bounce text-xl font-bold flex-initial m-5 text-center align-middle">
                        {randomMessages[getMessages]}
                    </h2>
                    <Spin className="block m-auto" size="large" />
                </div>
            </div>
        </>
    );
}
