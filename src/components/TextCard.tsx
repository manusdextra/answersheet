import type { TextCardProps } from "../declarations";
import { sizes, textCardStyle } from "../assets/styles";
import { clsx } from "clsx";
import { ReactNode } from "react";

export const TextCard = ({
  key,
  content,
  children
}: TextCardProps) => {
  return (
    <li key={key} className={clsx(textCardStyle, sizes)}>
      <p className="text-md rounded-t-md bg-gray-100 p-4">
        {content.map((para: ReactNode) => <p className="py-4">{para}</p>)}
      </p>
      {children && children}
    </li>
  );
};
