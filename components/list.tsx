import {useState, Fragment} from 'react';
import {Listbox} from '@headlessui/react';
import {SELECTION_ALL} from 'antd/lib/table/hooks/useSelection';

export default function List(props: {
    label: string;
    data: any;
    value: any;
    display: string;
    changeHandler: any;
    selectedData: any;
}) {
    return (
        <Listbox value={props.selectedData} onChange={props.changeHandler}>
            <label id="listbox-label" className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <div className="mt-1 relative">
                <Listbox.Button
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                    className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <span className="block truncate">{props.selectedData[props.display]}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        {/* Heroicon name: selector */}
                        <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </Listbox.Button>

                <Listbox.Options
                    aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-item-3"
                    className="absolute mt-1 w-full rounded-md bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                >
                    {props.data.nodes.map((entity: any) => (
                        /* Use the `active` state to conditionally style the active option. */
                        /* Use the `selected` state to conditionally style the selected option. */
                        <Listbox.Option as={Fragment} key={entity.id} value={entity}>
                            {({active, selected}) => {
                                selected = props.selectedData[props.value] === entity[props.value];
                                return (
                                    <li
                                        id="listbox-option-0"
                                        role="option"
                                        value={entity[props.value]}
                                        className={`${
                                            active
                                                ? 'text-white bg-indigo-600 cursor-default select-none relative py-2 pl-3 pr-9'
                                                : 'text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
                                        }`}
                                    >
                                        {selected && (
                                            <span
                                                className={`${
                                                    active ? 'text-white' : 'text-indigo-600'
                                                } absolute inset-y-0 right-0 flex items-center pr-4`}
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        )}
                                        <span className={`${selected ? 'font-bold' : 'font-normal'} block truncate`}>
                                            {entity[props.display]}
                                        </span>
                                    </li>
                                );
                            }}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    );
}
