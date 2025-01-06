import { CargoProps } from "@/lib/types";
import CargoForm from "./components/CargoForm";
import Image from "next/image";
import PalletLogo from "@/app/assets/pallet.svg";

export default async function Home() {
  const res = await fetch("http://localhost:8080/api/v1/cargo");
  const data = await res.json();

  // const blocksToColorize = Math.min(data.savedItems.length, 34);

  return (
    <>
      {/* <div className="flex justify-center items-center p-10">
        <div className="grid grid-rows-2 grid-flow-col gap-2 mb-4 w-fit border-dotted border p-2">
          {Array.from({ length: 34 }, (_, index) => (
            <div
              key={index}
              className={`w-12 h-12 border rounded ${
                index < blocksToColorize ? "bg-blue-500" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div> */}
      <div className="w-full flex flex-col sm:flex-row px-2 md:px-10 gap-2">
        <CargoForm />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {data.savedItems.map((item: CargoProps) => (
            <div
              key={item.name}
              className="flex flex-col items-start border-2 border-white pb-2 gap-3 rounded-xl"
            >
              <div className="flex items-center gap-x-2">
                <div>
                  <Image
                    src={PalletLogo}
                    alt="Pallet Logo"
                    width={40}
                    height={40}
                    className="bg-white rounded-tl-lg"
                  />
                </div>
                <h1>{item.name}</h1>
              </div>
              <div className="flex flex-col">
                <p>Délka: {item.length} mm</p>
                <p>Výška: {item.width} mm</p>
                <p>Šířka: {item.height} mm</p>
                <p>Váha: {item.weight} kg</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
