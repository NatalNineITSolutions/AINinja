import React from "react";
import PropType from "prop-types";

const Instagram = ({ className }) => {
   return (
      <svg
         width="16"
         height="16"
         viewBox="0 0 16 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={className}
      >
         <g clipPath="url(#clip0_28_2504)">
            <path
               d="M5.13636 0.9C2.80056 0.9 0.9 2.80056 0.9 5.13636V10.8636C0.9 13.1994 2.80056 15.1 5.13636 15.1H10.8636C13.1994 15.1 15.1 13.1994 15.1 10.8636V5.13636C15.1 2.80056 13.1994 0.9 10.8636 0.9H5.13636ZM5.13636 1.73636H10.8636C12.745 1.73636 14.2636 3.25498 14.2636 5.13636V10.8636C14.2636 12.745 12.745 14.2636 10.8636 14.2636H5.13636C3.25498 14.2636 1.73636 12.745 1.73636 10.8636V5.13636C1.73636 3.25498 3.25498 1.73636 5.13636 1.73636ZM11.8182 3.44545C11.6229 3.44545 11.4356 3.52304 11.2975 3.66113C11.1594 3.79923 11.0818 3.98652 11.0818 4.18182C11.0818 4.37711 11.1594 4.56441 11.2975 4.70251C11.4356 4.8406 11.6229 4.91818 11.8182 4.91818C12.0135 4.91818 12.2008 4.8406 12.3389 4.70251C12.477 4.56441 12.5545 4.37711 12.5545 4.18182C12.5545 3.98652 12.477 3.79923 12.3389 3.66113C12.2008 3.52304 12.0135 3.44545 11.8182 3.44545ZM8 4.4C6.01554 4.4 4.4 6.01554 4.4 8C4.4 9.98446 6.01554 11.6 8 11.6C9.98446 11.6 11.6 9.98446 11.6 8C11.6 6.01554 9.98446 4.4 8 4.4ZM8 5.23636C9.53008 5.23636 10.7636 6.46992 10.7636 8C10.7636 9.53008 9.53008 10.7636 8 10.7636C6.46992 10.7636 5.23636 9.53008 5.23636 8C5.23636 6.46992 6.46992 5.23636 8 5.23636Z"
               fill="currentColor"
               stroke="currentColor"
               strokeWidth="0.2"
            />
         </g>
         <defs>
            <clipPath id="clip0_28_2504">
               <rect width="16" height="16" fill="white" />
            </clipPath>
         </defs>
      </svg>
   );
};

Instagram.propTypes = {
   className: PropType.string,
};

export default Instagram;
