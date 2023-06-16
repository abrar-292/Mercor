import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

type Props = {
  text: string;
  icon: ReactNode[] | ReactNode;
  className?: string;
  isDropDown?: boolean;
};

export const ButtonWithIcon = ({
  text,
  icon,
  className,
  isDropDown,
}: Props) => {
  return (
    <button
      className={`flex btn h-10 p-4 min-w-120 items-center justify-center text-base text-gray-400 border border-gray-500 rounded-lg ${className}`}
    >
      {icon}
      <span className="mx-2">{text}</span>
      {isDropDown && <ChevronDownIcon />}
    </button>
  );
};
