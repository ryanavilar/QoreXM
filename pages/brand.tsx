import React from 'react';
import useCurrentUser from '../components/auth';
import Loading from '../components/loading';
import Table from '../components/table';
import LoggedIn from '../layouts/loggedin';

export default function Home() {
    const currentUser = useCurrentUser();
    if (currentUser === undefined) return <Loading />;

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
                                <Table />
                            </div>
                        </div>
                    </>
                }
            />
        </>
    );
}
