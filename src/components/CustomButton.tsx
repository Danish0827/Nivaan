"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  title: string;
  onBtnClick: () => void;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onBtnClick,
  className,
}) => {
  const baseStyles =
    "font-bold rounded-lg text-lg md:text-3xl py-2 px-4 md:py-3 md:px-6 text-white";
  const combinedStyles = cn(baseStyles, className);

  return (
    <button className={combinedStyles} onClick={onBtnClick}>
      {title}
    </button>
  );
};

export default CustomButton;
