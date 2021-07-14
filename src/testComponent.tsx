import React, { useState } from "react";
import { MailIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Avatar, InputWithChild, Toggle, CardShow } from "./components";

const TestComponent = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <div className="p-5 bg-white grid justify-end">
        <Avatar
          href="#"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          name={{ text: "Welcome!", textColor: "text-blue font-bold" }}
          text={{ text: "@pokemon", textColor: "text-blue font-bold" }}
        />
      </div>
      <div className="p-5 grid justify-start">
        <Toggle enabled={enabled} setEnabled={() => setEnabled(!enabled)}/>
      </div>
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
      <div className="p-10">
        <CardShow/>
      </div>
    </>
  );
};

export default TestComponent;
