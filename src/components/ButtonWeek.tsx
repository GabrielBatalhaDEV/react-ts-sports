import { ButtonHTMLAttributes } from "react";

interface ButtonWeekProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonWeek(props: ButtonWeekProps) {
  return <button {...props} className="w-8 h-8 rounded bg-zinc-900"></button>;
}
