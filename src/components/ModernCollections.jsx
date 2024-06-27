import React, { useState } from "react";
import carousal_1 from "../public/assets/images/carousal-1.png";
import carousal_2 from "../public/assets/images/carousal-2.png";
import carousal_3 from "../public/assets/images/carousal-3.png";


const sections = [
  {
    item: "1",
    url: {carousal_1},
    title: "Pencil Portrait",
  },
  {
    item: "2",
    url: {carousal_2},
    title: "Abstract Art",
  },
  {
    item: "3",
    url: {carousal_3},
    title: "Nature Scenery",
  },
];

const ModernCollections = () => {
  const [selectedSection, setSelectedSection] = useState(sections[0].item);

  const handleSectionChange = (item) => {
    setSelectedSection(item);
  };

  const goToPreviousSection = () => {
    const currentIndex = sections.findIndex(
      (section) => section.item === selectedSection
    );
    const newIndex = (currentIndex - 1 + sections.length) % sections.length;
    setSelectedSection(sections[newIndex].item);
  };

  const goToNextSection = () => {
    const currentIndex = sections.findIndex(
      (section) => section.item === selectedSection
    );
    const newIndex = (currentIndex + 1) % sections.length;
    setSelectedSection(sections[newIndex].item);
  };

  return (
    <div
      className="p-2 mt-24 w-full"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 2.24%, #FAFAFA 102.24%)",
      }}
    >
      <div className="flex    ml-40">
        <div className="w-1/3 flex flex-col justify-center ml-32 relative">
          <h4 className="text-4xl custom-font-volkhov text-left">
            Check out our <br /> modern collections
          </h4>
          <div className="w-96 mt-12">
            <p className="text-start custom-font-poppins">
              Explore our collection of exquisite artwork, featuring diverse
              styles and mediums from renowned and emerging artists.
            </p>
          </div>
          <button
            className="mt-16 btn text-white custom-font-poppins w-60 shadow-lg"
            style={{ backgroundColor: "#323654" }}
          >
            Buy now
          </button>

          <div className="absolute right-4 bottom-4 flex items-center space-x-2">
            <button
              className=" bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold"
              onClick={goToPreviousSection}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.293 5.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1 0 1.414l4 4a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4z"
                />
              </svg>
            </button>
            <button
              className="text-gray-500 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center"
              style={{ color: "#323654" }}
              onClick={goToNextSection}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.707 14.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 0-1.414l-4-4a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-3/4  flex flex-col items-center ">
          <div className="relative flex gap-5">
            {sections.map((item, index) => (
              <div
                key={index}
                className="relative"
                onClick={() => handleSectionChange(item.item)}
                style={{ zIndex: selectedSection === item.item ? 10 : 1 }}
              >
                <figure>
                  <img
                    src={item.url}
                    style={{
                      height: selectedSection === item.item ? "400px" : "300px",
                      width: "300px",
                    }}
                    alt={`Collection ${item.item}`}
                  />
                  {selectedSection === item.item && (
                    <div className="absolute bottom-6 left-5 rounded-md p-5 bg-white text-black">
                      <p className="custom-font-poppins font-medium">
                        {item.title}
                      </p>
                    </div>
                  )}
                </figure>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {sections.map((item, index) => (
              <div
                key={index}
                className={`h-5 w-5 cursor-pointer rounded-full mx-2 flex items-center justify-center ${
                  selectedSection === item.item ? "bg-pink-600" : ""
                }`}
                onClick={() => handleSectionChange(item.item)}
              >
                <div
                  className={`h-3 w-3 rounded-full border-2 ${
                    selectedSection === item.item
                      ? "bg-pink-400"
                      : "bg-[#323654]"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernCollections;
