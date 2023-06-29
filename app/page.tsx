// @ts-nocheck
'use client'
import QueryWrapper from './wrappers/QueryWrapper'
import CreatePost from "./components/addPost"

function Home() {

  return (
    <main >
      <QueryWrapper >

        <CreatePost />
      </QueryWrapper>
    </main>
  )
}


export default Home