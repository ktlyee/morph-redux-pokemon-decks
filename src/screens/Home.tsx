import React, { useState } from "react";
import { Avatar, InputWithChild, Toggle, CardShow } from "../components";
import axios from "axios";

const Homepage = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <header>
        <div className="p-5 bg-white grid justify-end">
          <Avatar
            href="#"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            text={{ text: "Welcome!", textColor: "text-blue font-bold" }}
            name={{ text: "Pokemon", textColor: "text-blue font-bold" }}
          />
        </div>
        <div className="p-5 grid justify-start">
          <Toggle enabled={enabled} setEnabled={() => setEnabled(!enabled)} />
        </div>
      </header>
    </>
  );
};

export default Homepage;
