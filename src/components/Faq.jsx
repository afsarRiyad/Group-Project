import React, { useState } from "react";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { LuLayers, LuPencilLine } from "react-icons/lu";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      icon: <LuPencilLine/>,
      question: "Brand Marketing",
      answer:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
    {
      id: 2,
      icon: <LuLayers/>,
      question: "Marketing SEO",
      answer:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
    {
      id: 3,
      icon: <FaEarthAsia/>,
      question: "Social Media",
      answer:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
          <div>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={item.id}>
                  <button onClick={() => handleClick(index)}
                    className="w-[376px] flex text-[14px] font-inter items-center justify-between border border-gray-200 pr-3 rounded">
                    <h3 className="flex items-center p-2 gap-4"> <span className="p-3 bg-gray-200 rounded-md">{item.icon}</span> {item.question}</h3>

                    {activeIndex ===  index ?
                    <BsArrowDown/>
                    :
                    <BsArrowRight/>
                    }
                  </button>
                  {activeIndex === index && (
                    <div className="w-[376px] text-justify border border-gray-200 p-4 rounded-b">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
    </div>
  );
};

export default Faq;