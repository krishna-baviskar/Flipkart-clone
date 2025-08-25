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
      <g>
        <title>Flipkart</title>
        <path
          d="M11.7 29H4.3A4.3 4.3 0 0 1 0 24.7V11.3A4.3 4.3 0 0 1 4.3 7h7.4a4.3 4.3 0 0 1 4.3 4.3v13.4a4.3 4.3 0 0 1-4.3 4.3z"
          fill="#2874f0"
        ></path>
        <text
          transform="translate(23 8)"
          fill="#fff"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
          fontSize="20"
          fontWeight="700"
        >
          <tspan x="0" y="19">Flipkart</tspan>
        </text>
        <text
          transform="translate(23 8)"
          fill="#FFE500"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
          fontSize="11"
          fontStyle="italic"
          fontWeight="500"
        >
          <tspan x="0" y="30">Explore</tspan>
          <tspan fill="#fff" fontWeight="700"> Plus</tspan>
          <tspan fill="#FFE500" fontWeight="700">
            <svg
              x="70"
              y="-4"
              width="10"
              height="10"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.528 11.216l2.08 4.656h-1.6l-1.44-3.36-2.96 3.36h-1.6l4-4.48-3.2-3.84h1.6l2.48 3.072 2-3.072h1.6l-3.84 4.656z"
                fill="#FFE500"
              ></path>
            </svg>
          </tspan>
        </text>
      </g>
    </svg>
  );
}
