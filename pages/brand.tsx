import React from 'react';
import {Spin, Space} from 'antd';
import useCurrentUser from '../components/auth';
import LoggedIn from '../layouts/loggedin';

export default function Home() {
    const currentUser = useCurrentUser();
    if (currentUser === undefined)
        return (
            <>
                <main className="block w-full m-auto">
                    <Spin className="m-auto" size="large" />
                </main>
            </>
        );

    return (
        <>
            <LoggedIn
                title="Qore XM | Brand"
                active="brand"
                user={currentUser}
                content={
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">Brand Page</h1>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="py-4">
                                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                            </div>
                        </div>
                    </>
                }
            />
        </>
    );
}
