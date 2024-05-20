"use client"


import { icons } from "lucide-react";

const Icon = ({ icon, className, size }) => {
  const LucideIcon = icons[icon];

  return <LucideIcon className={className} size={size} />;
};

export default Icon;
