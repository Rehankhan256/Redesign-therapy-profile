"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your session fees?",
      answer: "Answer goes here.",
    },
    {
      question: "Do you offer virtual therapy?",
      answer: "Answer goes here.",
    },
    {
      question: "How long does therapy typically last?",
      answer: "Answer goes here.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F4F1ED] py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 px-6 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[420px] h-[420px] md:h-[520px] overflow-hidden rounded-t-full rounded-b-[200px]">
            <Image
              src="/Faq.png"
              alt="Therapy office"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT FAQ CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-medium text-[#1F2E1C] mb-8 md:mb-12">
            FAQs
          </h2>

          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-t border-[#1F2E1C] py-6 md:py-8"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start gap-4 md:gap-6 text-left"
                >
                  <span className="mt-1 text-[#1F2E1C]">
                    {openIndex === index ? (
                      <Minus size={20} strokeWidth={1.5} />
                    ) : (
                      <Plus size={20} strokeWidth={1.5} />
                    )}
                  </span>

                  <h3 className="text-xl md:text-2xl font-semibold text-[#1F2E1C]">
                    {faq.question}
                  </h3>
                </button>

                {openIndex === index && (
                  <p className="mt-4 md:mt-6 ml-8 md:ml-10 text-base md:text-lg text-[#1F2E1C]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}

            <div className="border-t border-[#1F2E1C]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
