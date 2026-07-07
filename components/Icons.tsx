import type { SVGProps } from "react";

const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconBorsa(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-4 7 4v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 11h.01M15 11h.01" />
    </svg>
  );
}

export function IconFuel(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 20V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" />
      <path d="M3 20h12" />
      <path d="M7 9h6" />
      <path d="M14 8l3 3v6a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-8l-3-3" />
    </svg>
  );
}

export function IconGas(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M9 3h6" />
      <path d="M12 3v3" />
      <path d="M8 6h8a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1Z" />
      <path d="M12 11c-1.5 1.5-2 2.6-2 3.7A2 2 0 0 0 14 15c0-1.1-.5-2.2-2-4Z" />
    </svg>
  );
}

export function IconTyre(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21M5.6 5.6l2.5 2.5M15.9 15.9l2.5 2.5M18.4 5.6l-2.5 2.5M8.1 15.9l-2.5 2.5" />
    </svg>
  );
}

export function IconWash(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M5 13l1.5-4A2 2 0 0 1 8.4 8h7.2a2 2 0 0 1 1.9 1l1.5 4" />
      <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4Z" />
      <path d="M8 4c0 1-1 1-1 2M12 3c0 1-1 1-1 2M16 4c0 1-1 1-1 2" />
    </svg>
  );
}

export function IconShop(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 4h16l-1 5H5L4 4Z" />
      <path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function IconPhone(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function IconPin(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconClock(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export const serviceIcons: Record<string, (p: SVGProps<SVGSVGElement>) => JSX.Element> = {
  borsa: IconBorsa,
  fuel: IconFuel,
  gas: IconGas,
  tyre: IconTyre,
  wash: IconWash,
  shop: IconShop,
};
