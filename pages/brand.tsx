import React from 'react';
import {ProjectSchema} from '@feedloop/qore-client';

import useCurrentUser from '../components/auth';
import Loading from '../components/loading';
import Table from '../components/table';
import ButtonModal from '../components/buttonmodal';
import LoggedIn from '../layouts/loggedin';
import {client} from '../qoreContext';

export default function Home() {
    const [brands, setBrands] = React.useState<ProjectSchema['brandsPerUser']['read'] | undefined>();

    const getBrands = (user: any) => {
        const {endpoint, organizationId, projectId} = client.project.config;
        if (user) {
            client.project.axios
                .request<{data: ProjectSchema['brandsPerUser']['read']}>({
                    baseURL: endpoint,
                    url: `/${projectId}/brandsPerUser/fields`,
                    method: 'GET',
                })
                .then((fields) => {
                    client.project.axios
                        .request<{data: ProjectSchema['brandsPerUser']['read']}>({
                            baseURL: endpoint,
                            url: `/${projectId}/brandsPerUser/rows?user=${user?.id}`,
                            method: 'GET',
                        })
                        .then((datas) => {
                            setBrands({
                                fields: fields.data,
                                datas: datas.data,
                            });
                        });
                });
        }

        return brands;
    };

    const currentUser = useCurrentUser();

    React.useEffect(() => {
        getBrands(currentUser);
    }, [currentUser]);

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
                                <ButtonModal />
                                {brands ? <Table data={brands} /> : <Loading className="py-5" />}
                            </div>
                        </div>
                    </>
                }
            />
        </>
    );
}
