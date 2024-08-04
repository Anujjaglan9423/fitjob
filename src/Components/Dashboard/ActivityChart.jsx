import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import tw from "tailwind-styled-components";

const data = [
    { day: "1", activity: 5000 },
    { day: "2", activity: 10000 },
    { day: "3", activity: 7500 },
    { day: "4", activity: 5000 },
    { day: "5", activity: 12500 },
    { day: "6", activity: 10000 },
    { day: "7", activity: 15000 },
    { day: "8", activity: 13000 },
    { day: "9", activity: 10000 },
    { day: "10", activity: 7000 },
    { day: "11", activity: 9000 },
    { day: "12", activity: 5000 },
    { day: "13", activity: 10000 },
    { day: "14", activity: 7500 },
    { day: "15", activity: 5000 },
    { day: "16", activity: 12500 },
    { day: "17", activity: 10000 },
    { day: "18", activity: 15000 },
    { day: "19", activity: 13000 },
    { day: "20", activity: 10000 },
    { day: "21", activity: 7000 },
    { day: "22", activity: 9000 },
];

const ActivityChart = () => {
    return (
        <Container>
            <Header>
                <TitleText>Activity</TitleText>
                <Dropdown>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                </Dropdown>
            </Header>
            <ResponsiveContainer width="100%" height={160}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="day" tick={{ fill: "#9CA3AF" }} />
                    <YAxis tick={{ fill: "#9CA3AF" }} />
                    <Tooltip cursor={{ fill: "transparent" }} />
                    <Bar dataKey="activity" fill="#4F46E5" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    );
};
const Container = tw.div`bg-gray-800 p-4 rounded-lg w-full`;
const Header = tw.div`flex justify-between items-center mb-4`;
const TitleText = tw.h2`text-base font-medium text-white`;
const Dropdown = tw.select`bg-gray-700 text-white py-1 px-3 rounded-full`;
export default ActivityChart;
