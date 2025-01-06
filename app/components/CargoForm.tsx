"use client";

import { useActionState } from "react";
import { createCargo } from "../../lib/actions";

const initialState = {
  message: "",
};

export default function CargoForm() {
  const [state, formAction, pending] = useActionState(
    createCargo,
    initialState
  );

  return (
    <>
      <form
        action={formAction}
        className="mb-6 flex flex-col gap-4 bg-white p-4 rounded min-w-80 max-w-80 h-fit"
      >
        <div className="relative z-0 w-full group flex flex-col-reverse">
          <input
            type="text"
            name="name"
            id="name"
            className="block px-2 py-2.5 w-full text-sm text-black bg-transparent bg-white border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="ml-2 px-1 absolute rounded-xs text-gray-700 bg-white  dark:text-gray-400 duration-300 transform -translate-y-5 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-5"
          >
            Název
          </label>
        </div>

        <div className="relative z-0 w-full group">
          <input
            type="number"
            name="length"
            id="length"
            className="block px-2 py-2.5 w-full text-sm text-black bg-transparent bg-white border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="length"
            className="ml-2 px-1 absolute rounded-xs text-gray-700 bg-white  dark:text-gray-400 duration-300 transform -translate-y-5 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-5"
          >
            Délka
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="number"
            name="width"
            id="width"
            className="block px-2 py-2.5 w-full text-sm text-black bg-transparent bg-white border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="width"
            className="ml-2 px-1 absolute rounded-xs text-gray-700 bg-white  dark:text-gray-400 duration-300 transform -translate-y-5 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-5"
          >
            Šířka
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="number"
            name="height"
            id="height"
            className="block px-2 py-2.5 w-full text-sm text-black bg-transparent bg-white border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="height"
            className="ml-2 px-1 absolute rounded-xs text-gray-700 bg-white  dark:text-gray-400 duration-300 transform -translate-y-5 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-5"
          >
            Výška
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="number"
            name="weight"
            id="weight"
            className="block px-2 py-2.5 w-full text-sm text-black bg-transparent bg-white border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="weight"
            className="ml-2 px-1 absolute rounded-xs text-gray-700 bg-white  dark:text-gray-400 duration-300 transform -translate-y-5 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-5"
          >
            Váha
          </label>
        </div>
        <label className="flex items-center gap-2 text-black">
          <input type="checkbox" name="stackable" className="" />
          Stohovatelné
        </label>
        <button className="bg-black py-2" disabled={pending}>
          Přidat
        </button>
        {pending && <p className="animate-pulse">Zpracovává se...</p>}
        {state?.message && <p className="text-red-500">{state?.message}</p>}
      </form>
    </>
  );
}
