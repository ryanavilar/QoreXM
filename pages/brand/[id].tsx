import React from 'react';
import {useRouter} from 'next/router';
import useCurrentUser from '../../components/auth';
import LoggedIn from '../../layouts/loggedin';
import Loading from '../../components/loading';
import Table from '../../components/table';
import {client} from '../../qoreContext';

const Brands = () => {
    const router = useRouter();
    const {id} = router.query;
    const currentUser = useCurrentUser();
    const [brand, setBrand] = React.useState<any>();
    const [stores, setStores] = React.useState<any>();

    const getBrand = (id: any) => {
        const {endpoint, organizationId, projectId} = client.project.config;
        if (currentUser) {
            client.project.axios
                .request({
                    baseURL: endpoint,
                    url: `/${projectId}/brandsPerUser/rows/${id}`,
                    method: 'GET',
                })
                .then((datas) => {
                    setBrand(datas.data);
                });
        }

        return brand;
    };

    const getStores = () => {
        const {endpoint, organizationId, projectId} = client.project.config;
        if (brand) {
            client.project.axios
                .request({
                    baseURL: endpoint,
                    url: `/${projectId}/allStoresWithParam/fields`,
                    method: 'GET',
                })
                .then((fields) => {
                    client.project.axios
                        .request({
                            baseURL: endpoint,
                            url: `/${projectId}/allStoresWithParam/rows?brand=${brand.id}`,
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
        getBrand(id);
    }, [currentUser]);

    React.useEffect(() => {
        getStores();
    }, [brand]);

    return (
        <LoggedIn
            title="Qore XM | Brand"
            active="brand"
            user={currentUser}
            content={
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <h1 className="text-2xl group flex px-2 py-2">
                            <a
                                href="/brands"
                                className="text-base flex-initial text-grey-600 group flex items-center px-2 py-2 font-medium rounded-md"
                            >
                                <svg
                                    className="h-6 w-6 text-indigo-600 font-semibold"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </a>
                            <div className="flex w-4/5 flex-auto flex-col">
                                <span className="mt-1 font-semibold text-2xl">{brand ? brand.name : ''}</span>
                                <p className="text-base">{brand ? brand.description : ''}</p>
                            </div>
                            <div className="flex text-base flex-auto flex-1 content-end">
                                <button className="mt-2 p-2 h-10 text-white bg-indigo-500 hover:bg-indigo-300 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center text-sm rounded-md">
                                    Edit Brand
                                </button>
                            </div>
                        </h1>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <div className="flex">
                            <div className="w-6/12 px-2 overflow-x-hidden">
                                {stores ? <Table data={stores} /> : <Loading className="py-5" />}
                            </div>
                            <div className="w-6/12 px-2 overflow-x-hidden">
                                {stores ? <Table data={stores} /> : <Loading className="py-5" />}
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    );
};

export default Brands;
