export function BrandLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="14.25"
        stroke="#F59E0B"
        strokeWidth="1.75"
      />
      <path
        d="M8 19.5C11.5 19.5 14 17 17.5 12.5C19.5 10 22.5 10.5 24 12.5C21.5 15 20.5 18 23.5 20.5C20 21.5 12 22 8 19.5Z"
        fill="currentColor"
      />
      <path
        d="M11 12.5L13 10.5M14.5 11L16 8.5"
        stroke="#D97706"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
