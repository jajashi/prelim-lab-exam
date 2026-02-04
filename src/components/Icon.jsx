import React from "react";

export default function Icon({ name, className = "", ...props }) {
  switch (name) {
    case "logo":
      return (
        <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
          <path d="M12 2C7.58 2 4 5.58 4 10c0 5 8 12 8 12s8-7 8-12c0-4.42-3.58-8-8-8zM12 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
      );
    case "eye":
      return (
        <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
          <path d="M12 5c7 0 10 6.5 10 7s-3 7-10 7S2 13.5 2 13s3-7 10-8zm0 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        </svg>
      );
    case "eye-off":
      return (
        <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
          <path d="M2.5 2.5l19 19M17.94 17.94A9.77 9.77 0 0 1 12 19c-7 0-10-6.5-10-7 .8-1.6 3-4.5 6.5-6M9.5 9.5a3 3 0 1 0 4 4" />
        </svg>
      );
    case "promote":
      return (
        <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
          <path d="M12 2l4 7h-3v9h-2v-9H8l4-7z" />
        </svg>
      );
    case "trash":
      return (
        <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
          <path d="M6 7h12v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7zm3-4h6l1 1h4v2H2V4h4l1-1z" />
        </svg>
      );
    default:
      return null;
  }
}
