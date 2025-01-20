import { ComponentPropsWithoutRef } from "react";

type textFieldProps = ComponentPropsWithoutRef<"input"> & {
  id: string;
  label: string;
};

export default function TextField({ id, label, ...props }: textFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input id={id} className="rounded p-2" {...props} />
    </div>
  );
}
