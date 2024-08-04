


import React from 'react';
import tw from 'tailwind-styled-components';
import { useTable } from 'react-table';

const data = [
    { customer: 'Wade Warren', image: 'https://randomuser.me/api/portraits/men/1.jpg', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', image: 'https://randomuser.me/api/portraits/women/2.jpg', orderNo: '48965786', amount: '$365.02', status: 'Delivered' },
    { customer: 'Guy Hawkins', image: 'https://randomuser.me/api/portraits/men/3.jpg', orderNo: '78958215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', image: 'https://randomuser.me/api/portraits/women/4.jpg', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
    { customer: 'Cody Fisher', image: 'https://randomuser.me/api/portraits/men/5.jpg', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', image: 'https://randomuser.me/api/portraits/women/6.jpg', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const columns = [
    {
        Header: 'Customer',
        accessor: 'customer',
        Cell: ({ row }) => (
            <div className="flex items-center">
                <img src={row.original.image} alt={row.original.customer} className="w-8 h-8 rounded-full mr-4" />
                <span>{row.original.customer}</span>
            </div>
        ),
    },
    { Header: 'Order No.', accessor: 'orderNo' },
    { Header: 'Amount', accessor: 'amount' },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
            const statusColors = {
                Delivered: 'bg-green-200 text-green-800',
                Pending: 'bg-yellow-200 text-yellow-800',
                Cancelled: 'bg-red-200 text-red-800',
            };
            return (
                <span className={`px-3 py-1 rounded-full text-sm ${statusColors[value] || 'bg-gray-200 text-gray-800'}`}>
                    {value}
                </span>
            );
        },
    },
];

const Container = tw.div`p-6 bg-gray-800 rounded-lg shadow-md overflow-x-auto`;

const RecentOrders = () => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <Container>
            <h2 className="text-xl text-white font-semibold mb-4">Recent Orders</h2>
            <div className="hidden md:block">
                <table {...getTableProps()} className="w-full text-left">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} className="py-2 text-gray-400">{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className="text-white border-t border-gray-700">
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()} className="py-3">{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="block md:hidden">
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <div key={row.id} className="bg-gray-700 p-4 rounded-lg mb-4">
                            {row.cells.map(cell => (
                                <div key={cell.column.id} className="flex justify-between py-1">
                                    <span className="text-gray-400">{cell.column.Header}</span>
                                    <span className="text-white">{cell.render('Cell')}</span>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default RecentOrders;
