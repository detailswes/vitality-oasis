import { useState } from "react";

const StorySection = () => {
    const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

    function toggleCard(cardId: string) {
        setExpandedCards((prev) => ({
            ...prev,
            [cardId]: !prev[cardId],
        }));
    }

    const stories = [
        {
            id: "card1",
            name: "Sarah J",
            title: "Focus on Hope and Transformation",
            review: "I came to this rehab center feeling lost and hopeless. Addiction had taken over my life, and I didn't know how to get back on track. But the compassionate staff, the holistic therapies, and the supportive environment gave me the strength to heal..I came to this rehab center feeling lost and hopeless. Addiction had taken over my life, and I didn't know how to get back on track. But the compassionate staff, the holistic therapies, and the supportive environment gave me the strength to heal.",
        },
        {
            id: "card2",
            name: "Michael B",
            title: "Focus on Personalized Care and Lasting Sobriety",
            review: "What impressed me most about this rehab center was the personalized approach. They took the time to understand my unique needs and challenges, and they created a treatment plan specifically for me.",
        },
        {
            id: "card3",
            name: "Emily R",
            title: "Focus on Community and Support",
            review: "The sense of community at this rehab center was incredible. I finally felt like I wasn't alone in my struggles. The group therapy sessions were powerful, and the friendships I made were invaluable. I learned so much from others who had been through similar situations.",
        },
    ];

    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Stories of Recovery</h2>
            <p className="text-center mb-10">
                Real experiences from people who found hope and healing at Vitality Oasis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stories.map((story) => (
                    <div
                        key={story.id}
                        className={`bg-white rounded-lg shadow-lg p-5 transition-all duration-300 flex flex-col justify-between h-auto ${
                            expandedCards[story.id] ? "max-h-[500px]" : "max-h-[200px]"
                        } overflow-hidden`}
                    >
                        <div>
                            <div className="flex items-center mb-3">
                                <div className="text-xl font-bold text-blue-600">{story.name}</div>
                                <div className="ml-2 text-yellow-400">★★★★★</div>
                            </div>
                            <p className="text-sm mb-3">{story.title}</p>
                            <p className={`text-gray-600 ${expandedCards[story.id] ? "" : "line-clamp-3"}`}>
                                {story.review}
                            </p>
                        </div>

                        {/* View More / Show Less Button */}
                        <button
                            onClick={() => toggleCard(story.id)}
                            className="mt-3 text-blue-500 hover:underline self-start"
                        >
                            {expandedCards[story.id] ? "Show Less ↑" : "View More →"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StorySection;
