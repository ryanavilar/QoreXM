import React from 'react';
import {Skeleton} from 'antd';
import useCurrentUser from '../components/auth';
import {ProjectSchema} from '@feedloop/qore-client';
import List from '../components/list';
import Table from '../components/table';
import Loading from '../components/loading';
import LoggedIn from '../layouts/loggedin';
import {client} from '../qoreContext';

export default function Customer() {
    const people = [
        {id: 1, name: 'Durward Reynolds'},
        {id: 2, name: 'Kenton Towne'},
        {id: 3, name: 'Therese Wunsch'},
        {id: 4, name: 'Benedict Kessler'},
        {id: 5, name: 'Katelyn Rohan'},
    ];

    const [brands, setBrands] = React.useState<any>();
    const [customers, setCustomers] = React.useState<any>();
    const currentUser = useCurrentUser();

    const getBrands = (user: any) => {
        const {endpoint, organizationId, projectId} = client.project.config;
        if (user) {
            client.project.axios
                .request<{data: ProjectSchema['brandsPerUser']['read']}>({
                    baseURL: endpoint,
                    url: `/${projectId}/brandsPerUser/rows?user=${user?.id}`,
                    method: 'GET',
                })
                .then((datas) => setBrands(datas.data));
        }

        return brands;
    };

    const getCustomers = (user: any) => {
        const {endpoint, organizationId, projectId} = client.project.config;
        if (user) {
            client.project.axios
                .request({
                    baseURL: endpoint,
                    url: `/${projectId}/allCustomers/fields`,
                    method: 'GET',
                })
                .then((fields) => {
                    client.project.axios
                        .request({
                            baseURL: endpoint,
                            url: `/${projectId}/allCustomers/rows`,
                            method: 'GET',
                        })
                        .then((datas) => {
                            setCustomers({
                                fields: fields.data,
                                datas: datas.data,
                            });
                        });
                });
        }

        return customers;
    };

    React.useEffect(() => {
        getCustomers(currentUser);
        getBrands(currentUser);
    }, [currentUser]);

    return (
        <>
            <LoggedIn
                title="Qore XM | Customer"
                active="customer"
                user={currentUser}
                content={
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">Customer</h1>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="py-4">
                                {brands ? (
                                    <List label="Choose Brand" data={brands} value={'id'} display={'name'} />
                                ) : (
                                    <Skeleton.Input className="w-40 h-2" active={true} size={'small'} />
                                )}
                                {customers ? <Table data={customers} /> : <Loading className="py-5" />}
                            </div>
                        </div>
                    </>
                }
            />
        </>
    );
}
