import {Transition} from '@tailwindui/react';
import React, {useState} from 'react';
import qoreContext, {client} from '../qoreContext';
import {ProjectSchema} from '@feedloop/qore-client';
import {Tooltip} from 'antd';

export default function Navbar(props: {content: React.ReactNode; user: any; active: string}) {
    const [isOpened, setMenu] = useState(false);
    const listMenu = [
        {
            id: 'dashboard',
            href: '/',
            name: 'Dashboard',
            svgd:
                'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        },
        {
            id: 'brand',
            href: '/brand',
            name: 'Brand',
            svgd: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
        },
        {
            id: 'store',
            href: '/store',
            name: 'Store',
            svgd: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
        },
        {
            id: 'customer',
            href: '/customer',
            name: 'Customer',
            svgd:
                'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
            id: 'form',
            href: '/form',
            name: 'Form',
            svgd:
                'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
        },
    ];
    return (
        <>
            <div className="h-screen flex overflow-hidden bg-gray-100">
                {/* Mobile Menu */}
                <div className="md:hidden">
                    <div className={`${isOpened ? '' : 'hidden '} fixed inset-0 flex z-40`}>
                        <Transition
                            className={`${isOpened ? '' : 'hidden '} `}
                            aria-hidden={isOpened}
                            show={isOpened}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                        </Transition>

                        <Transition
                            className="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700"
                            show={isOpened}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <button
                                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => {
                                        setMenu(false);
                                    }}
                                >
                                    <span className="sr-only">Close sidebar</span>
                                    <svg
                                        className="h-6 w-6 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                <div className="flex-shrink-0 flex items-center px-4">
                                    <h1
                                        id="logo"
                                        className="text-2xl font-bold text-white leading-7 sm:text-3xl sm:truncate"
                                    >
                                        Qore XM
                                    </h1>
                                </div>
                                <nav className="mt-5 px-2 space-y-1">
                                    {listMenu.map((menu) => (
                                        <a
                                            key={menu.id}
                                            href={menu.href}
                                            className={`${
                                                menu.id === props.active
                                                    ? 'bg-indigo-800'
                                                    : 'hover:bg-indigo-600 hover:bg-opacity-75'
                                            } text-white group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                                        >
                                            <svg
                                                className="mr-4 h-6 w-6 text-indigo-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d={menu.svgd}
                                                />
                                            </svg>
                                            {menu.name}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
                                <div className="flex-shrink-0 w-full group block">
                                    <div className="flex items-center">
                                        <div className="flex-initial">
                                            <img
                                                className="inline-block h-10 w-10 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3 flex-auto">
                                            <p className="mb-1 text-base font-medium text-white">{props.user?.name} </p>
                                            <a
                                                href="#"
                                                className="text-sm font-medium text-indigo-200 group-hover:text-white"
                                            >
                                                View profile
                                            </a>
                                        </div>
                                        <div className="flex-1">
                                            <Tooltip title="Sign Out">
                                                <a
                                                    href="#"
                                                    className="text-white bg-indigo-500 hover:bg-indigo-300 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm rounded-md"
                                                >
                                                    <svg
                                                        className="m-auto h-6 w-6 text-indigo-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                        />
                                                    </svg>
                                                </a>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                        <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
                    </div>
                </div>
                {/* Desktop Menu */}
                <div className="hidden bg-indigo-700 md:flex md:flex-shrink-0">
                    <div className="flex flex-col w-64">
                        <div className="flex flex-col h-0 flex-1">
                            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                                <div className="flex items-center flex-shrink-0 px-4">
                                    <h1
                                        id="logo"
                                        className="text-2xl font-bold text-white leading-7 sm:text-3xl sm:truncate"
                                    >
                                        Qore XM
                                    </h1>
                                </div>
                                <nav className="mt-5 flex-1 px-2 space-y-1">
                                    {listMenu.map((menu) => (
                                        <a
                                            key={menu.id}
                                            href={menu.href}
                                            className={`${
                                                menu.id === props.active
                                                    ? 'bg-indigo-800'
                                                    : 'hover:bg-indigo-600 hover:bg-opacity-75'
                                            } text-white group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                                        >
                                            <svg
                                                className="mr-4 h-6 w-6 text-indigo-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d={menu.svgd}
                                                />
                                            </svg>
                                            {menu.name}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
                                <div className="flex-shrink-0 w-full group block">
                                    <div className="flex items-center">
                                        <div className="flex-initial">
                                            <img
                                                className="inline-block h-9 w-9 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3 flex-auto">
                                            <p className="text-sm font-medium text-white mb-1">{props.user?.name}</p>
                                            <a
                                                href="#"
                                                className="text-xs font-medium text-indigo-200 group-hover:text-white"
                                            >
                                                View profile
                                            </a>
                                        </div>

                                        <div className="flex-1">
                                            <Tooltip title="Sign Out">
                                                <a
                                                    href="#"
                                                    className="text-white bg-indigo-500 hover:bg-indigo-300 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm rounded-md"
                                                >
                                                    <svg
                                                        className="m-auto h-6 w-6 text-indigo-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                        />
                                                    </svg>
                                                </a>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-0 flex-1 overflow-hidden">
                    <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
                        <button
                            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => {
                                setMenu(true);
                            }}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                        <div className="py-6">{props.content}</div>
                    </main>
                </div>
            </div>
        </>
    );
}
