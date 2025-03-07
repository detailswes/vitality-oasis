"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Data for FAQs
const faqItems = [
  {
    question: "What Makes Your Rehab Center Different?",
    answer: (
      <div>
        <p className="mb-4">
          We understand that choosing the right rehab center is a crucial
          decision. Here's what sets us apart:
        </p>
        <h6 className="text-xl font-normal mb-[6px]">
          Personalized Treatment Plans:
        </h6>
        <p className="mb-[18px]">
          We don't believe in one-size-fits-all solutions. Our expert team will
          work with you to create a customized plan that addresses your unique
          needs, goals, and underlying causes of addiction.
        </p>
        <h6 className="text-xl font-normal mb-[6px]">Holistic Approach:</h6>
        <p className="mb-[18px]">
          We believe in treating the whole person, not just the addiction. Our
          programs incorporate a variety of therapies, including individual and
          group counseling, medication-assisted treatment (if needed), and
          holistic practices like yoga, meditation, and art therapy.
        </p>
        <h6 className="text-xl font-normal mb-[6px]">
          Dual Diagnosis Expertise:
        </h6>
        <p className="mb-[18px]">
          We specialize in treating co-occurring mental health disorders and
          addiction. Our integrated approach ensures that both conditions are
          addressed comprehensively, maximizing your chances of lasting
          recovery.
        </p>
        <h6 className="text-xl font-normal mb-[6px]">
          Experienced and Compassionate Team:
        </h6>
        <p className="mb-[18px]">
          Our dedicated team of medical professionals, therapists, and
          counselors provides unwavering support and guidance throughout your
          journey. We are committed to your long-term success and a fulfilling
          life beyond addiction.
        </p>
        <h6 className="text-xl font-normal mb-[6px]">
          Serene and Supportive Environment:
        </h6>
        <p className="mb-[18px]">
          Our tranquil and private setting provides a sanctuary for healing.
          Experience a supportive atmosphere where you can focus on your
          recovery and discover a holistic approach to wellness.
        </p>
      </div>
    ),
  },
  {
    question: "What Types of Addiction Do You Treat?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "What Is the Typical Length of Stay?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "What Is Your Approach to Aftercare?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Can Family Members Be Involved in Treatment?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: " What Happens After I Complete the Program?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

export default function Faq() {
  return (
    <>
      <div className="border-dashed border-t-2 border-[#E6D8CE] mt-10 md:my-20" />
      <section className="my-10 md:mt-[68px] md:mb-[90px]">
        <h2 className="text-4xl md:text-[56px] text-center font-normal bg-text-gradient text-transparent bg-clip-text font-Frank leading-[42px] md:leading-[62px] ">
          Frequently Asked Questions
        </h2>
        <div className="w-full max-w-[200px] h-[1px] mt-4 orb-gradient-line mx-auto"></div>

        <div className="mt-6 md:mt-[53px] mx-auto w-full max-w-[1200px] bg-[#FDF7F3] py-12 md:py-[87px] px-4 rounded-[20px]">
          <div className="w-full max-w-[896px] mx-auto">
            <Accordion type="single" defaultValue="item-1" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className={`mt-${
                    index > 0 ? 7 : 0
                  } hover:shadow-xl transition-shadow`}
                >
                  <AccordionTrigger className="font-normal font-Inter text-[#1F1168]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#1F1168] font-normal">
                    {typeof item.answer === "string" ? (
                      <p>{item.answer}</p>
                    ) : (
                      item.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
