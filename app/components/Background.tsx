"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Background() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Education",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Ph.D. in Clinical Psychology</strong><br />
            University of California, Los Angeles (UCLA)
          </p>
          <p>
            <strong>M.A. in Psychology</strong><br />
            University of California, Los Angeles (UCLA)
          </p>
          <p>
            <strong>B.A. in Psychology</strong><br />
            University of California, Berkeley
          </p>
        </div>
      ),
    },
    {
      title: "Licensure",
      content: (
        <div className="space-y-4">
          <p>
            Licensed Clinical Psychologist – State of California
          </p>
          <p>
            License Number: PSY 31245
          </p>
          <p>
            Authorized to provide telehealth services throughout California.
          </p>
        </div>
      ),
    },
    {
      title: "Advanced Training & Certifications",
      content: (
        <div className="space-y-4">
          <p>
            Certified in Eye Movement Desensitization and Reprocessing (EMDR)
          </p>
          <p>
            Advanced Training in Cognitive Behavioral Therapy (CBT)
          </p>
          <p>
            Trauma-Focused Therapy & Somatic-Based Interventions
          </p>
          <p>
            Ongoing professional consultation and continuing education in
            anxiety, trauma, and burnout treatment.
          </p>
        </div>
      ),
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f1d5ea] py-14 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-medium text-[#1F2E1C] text-center mb-20 leading-[1.1]">
          Professional Background
        </h2>

        {/* Accordion Items */}
        {items.map((item, index) => (
          <div
            key={index}
            className="border-t border-[#1F2E1C]"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center py-8 text-left"
            >
              <span className="text-2xl font-medium text-[#1F2E1C]">
                {item.title}
              </span>

              <span className="text-[#1F2E1C]">
                {openIndex === index ? (
                  <Minus size={22} strokeWidth={1.5} />
                ) : (
                  <Plus size={22} strokeWidth={1.5} />
                )}
              </span>
            </button>

            {openIndex === index && (
              <div className="pb-8 text-[#1F2E1C]/80 text-lg leading-relaxed flex items-center justify-center">
                <div className="max-w-2xl">
                  {item.content}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Bottom Border */}
        <div className="border-t border-[#1F2E1C]"></div>

      </div>
    </section>
  );
}
