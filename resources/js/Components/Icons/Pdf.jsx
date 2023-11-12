import React from "react";
import PropType from "prop-types";
const Pdf = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 2.75C2 1.78477 2.78477 1 3.75 1H8.125V4.5C8.125 4.98398 8.51602 5.375 9 5.375H12.5V9.3125H10.0938H9.4375H7.03125H6.375C5.40977 9.3125 4.625 10.0973 4.625 11.0625V13.25V14.5625V15H3.75C2.78477 15 2 14.2152 2 13.25V2.75ZM12.5 4.5H9V1L12.5 4.5ZM6.375 10.625H7.03125C7.87617 10.625 8.5625 11.3113 8.5625 12.1562C8.5625 13.0012 7.87617 13.6875 7.03125 13.6875H6.8125V14.5625C6.8125 14.8031 6.61563 15 6.375 15C6.13437 15 5.9375 14.8031 5.9375 14.5625V13.25V11.0625C5.9375 10.8219 6.13437 10.625 6.375 10.625ZM7.03125 12.8125C7.39492 12.8125 7.6875 12.5199 7.6875 12.1562C7.6875 11.7926 7.39492 11.5 7.03125 11.5H6.8125V12.8125H7.03125ZM9.4375 10.625H10.0938C10.8184 10.625 11.4062 11.2129 11.4062 11.9375V13.6875C11.4062 14.4121 10.8184 15 10.0938 15H9.4375C9.19687 15 9 14.8031 9 14.5625V11.0625C9 10.8219 9.19687 10.625 9.4375 10.625ZM10.0938 14.125C10.3344 14.125 10.5312 13.9281 10.5312 13.6875V11.9375C10.5312 11.6969 10.3344 11.5 10.0938 11.5H9.875V14.125H10.0938ZM12.0625 11.0625C12.0625 10.8219 12.2594 10.625 12.5 10.625H13.8125C14.0531 10.625 14.25 10.8219 14.25 11.0625C14.25 11.3031 14.0531 11.5 13.8125 11.5H12.9375V12.375H13.8125C14.0531 12.375 14.25 12.5719 14.25 12.8125C14.25 13.0531 14.0531 13.25 13.8125 13.25H12.9375V14.5625C12.9375 14.8031 12.7406 15 12.5 15C12.2594 15 12.0625 14.8031 12.0625 14.5625V12.8125V11.0625Z"
                fill="#374151"
            />
        </svg>
    );
};
Pdf.propTypes = {
    className: PropType.string,
};
export default Pdf;
