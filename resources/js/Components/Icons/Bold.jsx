import React from "react";
import PropType from "prop-types";
const Bold = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 1.75C2 1.33437 2.34891 1 2.78261 1H4.34783H4.86957H8.91304C11.1467 1 12.9565 2.73438 12.9565 4.875C12.9565 5.95938 12.4902 6.94375 11.7402 7.64687C13.0772 8.27812 14 9.59687 14 11.125C14 13.2656 12.1902 15 9.95652 15H4.86957H4.34783H2.78261C2.34891 15 2 14.6656 2 14.25C2 13.8344 2.34891 13.5 2.78261 13.5H3.56522V8V2.5H2.78261C2.34891 2.5 2 2.16563 2 1.75ZM8.91304 7.25C10.2826 7.25 11.3913 6.1875 11.3913 4.875C11.3913 3.5625 10.2826 2.5 8.91304 2.5H5.13043V7.25H8.91304ZM5.13043 8.75V13.5H9.95652C11.3261 13.5 12.4348 12.4375 12.4348 11.125C12.4348 9.8125 11.3261 8.75 9.95652 8.75H8.91304H5.13043Z"
                fill="#374151"
            />
        </svg>
    );
};
Bold.propTypes = {
    className: PropType.string,
};

export default Bold;
