import React, { useState } from 'react';
import new_1 from "../public/assets/images/nw-1.png";
import new_2 from "../public/assets/images/nw-2.png";
import new_3 from "../public/assets/images/nw-3.png";
import new_4 from "../public/assets/images/nw-4.png";
import new_5 from "../public/assets/images/nw-5.png";
import new_6 from "../public/assets/images/nw-5.png";
import star from "../public/assets/images/star.png";


const sections = [
  { item: 1, title: "Tanjore painting", category: 1 },
  { item: 2, title: "Finger painting", category: 2 },
  { item: 3, title: "Resin painting", category: 3 },
  { item: 4, title: "Relief painting", category: 4 },
  { item: 5, title: "Mosaic painting", category: 5 },
];

const images = [
  { url: new_1,title: "Oil painting", category: 2, rating: 5 },
  { url:new_2,title: "Clay painting", category: 2, rating: 5 },
  { url: new_3, title: "Pencil painting",category: 2, rating: 5 },
  { url: new_4,title: "Relief Art", category: 2, rating: 5 },
  { url: new_5,title: "Saree painting", category: 2, rating: 5 },
  { url: new_6,title: "Resin painting", category: 2, rating: 5 },
  
];

const NewArrivals = () => {
  const [selectedTab, setSelectedTab] = useState(2);

  const handleSectionChange = (item) => {
    setSelectedTab(item);
  };

  const filteredImages = images.filter(image => image.category === selectedTab);

  return (
    <div className="p-4 custom-width ml-44 mt-24">
      <h2 className="text-3xl font-bold mb-4 custom-font-volkhov">New Arrivals</h2>
      <p className="text-gray-500 font-rubik">Check out our extensive product collection and buy them now!</p>
      <div className="flex justify-center mb-4 mt-16 gap-10 ">
        {sections.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSectionChange(item.item)}
            className={`relative mx-2 rounded-md cursor-pointer custom-font-poppins textarea-md  p-2 ${selectedTab === item.item ? 'bg-blue-950 text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}
            role="tab"
           
          >
            {item.title}
            {selectedTab === item.item && (
              <div className="absolute inset-0 rounded-full pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 mt-4 mb-4 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredImages.map((image, index) => (
          <Card key={index} url={image.url} title={image.title} rating={image.rating} />
        ))}
      </div>

      <div className='flex justify-center mt-3 mb-8 items-center'> 
      <button className="mt-16 btn text-white custom-font-poppins w-60 shadow-lg" style={{ backgroundColor: '#323654' }}>
         View more
          </button>
      </div>
    </div>
  );
};

const Card = ({ url, rating, title }) => {
  return (
    <div className="card bg-white shadow-md" style={{ width: '386px', height: '438px' }}>
      <figure className="flex justify-center px-5 pt-3" style={{ width: '336px', height: '244px' }}>
        <img
          src={url}
          alt="Artwork"
          className="rounded-xl object-cover"
          style={{ width: '100%', height: '100%' }}
        />
      </figure>
      <div className="card-body items-start text-center">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-center mb-2">
          {Array.from({ length: rating }, (_, index) => (
            <img
              key={index}
              src={star}
              alt="Star"
              className="w-4 h-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};




export default NewArrivals;
