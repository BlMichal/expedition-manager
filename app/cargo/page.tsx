

export default async function Cargo() {

    const res = await fetch('http://localhost:8080/api/v1/cargo');
    const data = await res.json()

  return (
    <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
  )
}
