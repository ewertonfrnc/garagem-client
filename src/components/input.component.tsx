import { InputHTMLAttributes } from "react";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, ...otherProps }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={otherProps.name} className="font-bold">
        {label}
      </label>
      <input
        {...otherProps}
        className="rounded-2xl border border-transparent bg-stone-900 px-4 py-2 outline-0 transition-all focus:border focus:border-orange-500 focus:outline-0"
      />
    </div>
  );
}
