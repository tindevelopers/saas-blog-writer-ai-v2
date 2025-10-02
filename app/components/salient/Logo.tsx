export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 40" {...props}>
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#7C3AED', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
        fill="url(#logoGradient)"
      />
      <text
        x="45"
        y="27"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="#0F172A"
      >
        BlogAI
      </text>
    </svg>
  );
}
