import type { LoaderFunction } from "@remix-run/vercel" 
import { useLoaderData } from "@remix-run/react"

export const loader: LoaderFunction = async({}) => {
  const baseAPI = "https://api.eloverblik.dk"
  
  const token = process.env.EL_TOKEN
  console.log(token)
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
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
