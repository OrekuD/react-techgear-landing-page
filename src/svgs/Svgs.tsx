import React from "react";

interface Props {
  size: number;
  color?: string;
}

export const Logo = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 0.2}
    viewBox="0 0 136.188 27.42"
  >
    <g transform="translate(-390.45 -37)">
      <path
        d="M10.44,18H7.35V13.8l-4.5,1.35V18H.45v4.32h2.4v5.31c0,2.19.54,3.69,1.65,4.56q1.665,1.26,5.94.81V28.92c-2.19.12-3.09-.09-3.09-1.29V22.32h3.09Zm17.52,9.3a8.72,8.72,0,0,0,.18-1.8,7.737,7.737,0,0,0-2.19-5.64,7.114,7.114,0,0,0-5.43-2.28,7.7,7.7,0,0,0-7.98,7.92,7.687,7.687,0,0,0,2.25,5.67,8.268,8.268,0,0,0,6.06,2.25,7.5,7.5,0,0,0,6.54-3.09l-3.6-2.07a3.727,3.727,0,0,1-2.88,1.14c-1.89,0-3.09-.69-3.6-2.1ZM17.22,23.94a3.042,3.042,0,0,1,3.27-2.37,2.985,2.985,0,0,1,3.18,2.37Zm20.67,9.48a7.668,7.668,0,0,0,6.78-3.87L40.74,27.3a2.926,2.926,0,0,1-2.91,1.68,3.318,3.318,0,0,1-3.39-3.48,3.318,3.318,0,0,1,3.39-3.48,2.953,2.953,0,0,1,2.91,1.68l3.93-2.28a7.8,7.8,0,0,0-6.78-3.84,7.742,7.742,0,0,0-7.95,7.92,7.742,7.742,0,0,0,7.95,7.92ZM55.41,17.58a4.963,4.963,0,0,0-4.29,1.83V12h-4.5V33h4.5V24.81c0-2.04,1.08-3.09,2.79-3.09a2.476,2.476,0,0,1,2.61,2.73V33h4.5V23.79a6.229,6.229,0,0,0-1.62-4.56A5.274,5.274,0,0,0,55.41,17.58Zm19.71,1.95a5.319,5.319,0,0,0-4.38-1.95,6.962,6.962,0,0,0-5.28,2.25,7.473,7.473,0,0,0-2.1,5.37,7.593,7.593,0,0,0,2.1,5.4,7.044,7.044,0,0,0,5.28,2.22,5.319,5.319,0,0,0,4.38-1.95v1.38c0,2.07-1.26,3.21-3.39,3.21a3.594,3.594,0,0,1-3.42-1.89l-3.84,2.22c1.35,2.43,3.72,3.63,7.11,3.63a8.7,8.7,0,0,0,5.61-1.83,6.369,6.369,0,0,0,2.31-5.34V18H75.12Zm-6.24,8.19a3.236,3.236,0,0,1-1.02-2.52,3.236,3.236,0,0,1,1.02-2.52,4.028,4.028,0,0,1,5.22,0,3.236,3.236,0,0,1,1.02,2.52,3.236,3.236,0,0,1-1.02,2.52,4.028,4.028,0,0,1-5.22,0Zm28.59-.42a8.72,8.72,0,0,0,.18-1.8,7.737,7.737,0,0,0-2.19-5.64,7.114,7.114,0,0,0-5.43-2.28,7.7,7.7,0,0,0-7.98,7.92,7.687,7.687,0,0,0,2.25,5.67,8.268,8.268,0,0,0,6.06,2.25,7.5,7.5,0,0,0,6.54-3.09l-3.6-2.07a3.727,3.727,0,0,1-2.88,1.14c-1.89,0-3.09-.69-3.6-2.1ZM86.73,23.94A3.042,3.042,0,0,1,90,21.57a2.985,2.985,0,0,1,3.18,2.37Zm24.21-4.53a5.56,5.56,0,0,0-4.47-1.83,6.657,6.657,0,0,0-5.07,2.31,7.946,7.946,0,0,0-2.1,5.61,8.019,8.019,0,0,0,2.1,5.64,6.627,6.627,0,0,0,5.07,2.28,5.56,5.56,0,0,0,4.47-1.83V33h4.5V18h-4.5Zm-6.15,8.76a3.624,3.624,0,0,1-.99-2.67,3.624,3.624,0,0,1,.99-2.67,3.857,3.857,0,0,1,5.16,0,3.624,3.624,0,0,1,.99,2.67,3.624,3.624,0,0,1-.99,2.67,3.857,3.857,0,0,1-5.16,0ZM123.24,18h-4.5V33h4.5V26.22a3.036,3.036,0,0,1,1.41-2.85,4.447,4.447,0,0,1,3.09-.57V17.7a4.468,4.468,0,0,0-4.5,2.97Z"
        transform="translate(390 25)"
        fill="#fff"
      />
      <path
        d="M565.811,62.41l5.91,5.91,5.91-5.91Z"
        transform="translate(970.858 -306.201) rotate(135)"
        fill="#19b5fe"
      />
    </g>
  </svg>
);

