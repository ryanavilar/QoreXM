import React from 'react';
import {Skeleton} from 'antd';
import useCurrentUser from '../components/auth';
import {ProjectSchema} from '@feedloop/qore-client';
import List from '../components/list';
import Table from '../components/table';
import Loading from '../components/loading';
import LoggedIn from '../layouts/loggedin';
import {client} from '../qoreContext';

export default function Responses() {
    const people = [
        {id: 1, name: 'Durward Reynolds'},
        {id: 2, name: 'Kenton Towne'},
        {id: 3, name: 'Therese Wunsch'},
        {id: 4, name: 'Benedict Kessler'},
        {id: 5, name: 'Katelyn Rohan'},
    ];

    const [brands, setBrands] = React.useState<any>();
    const [resps, setResps] = React.useState<any>();
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

    const getResponses = (user: any) => {
        const {endpoint, organizationId, projectId} = client.project.config;
        if (user) {
            client.project.axios
                .request<{data: ProjectSchema['responsesDefaultView']['read']}>({
                    baseURL: endpoint,
                    url: `/${projectId}/responsesDefaultView/fields`,
                    method: 'GET',
                })
                .then((fields) => {
                    client.project.axios
                        .request<{data: ProjectSchema['responsesDefaultView']['read']}>({
                            baseURL: endpoint,
                            url: `/${projectId}/responsesDefaultView/rows`,
                            method: 'GET',
                        })
                        .then((datas) => {
                            setResps({
                                fields: fields.data,
                                datas: datas.data,
                            });
                        });
                });
        }

        return resps;
    };

    React.useEffect(() => {
        getResponses(currentUser);
        getBrands(currentUser);
    }, [currentUser]);
    return (
        <>
            <LoggedIn
                title="Qore XM | Dashboard"
                active="responses"
                user={currentUser}
                content={
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">Responses</h1>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="py-4">
                                {brands ? (
                                    <List label="Choose Brand" data={brands} value={'id'} display={'name'} />
                                ) : (
                                    <Skeleton.Input className="w-40 h-2" active={true} size={'small'} />
                                )}
                                {resps ? <Table data={resps} /> : <Loading className="py-5" />}
                            </div>
                        </div>
                    </>
                }
            />
        </>
    );
}
