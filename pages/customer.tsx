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
    const [selectedData, setSelectedData] = React.useState<any>();
    const [brands, setBrands] = React.useState<any>();
    const [customers, setCustomers] = React.useState<any>();
    const currentUser = useCurrentUser();

    const changeHandler = (value: any) => {
        setSelectedData(value);
    };

    const getBrands = (user: any) => {
        const {endpoint, organizationId, projectId} = client.project.config;
        if (user) {
            client.project.axios
                .request({
                    baseURL: endpoint,
                    url: `/${projectId}/brandsPerUser/rows?user=${user?.id}`,
                    method: 'GET',
                })
                .then((datas) => {
                    setBrands(datas.data);

                    if (datas.data.nodes) {
                        setSelectedData(datas.data.nodes[0]);
                    }
                });
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
        getBrands(currentUser);
        getCustomers(currentUser);
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
                                {brands && selectedData ? (
                                    <List
                                        changeHandler={changeHandler}
                                        selectedData={selectedData}
                                        label="Choose Brand"
                                        data={brands}
                                        value={'id'}
                                        display={'name'}
                                    />
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
