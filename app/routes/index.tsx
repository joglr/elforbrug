import type { LoaderFunction } from "@remix-run/vercel" 
import { useLoaderData } from "@remix-run/react"

export const loader: LoaderFunction = async({}) => {
  const baseAPI = "https://api.eloverblik.dk"
  
  const token = process.env.EL_TOKEN
  const accessToken = await fetch(baseAPI + "​/api​/token", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return accessToken
}

export default function Index() {
  const data = useLoaderData()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {data}
    </div>
  );
}
