


import React from 'react';
import tw from 'tailwind-styled-components';
import { IoHomeOutline } from "react-icons/io5";
import { MdInsertChartOutlined } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";
import { BsClipboardCheck } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { RiWallet3Line } from "react-icons/ri";
import logo from '../logo.svg';

const Container = tw.div`relative flex flex-col justify-between min-h-screen w-20 bg-[#1F2029] p-4 items-center lg:block hidden`;
const IconContainer = tw.div`text-gray-400 text-[1.3rem] my-3 p-2 rounded-lg hover:bg-gray-800 hover:text-[#7793EF] cursor-pointer`;
const Logo = tw.img`w-12 h-12 mb-4`;

const MobileContainer = tw.div`flex flex-col justify-between h-screen w-20 bg-[#1F2029] p-4 items-center fixed top-0 left-0 z-50`;
const Overlay = tw.div`fixed inset-0 bg-black opacity-50 z-40`;

const Sidebar = ({ isOpen, toggleSidebar }) => (
    <>
        <div className={`lg:block hidden`}>
            <Container>
                <div>
                    <Logo src={logo} alt="Logo" />
                    <IconContainer><IoHomeOutline /></IconContainer>
                    <IconContainer><MdInsertChartOutlined /></IconContainer>
                    <IconContainer><LuClipboardCheck /></IconContainer>
                    <IconContainer><RiWallet3Line /></IconContainer>
                    <IconContainer><BsClipboardCheck /></IconContainer>
                </div>
                <IconContainer className="absolute bottom-4"><AiOutlineLogout /></IconContainer>
            </Container>
        </div>
        {isOpen && (
            <>
                <Overlay onClick={toggleSidebar} />
                <MobileContainer>
                    <div>
                        <Logo src={logo} alt="Logo" />
                        <IconContainer><IoHomeOutline /></IconContainer>
                        <IconContainer><MdInsertChartOutlined /></IconContainer>
                        <IconContainer><LuClipboardCheck /></IconContainer>
                        <IconContainer><RiWallet3Line /></IconContainer>
                        <IconContainer><BsClipboardCheck /></IconContainer>
                    </div>
                    <IconContainer className="absolute bottom-4"><AiOutlineLogout /></IconContainer>
                </MobileContainer>
            </>
        )}
    </>
);

export default Sidebar;
