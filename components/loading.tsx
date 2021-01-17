import React from 'react';
import {Spin} from 'antd';

export default function Loading(props: any) {
    const randomMessages = [
        'Brings you to greatness...',
        'Show me your true colors...',
        "You're Amazing...",
        "Don't Forget You're great...",
        'Give me your best smile please...',
    ];
    const getMessages = Math.ceil(Math.random() * 5);
    const message = randomMessages[getMessages];
    return (
        <>
            <div {...props}>
                <div className="flex flex-col w-full h-80 inset-0 opacity-100 border-blue-500 border-dashed border-2">
                    <div className="m-auto align-middle">
                        <h2 className="animate-bounce text-xl font-bold flex-initial m-5 text-center align-middle">
                            {message}
                        </h2>
                        <Spin className="block m-auto" size="large" />
                    </div>
                </div>
            </div>
        </>
    );
}
