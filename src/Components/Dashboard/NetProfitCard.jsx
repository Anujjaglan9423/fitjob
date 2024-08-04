
// import React from 'react';
// import tw from 'tailwind-styled-components';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const Card = tw.div`p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-white flex items-center justify-between`;
// const ProfitInfo = tw.div`flex flex-col`;
// const ProfitAmount = tw.div`text-4xl font-bold`;
// const PercentageChange = tw.div`text-green-400 mt-2 flex items-center`;
// const CircularContainer = tw.div`w-16 h-16`;
// const Note = tw.div`text-sm text-gray-500 mt-2`;

// const NetProfitCard = () => {
//     return (
//         <Card>
//             <ProfitInfo>
//                 <div>Net Profit</div>
//                 <ProfitAmount>$6759.25</ProfitAmount>
//                 <PercentageChange>
//                     <svg
//                         className="w-4 h-4 fill-current"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                     >
//                         <path d="M12 2L1 21h22L12 2zm0 3.842L19.222 19H4.778L12 5.842zM12 15a2 2 0 110-4 2 2 0 010 4z" />
//                     </svg>
//                     <span className="ml-1">3%</span>
//                 </PercentageChange>
//             </ProfitInfo>
//             <div className="flex flex-col items-center">
//                 <CircularContainer>
//                     <CircularProgressbar
//                         value={70}
//                         text={`${70}%`}

//                         styles={buildStyles({
//                             textColor: 'white',
//                             pathColor: '#6366F1',
//                             trailColor: '#4B5563',
//                         })}
//                     />
//                 </CircularContainer>

//             </div>
//             <Note>*The values here have been rounded off.</Note>
//         </Card>
//     );
// };

// export default NetProfitCard;

// NetProfitCard.js
import React from 'react';
import tw from 'tailwind-styled-components';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { TiArrowSortedUp } from "react-icons/ti";

const Card = tw.div`p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-white flex items-center justify-between space-x-10`;
const ProfitInfo = tw.div`flex flex-col`;
const ProfitAmount = tw.div`text-4xl font-bold mt-4`;
const PercentageChange = tw.div`text-green-400 mt-9 flex items-center`;
const CircularContainer = tw.div`w-24 h-24`
const Note = tw.div`text-sm text-gray-500 mt-2`;

const NetProfitCard = () => {
    return (
        <Card>
            <ProfitInfo>
                <div>Net Profit</div>
                <ProfitAmount>$6759.25</ProfitAmount>
                <PercentageChange>
                    <TiArrowSortedUp className="text-[#03C28A] text-2xl" />
                    <span className="ml-1">3%</span>
                </PercentageChange>
            </ProfitInfo>
            <div className=" items-center">
                <CircularContainer>
                    <CircularProgressbarWithChildren
                        value={70}
                        styles={buildStyles({
                            textColor: 'white',
                            pathColor: '#6366F1',
                            trailColor: '#4B5563',
                        })}
                    >
                        <div className="text-white text-xl font-bold">{`70%`}</div>
                        <div className="text-white text-[10px] flex justify-center items-center">Goal Completed</div>
                    </CircularProgressbarWithChildren>

                </CircularContainer>
                <Note>*The values here have been rounded off.</Note>
            </div>

        </Card>
    );
};

export default NetProfitCard;

