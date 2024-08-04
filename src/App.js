import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import tw from "tailwind-styled-components";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleHeaderMenu = () => {
    setIsHeaderMenuOpen(!isHeaderMenuOpen);
  };

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Main>
        <Header
          toggleSidebar={toggleSidebar}
          toggleHeaderMenu={toggleHeaderMenu}
          isHeaderMenuOpen={isHeaderMenuOpen}
        />
        <Dashboard />
      </Main>
    </Container>
  );
};
const Container = tw.div`flex bg-gray-900 text-white max-h-fit `;
const Main = tw.div`flex-1 flex flex-col`;
export default App;
