import React from "react";
import tw from "tailwind-styled-components";
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TiArrowSortedUp } from "react-icons/ti";

const NetProfitCard = () => {
    return (
        <Card>
            <ProfitInfo>
                <div className="text-base font-medium text-white">Net Profit</div>
                <ProfitAmount>$6759.25</ProfitAmount>
                <PercentageChange>
                    <TiArrowSortedUp className="text-[#03C28A] text-2xl" />
                    <span className="ml-1">3%</span>
                </PercentageChange>
            </ProfitInfo>
            <div className=" items-end">
                <CircularContainer>
                    <CircularProgressbarWithChildren
                        value={70}
                        styles={buildStyles({
                            textColor: "white",
                            pathColor: "#6366F1",
                            trailColor: "#4B5563",
                        })}
                    >
                        <div className="text-white text-xl font-bold">{`70%`}</div>
                        <div className="text-white text-[10px] flex justify-center items-center">
                            Goal Completed
                        </div>
                    </CircularProgressbarWithChildren>
                </CircularContainer>
                <Note>*The values here have been rounded off.</Note>
            </div>
        </Card>
    );
};
const Card = tw.div`p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-white flex items-center justify-between space-x-10`;
const ProfitInfo = tw.div`flex flex-col`;
const ProfitAmount = tw.div`text-4xl font-bold mt-4`;
const PercentageChange = tw.div`text-green-400 mt-9 flex items-center`;
const CircularContainer = tw.div`w-24 h-24 items-end`;
const Note = tw.div`text-sm text-gray-500 mt-2`;
export default NetProfitCard;
