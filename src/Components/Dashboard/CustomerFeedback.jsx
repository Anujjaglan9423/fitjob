import React from "react";
import tw from "tailwind-styled-components";
import { FaStar } from "react-icons/fa";

const feedback = [
    {
        name: "Jenny Wilson",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        comment:
            "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.",
        rating: 5,
    },
    {
        name: "Dianne Russell",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        comment: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
        rating: 5,
    },
    {
        name: "Devon Lane",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        comment: "Normally wings are wings, but theirs are lean meaty and tender.",
        rating: 4,
    },
];

const CustomerFeedback = () => {
    return (
        <Container>
            <Title>Customer's Feedback</Title>
            {feedback.map((item, index) => (
                <React.Fragment key={index}>
                    <FeedbackItem>
                        <ProfileImage src={item.image} alt={item.name} />
                        <FeedbackContent>
                            <Name>{item.name}</Name>
                        </FeedbackContent>
                    </FeedbackItem>
                    <div className="pb-4">
                        <div className="flex mt-2">
                            {[...Array(item.rating)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-500" />
                            ))}
                            {[...Array(5 - item.rating)].map((_, i) => (
                                <FaStar key={i} className="text-gray-500" />
                            ))}
                        </div>
                        <Comment>{item.comment}</Comment>
                    </div>
                    {index < feedback.length - 1 && <Separator />}
                </React.Fragment>
            ))}
        </Container>
    );
};
const Container = tw.div`p-6 bg-gray-800 rounded-lg shadow-md h-[75vh] overflow-y-auto`;
const Title = tw.h2`text-xl text-white font-semibold mb-4`;
const FeedbackItem = tw.div`pt-4 flex items-start`;
const FeedbackContent = tw.div`ml-4 items-center `;
const Name = tw.div`text-lg text-white items-center mt-1`;
const Comment = tw.p`text-gray-400 mt-2`;
const ProfileImage = tw.img`w-10 h-10 rounded-full`;
const Separator = tw.hr`border-gray-700 my-1`;
export default CustomerFeedback;
