import React from "react";
import GifGrid from "@/components/GifGrid"
import SearchBar from "@/components/SearchBar"

const Home = () => {

  const [query,setQuery] = React.useState("");

  return (
    <div className="w-full max-w-4xl mx-auto text-center space-y-6 p-5">
      <h1 className="text-3xl font-bold">GIF  Quest</h1>
       <SearchBar query={query} setQuery={setQuery} />
      <GifGrid query={query} />
     
    </div>
  )
}

export default Home
