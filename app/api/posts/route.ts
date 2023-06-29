import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"




export async function POST(req: Request, res: Response) {

  const session = await getServerSession(authOptions)

  console.log(req)
  return new Response(`Hello, Next.js! ${req.method}`, { status: 200 })
}
