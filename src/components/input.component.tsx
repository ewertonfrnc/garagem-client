import { InputHTMLAttributes } from "react";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, ...otherProps }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={otherProps.name}>{label}</label>
      <input
        {...otherProps}
        className="rounded-full border border-transparent bg-stone-900 px-4 py-2 outline-0 transition-all focus:border focus:border-orange-500 focus:outline-0"
      />
    </div>
  );
}
