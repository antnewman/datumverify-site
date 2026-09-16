type WordmarkProps = {
  className?: string;
};

export default function Wordmark({ className }: WordmarkProps) {
  return (
    <svg
      role="img"
      aria-label="Datum"
      viewBox="0 0 220 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMinYMid meet"
    >
      <title>datum</title>
      <text
        x="0"
        y="42"
        fill="currentColor"
        fontFamily='"Space Grotesk", sans-serif'
        fontWeight="500"
        fontSize="48"
        letterSpacing="-0.96"
      >
        datum
      </text>
    </svg>
  );
}
