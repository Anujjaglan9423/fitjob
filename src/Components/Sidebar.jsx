
// import React from 'react';
// import tw from 'tailwind-styled-components';
// import { FaHome, FaChartBar, FaCog, FaBell, FaSignOutAlt } from 'react-icons/fa';
// import logo from '../logo.svg';

// const Container = tw.div`relative flex flex-col justify-between h-screen  w-20 bg-[#1F2029] p-4 items-center`;
// const IconContainer = tw.div`text-gray-400 text-[1.3rem] my-3 p-2 rounded-lg hover:bg-gray-800 hover:text-[#7793EF] cursor-pointer`;
// const Logo = tw.img`w-12 h-12 mb-4`;

// const Sidebar = () => (
//     <Container >
//         <div>
//             <Logo src={logo} alt="Logo" />
//             <IconContainer><FaHome /></IconContainer>
//             <IconContainer><FaChartBar /></IconContainer>
//             <IconContainer><FaCog /></IconContainer>
//             <IconContainer><FaBell /></IconContainer>
//         </div>
//         <IconContainer className="absolute bottom-4"><FaSignOutAlt /></IconContainer>
//     </Container>
// );

// export default Sidebar;


import React from 'react';
import tw from 'tailwind-styled-components';
import { FaHome, FaChartBar, FaCog, FaBell, FaSignOutAlt } from 'react-icons/fa';
import logo from '../logo.svg';

const Container = tw.div`relative flex flex-col justify-between h-screen w-20 bg-[#1F2029] p-4 items-center lg:block hidden`;
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
                    <IconContainer><FaHome /></IconContainer>
                    <IconContainer><FaChartBar /></IconContainer>
                    <IconContainer><FaCog /></IconContainer>
                    <IconContainer><FaBell /></IconContainer>
                </div>
                <IconContainer className="absolute bottom-4"><FaSignOutAlt /></IconContainer>
            </Container>
        </div>
        {isOpen && (
            <>
                <Overlay onClick={toggleSidebar} />
                <MobileContainer>
                    <div>
                        <Logo src={logo} alt="Logo" />
                        <IconContainer><FaHome /></IconContainer>
                        <IconContainer><FaChartBar /></IconContainer>
                        <IconContainer><FaCog /></IconContainer>
                        <IconContainer><FaBell /></IconContainer>
                    </div>
                    <IconContainer className="absolute bottom-4"><FaSignOutAlt /></IconContainer>
                </MobileContainer>
            </>
        )}
    </>
);

export default Sidebar;
