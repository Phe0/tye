import React from "react";

export default function PlusIcon({ color }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 8.33331H11.6666V4.99998C11.6666 4.07998 10.92 3.33331 9.99998 3.33331C9.07998 3.33331 8.33331 4.07998 8.33331 4.99998L8.39248 8.33331H4.99998C4.07998 8.33331 3.33331 9.07998 3.33331 9.99998C3.33331 10.92 4.07998 11.6666 4.99998 11.6666L8.39248 11.6075L8.33331 15C8.33331 15.92 9.07998 16.6666 9.99998 16.6666C10.92 16.6666 11.6666 15.92 11.6666 15V11.6075L15 11.6666C15.92 11.6666 16.6666 10.92 16.6666 9.99998C16.6666 9.07998 15.92 8.33331 15 8.33331Z"
        fill={color}
      />
    </svg>
  );
}