export const Info = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
  >
    <g transform="translate(-6 -6)">
      <path
        d="M14,22a8,8,0,1,1,8-8A8.008,8.008,0,0,1,14,22ZM14,7.333A6.667,6.667,0,1,0,20.667,14,6.674,6.674,0,0,0,14,7.333Z"
        fill={color}
      />
      <path
        d="M12.167,16.333a.667.667,0,0,1-.667-.667v-4a.667.667,0,1,1,1.333,0v4A.667.667,0,0,1,12.167,16.333Z"
        transform="translate(1.833 1.667)"
        fill={color}
      />
      <circle
        cx="0.667"
        cy="0.667"
        r="0.667"
        transform="translate(13.333 10)"
        fill={color}
      />
    </g>
  </svg>
);

export const Cart = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 15.055 16"
  >
    <path
      d="M26.983,12.688h-6.3l-.49-1.922h8.2l1.773-7.09h-5.9V0H23.33V3.676H18.386l-.635-2.488H15.116v.938h1.906l2.719,10.656a1.656,1.656,0,1,0,2.038.844h3.711a1.656,1.656,0,1,0,1.492-.937ZM18.625,4.613h4.7V6.754L22.208,5.633l-.663.663L23.8,8.549,26.052,6.3l-.663-.663L24.267,6.754V4.613h4.7l-1.3,5.215H19.956Zm1.663,10.449a.718.718,0,1,1,.718-.718A.719.719,0,0,1,20.288,15.063Zm6.695,0a.718.718,0,1,1,.718-.718A.719.719,0,0,1,26.983,15.063Z"
      transform="translate(-15.116)"
      fill={color}
    />
  </svg>
);

export const ArrowRight = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <g transform="translate(24 24) rotate(180)">
      <path d="M0,0H24V24H0Z" fill="none" />
      <line
        x2="14"
        transform="translate(5 12)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x2="6"
        y2="6"
        transform="translate(5 12)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        y1="6"
        x2="6"
        transform="translate(5 6)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

export const Phone = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M0,0H24V24H0Z" fill="none" />
    <path
      d="M5,4H9l2,5L8.5,10.5a11,11,0,0,0,5,5L15,13l5,2v4a2,2,0,0,1-2,2A16,16,0,0,1,3,6,2,2,0,0,1,5,4"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M15,7a2,2,0,0,1,2,2"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M15,3a6,6,0,0,1,6,6"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const Instagram = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M0,0H24V24H0Z" fill="none" />
    <rect
      width="16"
      height="16"
      rx="4"
      transform="translate(4 4)"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <circle
      cx="3"
      cy="3"
      r="3"
      transform="translate(9 9)"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <line
      y2="0.001"
      transform="translate(16.5 7.5)"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const Facebook = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M0,0H24V24H0Z" fill="none" />
    <path
      d="M7,10v4h3v7h4V14h3l1-4H14V8a1,1,0,0,1,1-1h3V3H15a5,5,0,0,0-5,5v2H7"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const Twitter = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M0,0H24V24H0Z" fill="none" />
    <path
      d="M22,4.01A17.943,17.943,0,0,1,19,5a3.789,3.789,0,0,0-4.38-.737A3.933,3.933,0,0,0,12,8V9A9.392,9.392,0,0,1,4,5S-.182,12.433,8,16a9.856,9.856,0,0,1-6,2,13.425,13.425,0,0,0,10.034,1.517,11,11,0,0,0,7.651-7.742,13.84,13.84,0,0,0,.5-3.753c0-.249,1.51-2.772,1.818-4.013Z"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const Telegram = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M0,0H24V24H0Z" fill="none" />
    <path
      d="M15,10l-4,4,6,6L21,4,3,11l4,2,2,6,3-4"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const Github = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M0,0H24V24H0Z" fill="none" />
    <path
      d="M9,19c-4.286,1.35-4.286-2.55-6-3m12,5V17.5c0-1,.1-1.405-.5-2,2.791-.3,5.5-1.366,5.5-6.04a4.567,4.567,0,0,0-1.333-3.21,4.192,4.192,0,0,0-.08-3.227s-1.05-.3-3.476,1.267a12.334,12.334,0,0,0-6.222,0C6.462,2.723,5.413,3.023,5.413,3.023a4.192,4.192,0,0,0-.08,3.227A4.566,4.566,0,0,0,4,9.486c0,4.64,2.709,5.68,5.5,6.014a2.19,2.19,0,0,0-.5,2V21"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const Mail = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M0,0H24V24H0Z" fill="none" />
    <rect
      width="18"
      height="14"
      rx="2"
      transform="translate(3 5)"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M3,7l9,6,9-6"
      fill="none"
      stroke="#19b5fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const Chevron = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 1.74}
    viewBox="0 0 11.621 20.243"
  >
    <path
      d="M242.829,4341.673l8,8,8-8"
      transform="translate(4351.173 -240.708) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>
);
