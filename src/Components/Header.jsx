


import React from 'react';
import tw from 'tailwind-styled-components';
import { FaBars, FaSearch, FaEnvelope, FaBell, FaUserCircle, FaCog } from 'react-icons/fa';

const Container = tw.div`flex justify-between items-center p-4 bg-[#1F2029]`;
const SearchBox = tw.div`flex items-center bg-gray-800 p-2 rounded-md`;
const Icon = tw.div`text-gray-400 text-[1.3rem] mx-2 bg-[#44464A] rounded-full p-2 relative`;
const Badge = tw.div`absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center`;
const IconContainer = tw.div`text-gray-400 text-[1.3rem] my-3 p-2 rounded-md hover:bg-gray-800 hover:text-[#7793EF] cursor-pointer`;
const MobileHeaderMenu = tw.div`flex flex-col bg-[#1F2029] p-4 fixed top-16 right-0 z-50 w-full lg:hidden`;
const MobileMenuOverlay = tw.div`fixed inset-0 bg-black opacity-50 z-40`;

const Header = ({ toggleSidebar, toggleHeaderMenu, isHeaderMenuOpen }) => (
    <>
        <Container>
            <div className="flex items-center lg:hidden">
                <Icon onClick={toggleSidebar}><FaBars /></Icon>
            </div>
            <SearchBox>
                <FaSearch className="text-gray-400" />
                <input type="text" placeholder="Search" className="bg-transparent ml-2 text-white" />
            </SearchBox>
            <div className="flex items-center lg:hidden">
                <Icon onClick={toggleHeaderMenu}><FaBars /></Icon>
            </div>
            <div className="hidden lg:flex items-center">
                <Icon><FaEnvelope /></Icon>
                <Icon><FaCog /></Icon>
                <Icon className="relative">
                    <FaBell />
                    <Badge>3</Badge>
                </Icon>
                <Icon><FaUserCircle /></Icon>
            </div>
        </Container>
        {isHeaderMenuOpen && (
            <>
                <MobileMenuOverlay onClick={toggleHeaderMenu} />
                <MobileHeaderMenu>
                    <IconContainer><FaEnvelope /></IconContainer>
                    <IconContainer><FaCog /></IconContainer>
                    <IconContainer className="relative">
                        <FaBell />
                        <Badge>3</Badge>
                    </IconContainer>
                    <IconContainer><FaUserCircle /></IconContainer>
                </MobileHeaderMenu>
            </>
        )}
    </>
);

export default Header;
