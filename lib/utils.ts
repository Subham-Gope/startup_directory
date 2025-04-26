import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const formatViews = (views: number): string => {
  if (views == 1) {
    return `${views} View`;
  }
  if (views === 0 || (views >= 1 && views < 1000)) {
    return `${views} Views`;
  }
  if (views >= 1000 && views < 1000000) {
    return `${Math.floor(views / 1000)}K Views`;
  }
  if (views >= 1000000 && views < 100000000) {
    return `${Math.floor(views / 1000000)}M Views`;
  }
  return `${Math.floor(views / 1000000000)}B Views`;
};
