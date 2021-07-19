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

interface Icheck {
  ariaInvalid: boolean;
  defaultValue: string;
  ariaDescribedby?: string;
}

interface Iinvalid {
  text: string;
  style?: string;
  id: string;
}

export interface InputWithChildProps {
  input: Iinput;
  label?: Ilabel;
  isCheckValid: boolean;
  CheckValidation: Icheck;
  LeftChild?: React.ReactNode;
  RigthChild?: React.ReactNode;
  invalidText: Iinvalid;
}

const InputWithChild = ({
  input,
  label,
  isCheckValid,
  CheckValidation,
  LeftChild,
  RigthChild,
  invalidText,
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
        {isCheckValid ? (
          <input
            type={`${input.type}`}
            name={`${input.name}`}
            id={`${input.id}`}
            className={`w-full pr-10 sm:text-sm rounded-2xl focus:outline-none border ${input.style} ${input.focusStyle}`}
            placeholder={`${input.placeholder}`}
            defaultValue={`${CheckValidation.defaultValue}`}
            aria-invalid={`${CheckValidation.ariaInvalid}`}
            aria-describedby={`${CheckValidation.ariaDescribedby}`}
          />
        ) : (
          <input
            type={`${input.type}`}
            name={`${input.name}`}
            id={`${input.id}`}
            className={`shadow-sm w-full sm:text-sm rounded-2xl focus:outline-none border ${input.style} ${input.focusStyle}`}
            placeholder={`${input.placeholder}`}
          />
        )}
        {RigthChild}
        {CheckValidation.ariaInvalid && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {CheckValidation.ariaInvalid && (
        <p className={`${invalidText.style}`} id={`${invalidText.id}`}>
          {invalidText.text}
        </p>
      )}
    </div>
  );
};

export default InputWithChild;
