

import React from 'react';
import tw from 'tailwind-styled-components';
import { FaBars, FaSearch, FaRegBell } from 'react-icons/fa';
import { MdMailOutline, MdOutlineSettings } from "react-icons/md";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { HiBars3BottomLeft } from "react-icons/hi2";

const Container = tw.div`flex justify-between items-center p-4 bg-[#1F2029]`;
const SearchBox = tw.div`flex items-center bg-gray-800 p-2 rounded-md`;
const Icon = tw.div`text-gray-400 text-[1.3rem] mx-2 bg-[#44464A] rounded-full p-2 relative cursor-pointer`;
const Badge = tw.div`absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center`;
const IconContainer = tw.div`text-gray-400 text-[1.3rem] my-3 p-2 rounded-md hover:bg-gray-800 hover:text-[#7793EF] cursor-pointer`;
const MobileHeaderMenu = tw.div`flex flex-col bg-[#1F2029] p-4 fixed top-16 right-0 z-50 w-full lg:hidden`;
const MobileMenuOverlay = tw.div`fixed inset-0 bg-black opacity-50 z-40`;

const UserImage = tw.img`w-9 h-9 rounded-full mx-2 cursor-pointer`;

const Header = ({ toggleSidebar, toggleHeaderMenu, isHeaderMenuOpen }) => (
    <>
        <Container>
            <div className="flex items-center lg:hidden">
                <Icon onClick={toggleSidebar}><HiBars3BottomLeft /></Icon>
            </div>
            <SearchBox>
                <FaSearch className="text-gray-400" />
                <input type="text" placeholder="Search" className="bg-transparent ml-2 text-white" />
            </SearchBox>
            <div className="flex items-center lg:hidden">
                <Icon onClick={toggleHeaderMenu}><HiMiniBars3BottomRight /></Icon>
            </div>
            <div className="hidden lg:flex items-center">
                <Icon><MdMailOutline /></Icon>
                <Icon><MdOutlineSettings /></Icon>
                <Icon className="relative">
                    <FaRegBell />
                    <Badge>3</Badge>
                </Icon>
                {/* <Icon> */}
                <UserImage src="https://randomuser.me/api/portraits/men/3.jpg" alt="User" />
                {/* </Icon> */}
            </div>
        </Container>
        {isHeaderMenuOpen && (
            <>
                <MobileMenuOverlay onClick={toggleHeaderMenu} />
                <MobileHeaderMenu>
                    <IconContainer><MdMailOutline /></IconContainer>
                    <IconContainer><MdOutlineSettings /></IconContainer>
                    <IconContainer className="relative">
                        <FaRegBell />
                        <Badge>3</Badge>
                    </IconContainer>
                    <IconContainer>
                        <UserImage src="https://randomuser.me/api/portraits/men/3.jpg" alt="User" />
                    </IconContainer>
                </MobileHeaderMenu>
            </>
        )}
    </>
);

export default Header;

