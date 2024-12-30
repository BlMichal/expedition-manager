'use client'

import { useState, useEffect } from "react";
import { dummydata } from "./dummydata";
import { DummyDataTypes } from "../utils/types";

export default function Home() {

  const [data, setData] = useState<DummyDataTypes[]>([]);


  useEffect(() => {
    const storedData = localStorage.getItem("dummydata");
    if (storedData) {
      setData(JSON.parse(storedData) as DummyDataTypes[]);
    } else {
      localStorage.setItem("dummydata", JSON.stringify(dummydata));
      setData(dummydata);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const stackable = (form.elements.namedItem("stackable") as HTMLInputElement).checked;
    const length = +(form.elements.namedItem("length") as HTMLInputElement).value;
    const weight = +(form.elements.namedItem("weight") as HTMLInputElement).value;
    const width = +(form.elements.namedItem("width") as HTMLInputElement).value;
    const height = +(form.elements.namedItem("height") as HTMLInputElement).value;

    const newItem: DummyDataTypes = { name, stackable, length, weight, width, height };

    console.log(typeof (newItem))

    if (name && length && weight && width && height) {
      const updatedData = [...data, newItem];
      setData(updatedData);
      localStorage.setItem("dummydata", JSON.stringify(updatedData));
      form.reset();
    }
  };


  const blocksToColorize = Math.min(data.length, 34);



  return (
    <>
      <div className="flex justify-center items-center p-10">
        <div className="grid grid-rows-2 grid-flow-col gap-2 mb-4 w-fit border-dotted border p-2">
          {Array.from({ length: 34 }, (_, index) => (
            <div
              key={index}
              className={`w-12 h-12 border rounded ${index < blocksToColorize ? "bg-blue-500" : "bg-gray-200"
                }`}
            >{index + 1}</div>
          ))}
        </div>
      </div>


      <div className="p-10">
        {data.map((item) => (
          <div key={item.name} className="flex gap-1">
            <h1>{item.name}</h1>
            <p>Length: {item.length}</p>
            <p>Width: {item.width}</p>
            <p>Height: {item.height}</p>
            <p>Weight: {item.weight}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-4 bg-gray-400 p-4 ml-10 rounded max-w-96">
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="title"
            id="title"
            className="block px-2 py-2.5 w-full text-sm text-black bg-transparent bg-white border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="title"
            className="ml-2 px-1 peer-focus:font-medium absolute text-sm text-black rounded-lg bg-white peer-focus:bg-orange-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-4"
          >
            Název
          </label>
        </div>
        <label className="flex items-center gap-2 text-black">
          <input type="checkbox" name="stackable" />
          Stackable
        </label>
        <label className="flex items-center gap-2 text-black">Délka
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
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Add
        </button>
      </form>
    </>
  );
}
