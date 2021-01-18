import React from 'react';
import {Skeleton} from 'antd';
import useCurrentUser from '../components/auth';
import {ProjectSchema} from '@feedloop/qore-client';
import List from '../components/list';
import Loading from '../components/loading';
import Table from '../components/table';
import LoggedIn from '../layouts/loggedin';
import {client} from '../qoreContext';

export default function Store() {
    const [selectedData, setSelectedData] = React.useState<any>();
    const [brands, setBrands] = React.useState<any>();
    const [stores, setStores] = React.useState<any>();
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

    const getStores = () => {
        const {endpoint, organizationId, projectId} = client.project.config;
        if (selectedData) {
            client.project.axios
                .request<{data: ProjectSchema['allStoresWithParam']['read']}>({
                    baseURL: endpoint,
                    url: `/${projectId}/allStoresWithParam/fields`,
                    method: 'GET',
                })
                .then((fields) => {
                    client.project.axios
                        .request<{data: ProjectSchema['allStoresWithParam']['read']}>({
                            baseURL: endpoint,
                            url: `/${projectId}/allStoresWithParam/rows?brand=${selectedData.id}`,
                            method: 'GET',
                        })
                        .then((datas) => {
                            setStores({
                                fields: fields.data,
                                datas: datas.data,
                            });
                        });
                });
        }

        return stores;
    };

    React.useEffect(() => {
        getBrands(currentUser);
    }, [currentUser]);

    React.useEffect(() => {
        getStores();
    }, [selectedData]);

    return (
        <>
            <LoggedIn
                title="Qore XM | Store"
                active="store"
                user={currentUser}
                content={
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">Store</h1>
                        </div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="py-4">
                                <div>
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
                                    {stores ? <Table data={stores} /> : <Loading className="py-5" />}
                                </div>
                            </div>
                        </div>
                    </>
                }
            />
        </>
    );
}
