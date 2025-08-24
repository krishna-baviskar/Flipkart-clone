import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 25"
      width="120"
      height="30"
      {...props}
    >
      <style>{`.font-logo { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 20px; }`}</style>
      <text x="0" y="20" className="font-logo" fill="hsl(var(--accent))">
        Flipkart
      </text>
    </svg>
  );
}
