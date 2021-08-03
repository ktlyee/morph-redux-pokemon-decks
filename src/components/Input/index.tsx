import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

interface Iinput {
  type: string;
  name: string;
  id: string;
  style?: string;
  focusStyle?: string;
  placeholder: string;
}

interface Ilabel {
  htmlFor: string;
  style?: string;
  text: string;
}

export interface InputWithChildProps {
  input: Iinput;
  label?: Ilabel;
  LeftChild?: React.ReactNode;
  RightChild?: React.ReactNode;
  onChange?: (value: any) => void
}

const InputWithChild = ({
  input,
  label,
  LeftChild,
  RightChild,
  onChange
}: InputWithChildProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={`${label.htmlFor}`} className={`block ${label.style}`}>
          {label.text}
        </label>
      )}
      <div className="mt-1 relative rounded-2xl shadow-sm">
        {LeftChild}
        <input
          type={`${input.type}`}
          name={`${input.name}`}
          id={`${input.id}`}
          className={`shadow-sm w-full sm:text-sm rounded-2xl focus:outline-none border ${input.style} ${input.focusStyle}`}
          placeholder={`${input.placeholder}`}
          onChange={onChange}
        />
        {RightChild}
      </div>
    </div>
  );
};

export default InputWithChild;
