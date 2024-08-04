import React from "react";
import tw from "tailwind-styled-components";
import Card from "../Components/Dashboard/Card";
import ActivityChart from "../Components/Dashboard/ActivityChart";
import RecentOrders from "../Components/Dashboard/RecentOrders";
import CustomerFeedback from "../Components/Dashboard/CustomerFeedback";
import NetProfitCard from "../Components/Dashboard/NetProfitCard";
import MenuList from "../Components/Dashboard/MenuList";

const Dashboard = () => (
  <Container>
    <Title>Dashboard</Title>
    <div className="lg:flex lg:space-x-6 space-y-4 lg:space-y-0">
      <Section>
        <Card
          title="Total Orders"
          value="75"
          icon="orders"
          change="3%"
          changeIcon="up"
        />
        <Card
          title="Total Delivered"
          value="70"
          icon="delivered"
          change="3%"
          changeIcon="down"
        />
        <Card
          title="Total Cancelled"
          value="05"
          icon="cancelled"
          change="3%"
          changeIcon="up"
        />
        <Card
          title="Total Revenue"
          value="$12k"
          icon="revenue"
          change="3%"
          changeIcon="down"
        />
      </Section>
      <SideSection>
        <NetProfitCard />
      </SideSection>
    </div>
    <div className="lg:flex lg:space-x-6 space-y-4 lg:space-y-0">
      <TableSection>
        <ActivityChart />
      </TableSection>
      <SideSection>
        <MenuList />
      </SideSection>
    </div>
    <div className="lg:flex lg:space-x-6 space-y-4 lg:space-y-0">
      <TableSection>
        <RecentOrders />
      </TableSection>
      <SideSection>
        <CustomerFeedback />
      </SideSection>
    </div>
  </Container>
);
const Container = tw.div`sm:p-4 px-2 py-4 space-y-4`;
const Section = tw.div`grid grid-cols-2 xl:grid-cols-4 sm:gap-4 gap-2 lg:w-2/3 w-full`;
const TableSection = tw.div` lg:w-2/3 w-full`;
const SideSection = tw.div`lg:w-1/3  w-full`;
const Title = tw.h1`text-2xl font-semibold text-white`;
export default Dashboard;
