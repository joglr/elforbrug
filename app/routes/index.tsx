import type { LoaderFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { periods } from "~/constants";

export const loader: LoaderFunction = async () => {
  const [defaultPeriodPath] = Object.entries(periods).find(([,p]) => p.default)!
  return redirect(`/${defaultPeriodPath}`)
}
