import React from 'react';
import tw from 'tailwind-styled-components';
import { FaStar } from 'react-icons/fa';

const Container = tw.div`p-6 bg-gray-800 rounded-lg shadow-md`;
const Title = tw.h2`text-xl text-white font-semibold mb-4`;
const FeedbackItem = tw.div`py-4 flex items-start`;
const FeedbackContent = tw.div`ml-4`;
const Name = tw.div`text-lg text-white`;
const Comment = tw.p`text-gray-400 mt-2`;
const ProfileImage = tw.img`w-12 h-12 rounded-full`;
const Separator = tw.hr`border-gray-700 my-1`;

const feedback = [
    {
        name: 'Jenny Wilson',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.',
        rating: 5,
    },
    {
        name: 'Dianne Russell',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread.',
        rating: 5,
    },
    {
        name: 'Devon Lane',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        comment: 'Normally wings are wings, but theirs are lean meaty and tender.',
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
                            <div className="flex">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500" />
                                ))}
                                {[...Array(5 - item.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-gray-500" />
                                ))}
                            </div>
                            <Comment>{item.comment}</Comment>
                        </FeedbackContent>
                    </FeedbackItem>
                    {index < feedback.length - 1 && <Separator />}
                </React.Fragment>
            ))}
        </Container>
    );
};

export default CustomerFeedback;
