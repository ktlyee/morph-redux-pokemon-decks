import React from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

interface Idata {
  id: string;
  name: string;
  imageUrl: string;
}

export interface CardShowProp {
  showData: Idata[];
  handleInfo: () => void;
  handleFav: () => void;
}

const people = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

const CardShow = ({}) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col text-center bg-white-smoke rounded-lg shadow"
        >
          <div>
            <div className="-mt-px flex">
              <button className="w-0 flex-1 flex p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button className="-ml-px w-0 flex-1 flex flex-row-reverse p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-md"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 font-press-start text-sm font-medium">
              {person.name}
            </h3>
            <h3 className="mt-4 text-gray-900 font-quicksand text-base font-medium">
              {person.name}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardShow;
