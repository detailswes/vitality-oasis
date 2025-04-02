import { useState, useEffect, useRef } from "react";
import StarsImage from "@/assets/images/stars.svg";

const StorySection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showToggleButton, setShowToggleButton] = useState<{ [key: string]: boolean }>({});
  const textRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const CHARACTER_LIMIT = 200;

  function toggleCard(cardId: string) {
    setExpandedCard((prev) => (prev === cardId ? null : cardId)); // Collapse others
  }

  const stories = [
    {
      borderColor: "border-[#DC5C3F]",
      id: "card1",
      name: "Sarah J",
      review:
        "I came to this rehab center feeling lost and hopeless. Addiction had taken over my life, and I didn't know how to get back on track. But the compassionate staff, the holistic therapies, and the supportive environment gave me the strength to heal..I came to this rehab center feeling lost and hopeless. Addiction had taken over my life, and I didn't know how to get back on track. But the compassionate staff, the holistic therapies, and the supportive environment gave me the strength to heal.",
    },
    {
      borderColor: "border-[#D98918]",
      id: "card2",
      name: "Michael B",
      review:
        "What impressed me most about this rehab center was the personalized approach. They took the time to understand my unique needs and challenges, and they created a treatment plan specifically for me.",
    },
    {
      borderColor: "border-[#DC4186]",
      id: "card3",
      name: "Emily R",
      review:
        "The sense of community at this rehab center was incredible. I finally felt like I wasn't alone in my struggles. The group therapy sessions were powerful, and the friendships I made were invaluable. I learned so much from others who had been through similar situations.",
    },
  ];

  useEffect(() => {
    const newShowToggleButton = stories.reduce((acc, story) => {
   
      acc[story.id] = story.id !== "card2" && story.review.length > CHARACTER_LIMIT;
      return acc;
    }, {} as { [key: string]: boolean });

    setShowToggleButton(newShowToggleButton);
  }, []);

  return (
    <div className="max-w-[1200px] w-full px-4 lg:px-0 md:mx-auto mt-10 md:mt-[67px] mb-10 md:mb-28">
      <h2 className="text-4xl md:text-5xl font-normal bg-text-gradient bg-clip-text text-transparent font-Frank text-center leading-relaxed">
        Stories of Recovery
      </h2>
      <p className="text-center text-base md:text-[22px] text-text mb-10 mt-2 md:mt-4">
        Real experiences from people who found hope and healing at Vitality Oasis.
      </p>

      <div className="flex flex-wrap md:flex-nowrap justify-center gap-5 items-start">
        {stories.map((story) => (
          <div
            key={story.id}
            className={`bg-white cursor-pointer hover:shadow-xl hover:shadow-primary md:min-h-[316px] rounded-lg shadow-[0px_3px_8px_0px_rgba(76,19,7,0.15)] px-5 pt-9 transition-all border-t-4 duration-300 flex flex-col justify-between h-auto w-full ${story.borderColor} ${story.id === "card2" ? "mb-8 md:mb-0" : ""}`}
          >
            <div onClick={() => toggleCard(story.id)}>
              <div className="flex items-center gap-[10px] mb-5">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-[30px] font-bold">
                  {story.name?.charAt(0)}
                </div>
                <div>
                  <div className="text-xl font-medium text-[#FF7300]">{story.name}</div>
                  <img src={StarsImage.src} alt="stars" />
                </div>
              </div>
              
            
              <div
                ref={(el) => {
                  textRefs.current[story.id] = el;
                }}
                className={`overflow-hidden transition-all duration-1000 ${
                  expandedCard === story.id || story.id === "card2" ? "max-h-[500px]" : "max-h-[72px]"
                }`}
              >
                <p className={`text-gray-600 ${story.id === "card2" ? "pb-6 md:pb-0" : ""}`}>
                  {story.review}
                </p>
              </div>
            </div>

            {showToggleButton[story.id] && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event
                  toggleCard(story.id);
                }}
                className="mt-3 mb-6 text-primary hover:underline self-start flex items-center"
              >
                {expandedCard === story.id ? (
                  <span>
                    Show Less <span>↑</span>
                  </span>
                ) : (
                  <span>
                    View More <span className="text-2xl">→</span>
                  </span>
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorySection;