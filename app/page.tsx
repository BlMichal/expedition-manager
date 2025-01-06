import CargoForm from "./components/CargoForm";


export default async function Home() {
  
  const res = await fetch("http://localhost:8080/api/v1/cargo");
  const data = await res.json();

  const blocksToColorize = Math.min(data.length, 34);

  return (
    <>
      <div className="flex justify-center items-center p-10">
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
      </div>

      <div className="p-10">
        {data.savedItems.map((item: any) => (
          <div key={item.name} className="flex gap-1">
            <h1>{item.name}</h1>
            <p>Length: {item.length}</p>
            <p>Width: {item.width}</p>
            <p>Height: {item.height}</p>
            <p>Weight: {item.weight}</p>
          </div>
        ))}
      </div>
      <CargoForm/>
    </>
  );
}
  
