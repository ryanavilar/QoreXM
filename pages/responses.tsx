import React from 'react';
import useCurrentUser from '../components/auth';
import List from '../components/list';
import Loading from '../components/loading';
import Table from '../components/table';
import LoggedIn from '../layouts/loggedin';

export default function Home() {
    const people = [
        {id: 1, name: 'Durward Reynolds'},
        {id: 2, name: 'Kenton Towne'},
        {id: 3, name: 'Therese Wunsch'},
        {id: 4, name: 'Benedict Kessler'},
        {id: 5, name: 'Katelyn Rohan'},
    ];

    const currentUser = useCurrentUser();
    if (currentUser === undefined) return <Loading />;

    return (
        <>
            <LoggedIn
                title="Qore XM | Dashboard"
                active="responses"
                user={currentUser}
                content={
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="py-4">
                                <List label="Choose Brand" data={people} />
                                <Table />
                            </div>
                        </div>
                    </>
                }
            />
        </>
    );
}
