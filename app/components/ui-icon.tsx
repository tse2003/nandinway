import type { CSSProperties } from "react";
const paths: Record<string, string> = {
  plane: "m22 2-7 20-4-9-9-4 20-7ZM11 13 22 2",
  shield: "M12 3 3 7v5c0 5 9 10 9 10s9-5 9-10V7l-9-4Zm-4 9 3 3 5-6",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3a4 4 0 0 1 0 8M22 21v-2a4 4 0 0 0-3-3.87M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  globe:
    "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z",
  tag: "m20 13-7 7-11-11V2h7l11 11ZM6 6h.01",
  briefcase: "M3 7h18v14H3V7Zm5 0V3h8v4M3 12h18M10 12v3h4v-3",
  swap: "M3 7h18l-4-4M21 17H3l4 4",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 20 20 0 0 1-8.7-3.1 20 20 0 0 1-6-6A20 20 0 0 1 2 4.1 2 2 0 0 1 4 2h3l2 5-3 2a16 16 0 0 0 9 9l2-3 5 1.9Z",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  mail: "M3 5h18v14H3V5Zm0 0 9 8 9-8",
  arrow: "M4 12h16m-6-6 6 6-6 6",
  heart:
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
  calendar: "M4 5h16v16H4V5ZM8 2v6M16 2v6M4 10h16",
  document: "M14 2H4v20h16V8l-6-6Zm0 0v6h6M8 12h8M8 16h4m2 3 2 2 5-5",
  menu: "M3 6h18M3 12h18M3 18h18",
};
export default function Icon({
  name,
  style,
}: {
  name: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.plane} />
    </svg>
  );
}
