export default function Table(props: {data: any}) {
    const fieldsRaw = props.data.fields;
    const datas = props.data.datas;

    const fields = fieldsRaw.nodes.map((field: any) => field.id);
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
                                        {datas.nodes.map((data: any) => {
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
