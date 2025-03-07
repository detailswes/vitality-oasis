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
    question: "What types of addiction treatments are offered at the center?",
    answer:
      "The center offers a wide range of addiction treatments, including inpatient rehabilitation, outpatient programs, detoxification services, dual diagnosis treatment, and holistic therapies. Each treatment plan is customized to meet the specific needs of the individual, ensuring a comprehensive approach to recovery.",
  },
  {
    question: "How long does the rehabilitation program typically last?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question:
      "Is family involvement allowed during the rehabilitation process?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "What should I bring with me to the rehab center?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "What happens after I complete the rehab program?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

export default function Faq() {
  return (
    <>
      <div className="border-dashed border-t-2 border-[#E6D8CE] mt-10 md:my-20" />
      <section className="my-10 md:mt-[68px] md:mb-[90px]">
        <h2 className="text-4xl md:text-[56px] text-center font-normal bg-text-gradient text-transparent bg-clip-text font-Frank leading-normal md:leading-[62px] ">
          Frequently Asked Questions
        </h2>
        <div className="w-full max-w-[200px] h-[1px] mt-4 orb-gradient-line mx-auto"></div>

        <div className="mt-6 md:mt-[63px] mx-auto w-full max-w-[1200px] bg-[#FDF7F3] py-12 md:py-[87px] px-4 rounded-[20px]">
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
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
