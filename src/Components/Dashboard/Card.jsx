import React from 'react';
import tw from 'tailwind-styled-components';
import { FaShoppingBasket } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { TbShoppingCartDollar } from "react-icons/tb";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Card = ({ title, value, icon, change, changeIcon }) => {
    const getIcon = (icon) => {
        switch (icon) {
            case 'orders':
                return <FaShoppingBasket className="text-[#455CD7] bg-[#29326A] p-2 rounded-lg" />;
            case 'delivered':
                return <HiShoppingBag className="text-[#00CA8C] bg-[#125447] p-2 rounded-lg" />;
            case 'cancelled':
                return <HiMiniShoppingBag className="text-[#F75C5D] bg-[#613337] p-2 rounded-lg" />;
            case 'revenue':
                return <TbShoppingCartDollar className="text-[#E149A3] bg-[#5A2C4C] p-2 rounded-lg" />;
            default:
                return null;
        }
    };

    const getChangeIcon = (changeIcon) => {
        switch (changeIcon) {
            case 'up':
                return <TiArrowSortedUp className="text-[#03C28A] text-2xl" />;
            case 'down':
                return <TiArrowSortedDown className="text-[#E4555B] text-2xl" />;
            default:
                return null;
        }
    };

    const getChangeColor = (changeIcon) => {
        switch (changeIcon) {
            case 'up':
                return 'text-[#03C28A]';
            case 'down':
                return 'text-[#E4555B]';
            default:
                return '';
        }
    };

    return (
        <Container>
            <IconWrapper>
                {getIcon(icon)}
            </IconWrapper>
            <Title>{title}</Title>
            <div className='flex justify-between items-center'>
                <Value>{value}</Value>
                <div className={`text-sm flex items-center font-semibold ${getChangeColor(changeIcon)}`}>
                    {getChangeIcon(changeIcon)}
                    <span className="ml-1">{change}</span>
                </div>
            </div>
        </Container>
    );
};

const Container = tw.div`p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300`;
const Title = tw.h3`text-white text-base font-medium my-5`;
const Value = tw.div`text-2xl text-white font-semibold`;
const IconWrapper = tw.div`text-[3rem] rounded-lg`;

export default Card;
