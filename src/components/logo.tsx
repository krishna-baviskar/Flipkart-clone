import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="130"
      height="40"
      viewBox="0 0 130 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Flipkart</title>
      <g>
        <path
          d="M11.7 29H4.3A4.3 4.3 0 0 1 0 24.7V11.3A4.3 4.3 0 0 1 4.3 7h7.4a4.3 4.3 0 0 1 4.3 4.3v13.4a4.3 4.3 0 0 1-4.3 4.3z"
          fill="#2874f0"
        ></path>
        <text
          transform="translate(23 8)"
          fill="#2874F0"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
          fontSize="24"
          fontWeight="700"
          letterSpacing=".2"
        >
          <tspan x="0" y="21">Flipkart</tspan>
        </text>
        <text
          transform="translate(23 8)"
          fill="#9E9E9E"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
          fontSize="12"
          fontStyle="italic"
          fontWeight="500"
          letterSpacing=".2"
        >
          <tspan x="70" y="21">Explore</tspan>
        </text>
        <text
          transform="translate(23 8)"
          fill="#F9A825"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
          fontSize="12"
          fontStyle="italic"
          fontWeight="700"
          letterSpacing=".2"
        >
          <tspan x="110" y="21">Plus</tspan>
        </text>
        <g>
            <path d="M60.5 22.5h-2a2.5 2.5 0 0 0-2.5 2.5v1a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5z" fill="#2874F0"></path>
            <path d="M60.5 20.5h-2a2.5 2.5 0 0 0-2.5 2.5v1h7v-1a2.5 2.5 0 0 0-2.5-2.5z" fill="#F9A825"></path>
            <path d="M58.5 25.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5z" fill="#FFF"></path>
        </g>
        <path d="M130 30h-2.5v-2.5H125v-2.5h2.5V22.5h2.5v2.5H130z" fill="#f9a825"></path>
      </g>
    </svg>
  );
}
