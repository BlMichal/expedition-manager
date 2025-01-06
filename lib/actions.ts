"use server";

import { revalidatePath } from "next/cache";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createCargo(prevState: any, formData: FormData) {
  const rawData = {
    items: [
      {
        name: formData.get("name"),
        length: formData.get("length"),
        width: formData.get("width"),
        height: formData.get("height"),
        weight: formData.get("weight"),
        stackable: formData.get("stackable") === "on",
        attachable: "ALL_SIDES",
      },
    ],
  };

 
    const res = await fetch("http://localhost:8080/api/v1/cargo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawData), 
    });    
    
    if(!res.ok)
      return {message: "Chyba při odesílání požadavku."};
  
    revalidatePath('/')
  
}
