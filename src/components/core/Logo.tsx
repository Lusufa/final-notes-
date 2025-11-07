import React from "react";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        className="dark:hidden"
        src="/Noterios_SVG.svg"
        alt="Logo"
        width={100}
        height={100}
      />
      <Image
        className="hidden w-100 dark:block"
        src="/Noterios_SVG.svg"
        alt="Logo"
        width={100}
        height={100}
      />
    </div>
  );
}
