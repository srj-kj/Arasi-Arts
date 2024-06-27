import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between items-center custom-width px-4 py-2 ml-44">
      <div className="flex items-center">
        <a className="text-4xl font-normal text-customColor custom-font-volkhov">
          Arasi Arts
        </a>
      </div>

      <div className="navbar-center hidden lg:flex flex-grow justify-center">
        <ul className="menu menu-horizontal px-1 custom-font-poppins flex">
          <li>
            <a className="text-rose-500 font-bold">Home</a>
          </li>
          <li className="ml-4">
            <a>Product</a>
          </li>
          <li className="ml-4">
            <a>Classes</a>
          </li>
          <li className="ml-4">
            <a>Blogs</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <div className="mr-4">
          <a href="#" style={{ color: "#323564" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#323564"
                d="M21.707 20.293l-5.004-5.004a8.5 8.5 0 1 0-1.414 1.414l5.004 5.004a1 1 0 0 0 1.414-1.414zM4 10.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"
              />
            </svg>
          </a>
        </div>

        <div className="mr-2">
          <a href="https://facebook.com" style={{ padding: "8px" }}>
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 14.5072C28 6.49398 21.728 -0.00952148 14 -0.00952148C6.272 -0.00952148 0 6.49398 0 14.5072C0 21.5333 4.816 27.3836 11.2 28.7336V18.8623H8.4V14.5072H11.2V10.878C11.2 8.07631 13.398 5.79718 16.1 5.79718H19.6V10.1522H16.8C16.03 10.1522 15.4 10.8055 15.4 11.6039V14.5072H19.6V18.8623H15.4V28.9514C22.47 28.2256 28 22.0414 28 14.5072Z"
                fill="#323654"
              />
            </svg>
          </a>
        </div>

        <div className="mr-2">
          <a href="https://instagram.com" style={{ padding: "8px" }}>
            <svg
              width="25"
              height="27"
              viewBox="0 0 25 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 11.977C0 6.34309 -1.65568e-07 3.52538 1.62778 1.77589C3.25417 0.0249022 5.87361 0.0249023 11.1111 0.0249023H13.8889C19.1264 0.0249023 21.7458 0.0249022 23.3722 1.77589C25 3.52538 25 6.34309 25 11.977V14.9651C25 20.599 25 23.4167 23.3722 25.1662C21.7458 26.9172 19.1264 26.9172 13.8889 26.9172H11.1111C5.87361 26.9172 3.25417 26.9172 1.62778 25.1662C-1.65568e-07 23.4167 0 20.599 0 14.9651V11.977ZM20.8333 6.74797C20.8333 7.34233 20.6138 7.91234 20.2231 8.33261C19.8324 8.75289 19.3025 8.98899 18.75 8.98899C18.1975 8.98899 17.6676 8.75289 17.2769 8.33261C16.8862 7.91234 16.6667 7.34233 16.6667 6.74797C16.6667 6.15362 16.8862 5.5836 17.2769 5.16333C17.6676 4.74306 18.1975 4.50695 18.75 4.50695C19.3025 4.50695 19.8324 4.74306 20.2231 5.16333C20.6138 5.5836 20.8333 6.15362 20.8333 6.74797ZM15.2778 14.9651C15.2778 15.7575 14.9851 16.5175 14.4642 17.0779C13.9432 17.6383 13.2367 17.9531 12.5 17.9531C11.7633 17.9531 11.0567 17.6383 10.5358 17.0779C10.0149 16.5175 9.72222 15.7575 9.72222 14.9651C9.72222 14.1726 10.0149 13.4126 10.5358 12.8522C11.0567 12.2918 11.7633 11.977 12.5 11.977C13.2367 11.977 13.9432 12.2918 14.4642 12.8522C14.9851 13.4126 15.2778 14.1726 15.2778 14.9651ZM18.0556 14.9651C18.0556 16.55 17.4702 18.07 16.4284 19.1908C15.3865 20.3115 13.9734 20.9411 12.5 20.9411C11.0266 20.9411 9.6135 20.3115 8.57163 19.1908C7.52976 18.07 6.94444 16.55 6.94444 14.9651C6.94444 13.3801 7.52976 11.8601 8.57163 10.7393C9.6135 9.61861 11.0266 8.989 12.5 8.98899C13.9734 8.989 15.3865 9.61861 16.4284 10.7393C17.4702 11.8601 18.0556 13.3801 18.0556 14.9651Z"
                fill="#323654"
              />
            </svg>
          </a>
        </div>
        <div className="mr-2">
          <a href="https://twitter.com" style={{ padding: "8px" }}>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9625 0.937256H17.8763L11.5113 8.6144L19 19.063H13.1371L8.54186 12.7273L3.28971 19.063H0.373214L7.18064 10.8487L0 0.938684H6.01214L10.1596 6.72868L14.9625 0.937256ZM13.9379 17.223H15.5529L5.13 2.68154H3.39829L13.9379 17.223Z"
                fill="#323654"
              />
            </svg>
          </a>
        </div>

        <a className="btn bg-customColor  hover:bg-rose-500  text-white">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
