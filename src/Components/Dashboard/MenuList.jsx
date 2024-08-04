import React from "react";
import tw from "tailwind-styled-components";
import { FaCog, FaHamburger, FaUtensils, FaChevronRight } from "react-icons/fa";


const menuItems = [
    {
        label: "Goals",
        iconBg: "bg-red-600",
        icon: <FaCog className="text-white" />,
    },
    {
        label: "Popular Dishes",
        iconBg: "bg-blue-600",
        icon: <FaHamburger className="text-white" />,
    },
    {
        label: "Menus",
        iconBg: "bg-teal-600",
        icon: <FaUtensils className="text-white" />,
    },
];

const MenuList = () => {
    return (
        <Container>
            {menuItems.map((item) => (
                <Item key={item.label}>
                    <IconContainer className={item.iconBg}>{item.icon}</IconContainer>
                    <Label>{item.label}</Label>
                    <Arrow>
                        <FaChevronRight className="w-3 h-3" />
                    </Arrow>
                </Item>
            ))}
        </Container>
    );
};
const Container = tw.div`bg-gray-800 p-4 rounded-lg `;
const Item = tw.div`flex items-center justify-between py-4 px-3 my-1 rounded-lg cursor-pointer hover:bg-gray-700`;
const IconContainer = tw.div`flex items-center justify-center w-8 h-8 rounded-full`;
const Label = tw.div`flex-grow ml-4 text-white`;
const Arrow = tw.div`text-white bg-gray-600 rounded-full p-2`;
export default MenuList;
