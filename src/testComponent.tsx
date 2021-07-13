import React from "react";
import { MailIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Avatar, InputWithChild } from "./components";

const TestComponent = () => {
  return (
    <div className="p-3 flex items-center justify-center bg-white">
      <div className="w-full max-w-xs mx-auto">
        <InputWithChild
          input={{
            type: "text",
            name: "text",
            id: "Input",
            placeholder: "placeholder",
            style: "border-blue p-3 text-blue-darkest",
            focusStyle:
              "focus:ring-2 focus:ring-blue-darkest focus:border-blue-dark",
          }}
          isCheckValid={false}
          CheckValidation={{
            ariaInvalid: false,
            defaultValue: "asdfgg",
            ariaDescribedby: "input-error",
          }}
          invalidText={{
            text: "Invalid search",
            style: "mt-2 text-sm text-red",
            id: "input-error",
          }}
          RigthChild={
            <button className="absolute inset-y-0 right-0 pt-1 pr-3 flex items-center cursor-pointer">
              <a href="#">
                <QuestionMarkCircleIcon
                  className="h-5 w-5 text-blue-dark"
                  aria-hidden="true"
                />
              </a>
            </button>
          }
        />
      </div>
    </div>
  );
};

export default TestComponent;
