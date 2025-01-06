"use client";

import { useActionState } from "react";
import { createCargo } from "../actions";

const initialState = {
  message: '',
}

export default function CargoForm() {
  const [state, formAction, pending] = useActionState(createCargo, initialState)
 
  return (
    <>
      <form
        action={formAction}
        className="mb-6 flex flex-col gap-4 bg-gray-400 p-4 ml-10 rounded max-w-96"
      >
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="name"
            id="name"
            className="block px-2 py-2.5 w-full text-sm text-black bg-transparent bg-white border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="ml-2 px-1 peer-focus:font-medium absolute text-sm text-black rounded-lg bg-white peer-focus:bg-orange-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-4"
          >
            Název
          </label>
        </div>
        <label className="flex items-center gap-2 text-black">
          <input type="checkbox" name="stackable" />
          Stackable
        </label>
        <label className="flex items-center gap-2 text-black">
          Délka
          <input
            type="number"
            name="length"
            placeholder="Length"
            className="p-2 border rounded"
          />
        </label>
        <input
          type="number"
          name="width"
          placeholder="Width"
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="height"
          placeholder="Height"
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight"
          className="p-2 border rounded"
        />         
         <button disabled={pending}>Add</button>
         {pending && <p>Please wait...</p>}
         {state?.message && <p className="text-red-500">{state?.message}</p>}
      </form>
    </>
  );
}
