// @ts-nocheck
'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreatePost from "./components/addPost"
const queryClient = new QueryClient()
function Home() {

  return (
    <main >
      <QueryClientProvider client={queryClient}>

        <CreatePost />
      </QueryClientProvider>
    </main>
  )
}


export default Home