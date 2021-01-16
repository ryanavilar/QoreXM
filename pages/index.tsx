import React from 'react';
import useCurrentUser from '../components/auth';
import Loading from '../components/loading';
import LoggedIn from '../layouts/loggedin';

export default function Home() {
    const currentUser = useCurrentUser();
    if (currentUser === undefined) return <Loading />;

    return (
        <>
            <LoggedIn
                title="Qore XM | Dashboard"
                active="dashboard"
                user={currentUser}
                content={
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="py-4">
                                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                                    <h1>This new Page needs to be rendered fast please</h1>
                                </div>
                            </div>
                        </div>
                    </>
                }
            />
        </>
    );
}
