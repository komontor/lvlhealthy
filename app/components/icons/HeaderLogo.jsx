import React from "react";

function HeaderLogo({ className }) {
  return (
    <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 60 60" fill="currentColor">
        <path d="M37.5684 46.867L32.1233 51.6655C31.5906 52.1352 31.2848 52.8083 31.2848 53.5152H37.8841V46.9977C37.8841 46.8379 37.6917 46.7556 37.5734 46.8621L37.5684 46.867Z" fill="currentColor"/>
        <path d="M27.8767 51.6655L22.4316 46.867C22.3132 46.7604 22.1208 46.8427 22.1208 47.0025V53.52H28.7201C28.7201 52.8131 28.4143 52.14 27.8816 51.6703L27.8767 51.6655Z" fill="currentColor"/>
        <path d="M45.4994 24.0654V23.6005C45.4994 23.2567 45.3021 22.942 44.9963 22.787L38.6387 19.5573C34.9889 17.7028 32.3748 14.444 31.3342 10.6526C35.7682 10.9674 40.1036 12.8558 43.3342 16.3276C43.7386 16.7586 44.1233 17.2089 44.4883 17.6737C43.6843 15.3253 42.3921 13.1948 40.725 11.408C38.0666 8.556 34.4809 7.02589 30.8311 6.82736V5.83472C30.8311 5.34082 31.053 4.87598 31.4377 4.56124C32.0543 4.0625 32.3946 3.25386 32.2121 2.37744C32.0345 1.53975 31.344 0.857008 30.4908 0.682691C29.0308 0.382479 27.7435 1.47196 27.7435 2.85197C27.7435 3.55408 28.0789 4.18355 28.5968 4.58545C28.9766 4.88566 29.1739 5.35535 29.1739 5.83472V6.82736C25.524 7.03073 21.9383 8.556 19.2799 11.408C17.6128 13.1996 16.3206 15.3253 15.5166 17.6737C15.8816 17.2089 16.2663 16.7586 16.6708 16.3276C19.9014 12.8558 24.2367 10.9722 28.6708 10.6526C27.6301 14.4392 25.016 17.7028 21.3662 19.5573L15.0086 22.787C14.6979 22.9468 14.5056 23.2616 14.5056 23.6005V24.0654H45.5043H45.4994Z" fill="currentColor"/>
        <path d="M53.3662 28.4911C52.365 28.4911 51.5117 29.1012 51.1665 29.9631H8.83354C8.48829 29.1012 7.63502 28.4911 6.63378 28.4911C5.32676 28.4911 4.27127 29.5321 4.27127 30.8104C4.27127 32.0888 5.33169 33.1298 6.63378 33.1298C7.63502 33.1298 8.48829 32.5197 8.83354 31.6578H14.037C15.0481 38.9694 20.4094 44.9204 27.4821 46.9105C29.1245 47.3705 30.8755 47.3705 32.5179 46.9105C39.5906 44.9204 44.9519 38.9694 45.963 31.6578H51.1665C51.5117 32.5197 52.365 33.1298 53.3662 33.1298C54.6732 33.1298 55.7287 32.0888 55.7287 30.8104C55.7287 29.5321 54.6683 28.4911 53.3662 28.4911ZM27.8816 35.2071C28.2565 34.8294 28.5623 35.2749 28.8434 35.4928C29.2035 35.7736 29.5882 35.9818 30.0025 36.006C30.4168 35.9818 30.8015 35.7785 31.1615 35.4928C31.4427 35.2749 31.7485 34.8294 32.1233 35.2071C32.4834 35.5751 32.2071 36.0061 31.9112 36.3256C31.6005 36.6646 31.2306 36.8922 30.8064 37.0277C30.545 37.1101 30.2737 37.1536 29.9975 37.1536C29.7213 37.1536 29.4501 37.1101 29.1887 37.0277C28.7694 36.8922 28.3995 36.6694 28.0838 36.3256C27.7879 36.0061 27.5117 35.5751 27.8718 35.2071H27.8816ZM33.4846 40.9741L33.1147 41.1532C32.873 41.2743 32.6017 41.3372 32.3305 41.3372L30.7324 41.2791C30.2441 41.2598 29.7608 41.2598 29.2725 41.2791L27.6745 41.3372C27.4032 41.3372 27.1319 41.2743 26.8903 41.1532L26.5203 40.9741C26.3379 40.8821 26.3231 40.6303 26.4957 40.5189L27.7139 39.7345C28.1233 39.473 28.6165 39.3713 29.0949 39.4585L29.6473 39.5553C29.8841 39.5989 30.1307 39.5989 30.3674 39.5553L30.9199 39.4585C31.3983 39.3713 31.8964 39.473 32.3009 39.7345L33.5191 40.5189C33.6917 40.6303 33.6769 40.8821 33.4944 40.9741H33.4846Z" fill="currentColor"/>
        <path d="M48.1036 53.767H46.7324C47.201 56.958 49.9877 59.4081 53.3662 59.4081C56.7448 59.4081 59.5314 56.9531 60 53.767H48.0986H48.1036Z" fill="currentColor"/>
        <path d="M1.37115 53.767H0C0.468557 56.958 3.25524 59.4081 6.63378 59.4081C10.0123 59.4081 12.799 56.9531 13.2676 53.767H1.36621H1.37115Z" fill="currentColor"/>
        <path d="M53.3366 38.3206L57.307 53.8445H49.3662L53.3366 38.3206ZM53.3366 34.3452L48.0986 54.8129H58.5697L53.3317 34.3452H53.3366Z" fill="currentColor"/>
        <path d="M6.60913 38.3206L10.5795 53.8445H2.63872L6.60913 38.3206ZM6.60913 34.3452L1.37115 54.8129H11.8422L6.60419 34.3452H6.60913Z" fill="currentColor"/>
</svg>
    </div>
  );
}

export default HeaderLogo;