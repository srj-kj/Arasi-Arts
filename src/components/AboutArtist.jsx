import React from "react";

const AboutArtist = () => {
  return (
    <div
      className="w-full flex lg:flex-row flex-col "
      style={{
        background: "linear-gradient(110deg, #C4C4C4 50%, #DADADA 50%)",
      }}
    >
      <div className="lg:w-1/2 w-full  flex items-center justify-center relative z-10">
        <svg
          width="130"
          height="116"
          viewBox="0 0 130 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M116.333 0.250001C119.571 0.248976 122.689 1.47177 125.063 3.67327C127.438 5.87477 128.892 8.89225 129.135 12.1208L129.167 13.0833V102.917C129.168 106.154 127.945 109.273 125.743 111.647C123.542 114.021 120.524 115.475 117.296 115.718L116.333 115.75H13.6666C10.4289 115.751 7.31051 114.528 4.93646 112.327C2.56242 110.125 1.10822 107.108 0.865398 103.879L0.833314 102.917V13.0833C0.832289 9.84563 2.05509 6.7272 4.25659 4.35315C6.45808 1.9791 9.47557 0.524912 12.7041 0.282085L13.6666 0.250001H116.333ZM116.333 13.0833H13.6666V102.917H116.333V13.0833ZM54.3483 30.0105L57.6721 31.4863L59.841 32.513L62.3242 33.7322L65.0834 35.131L68.0992 36.7352L71.3525 38.5318L73.0593 39.5072L76.3831 41.4643L79.4246 43.3379L82.1838 45.0897L84.6221 46.7131L87.7021 48.8306L90.0378 50.5182L90.6474 50.9673C91.6377 51.7042 92.4419 52.6623 92.996 53.7653C93.5501 54.8683 93.8387 56.0855 93.8387 57.3198C93.8387 58.5542 93.5501 59.7714 92.996 60.8744C92.4419 61.9773 91.6377 62.9355 90.6474 63.6723L88.5748 65.1803L85.7515 67.1566L83.4671 68.6902L80.8684 70.3777L77.9616 72.1937L74.7597 74.1187L71.3332 76.1014L68.0671 77.9109L65.0449 79.5151L62.2857 80.9268L59.8089 82.1331L55.8177 83.9811L54.3419 84.6227C53.2089 85.111 51.9774 85.3277 50.7458 85.2556C49.5141 85.1836 48.3164 84.8247 47.248 84.2076C46.1797 83.5905 45.2703 82.7323 44.5924 81.7015C43.9146 80.6706 43.487 79.4957 43.3437 78.2702L42.9716 74.6448L42.7662 72.245L42.4967 67.9843L42.3491 64.7247L42.2529 61.1634C42.2415 60.5346 42.2329 59.9058 42.2272 59.2769L42.2144 57.3198C42.2144 55.9916 42.2272 54.7082 42.2529 53.4698L42.3491 49.9086L42.4967 46.6553L42.67 43.7229L42.8625 41.1498L43.3437 36.3758C43.4861 35.1491 43.9133 33.9726 44.5911 32.9402C45.2689 31.9078 46.1786 31.0482 47.2476 30.4298C48.3167 29.8115 49.5154 29.4515 50.7483 29.3787C51.9811 29.3059 53.2139 29.5223 54.3483 30.0105ZM58.2689 46.0586L55.4712 44.6597L55.2851 47.7847L55.144 51.3202L55.0606 55.2344L55.0477 57.3198L55.0606 59.4052L55.144 63.313L55.2081 65.1289L55.375 68.4656L55.4712 69.9735L58.2561 68.5747L61.381 66.932L64.8139 65.0455L66.6362 64.006L70.1718 61.9142L73.3416 59.9507L76.1393 58.154L77.397 57.3198L74.7854 55.5873L71.7952 53.7008C70.0938 52.6475 68.376 51.6207 66.6426 50.6208L64.8267 49.5877L61.4002 47.7013L58.2689 46.0586Z"
            fill="black"
          />
        </svg>
      </div>

      <div className="lg:w-1/2 w-full px-8 py-12  flex flex-col justify-center relative z-10 ml-36">
        <h2
          className="text-3xl font-bold leading-tight text-gray-900 text-left custom-font-volkhov mt-10"
          style={{ fontSize: "40px" }}
        >
          About the Artist
        </h2>
        <p
          className="mt-10 text-base text-gray-700 leading-relaxed text-left custom-font-poppins"
          style={{ fontSize: "20px" }}
        >
          Meet our artist mrs. elavarasi chokkar. she has been an artist since
          childhood has learned various painting techniques. she has also
          conducted art classes for the past 33 years. in the past five years,
          she has helped numerous women in virudhunagar learn art for free.
          sound inspiring right? from tanjore painting to contemporary art,
          elavarasi has created various art piece with utmost care and
          attention. check out her collection now!
        </p>
        <button
          className="mt-16 btn text-white custom-font-poppins w-60 shadow-lg"
          style={{ backgroundColor: "#323654" }}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default AboutArtist;
