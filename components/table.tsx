export default function Table(props: {data?: any}) {
    let datas = [];
    let fields: any[] = [];
    console.log(datas.length);

    if (Object.keys(props).length !== 0) {
        const fieldsRaw = props.data.fields;
        datas = props.data.datas.nodes;
        fields = fieldsRaw.nodes.map((field: any) => field.id);
    }

    if (datas.length == 0) {
        return (
            <div className="py-5">
                <div className="flex flex-col w-full h-80  border-gray-300 border-dashed border-2">
                    <div className="m-auto align-middle">
                        <h2 className="text-xl text-grey-500 flex-initial m-5 text-center align-middle">
                            No Data In this Table
                        </h2>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-4">
            <div>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            {fields.map((field: any) => {
                                                return (
                                                    <th
                                                        key={field}
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        {field}
                                                    </th>
                                                );
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datas.map((data: any) => {
                                            {
                                                return (
                                                    <tr
                                                        className="group hover:bg-indigo-600 cursor-pointer bg-white"
                                                        key={data.id}
                                                    >
                                                        {fields.map((keyName: any) => {
                                                            if (typeof data[keyName] == 'string') {
                                                                return (
                                                                    <td
                                                                        key={keyName + data.id}
                                                                        className="group-hover:text-white px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                                                    >
                                                                        {data[keyName]}
                                                                    </td>
                                                                );
                                                            } else {
                                                                return (
                                                                    <td
                                                                        key={keyName + data.id}
                                                                        className="group-hover:text-white px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                                                    ></td>
                                                                );
                                                            }
                                                        })}
                                                    </tr>
                                                );
                                            }
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
