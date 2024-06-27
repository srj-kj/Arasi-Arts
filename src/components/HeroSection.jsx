import React from "react";

const Hero = () => {
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };
  const textStyle = {
    WebkitTextStroke: "1px #CA2E55",
    color: "white",
  };

  return (
    <div
      className="hero object-contain flex mt-16 gap-6 custom-width ml-44"
      style={{ height: "756px" }}
    >
      <div
        className="w-1/3 h-full"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="src/public/assets/images/hero-1.jpeg"
          alt="Section 1 Image"
          style={imageStyle}
        />
      </div>

      <div className="flex flex-col w-1/3" style={{ gap: "16px" }}>
        <div style={{ height: "150px" }}>
          <img
            src="src/assets/images/hero-2.png"
            alt="Top Image"
            style={imageStyle}
          />
        </div>
        <div
          className="flex items-start justify-center bg-white"
          style={{ height: "420px" }}
        >
          <div className="text-center mt-4">
            <h6 className="text-5xl font-bold custom-font-poppins">
              <span className="block">WELCOME TO</span>
            </h6>
            <h6 className="text-9xl font-bold" style={textStyle}>
              ARASI <br /> ARTS
            </h6>
            <button className="btn bg-black text-white font-normal custom-font-poppins hover:bg-rose-500 mt-8 px-16 ">
              Buy Now
            </button>
          </div>
        </div>
        <div style={{ height: "150px" }}>
          <img
            src="src/assets/images/hero-3.png"
            alt="Bottom Image"
            style={imageStyle}
          />
        </div>
      </div>

      <div className="w-1/3 h-full">
        <img
          src="src/assets/images/hero-4.jpeg"
          alt="Section 3 Image"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default Hero;
