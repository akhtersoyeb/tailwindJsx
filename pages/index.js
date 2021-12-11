import { useState } from "react"

import Fuse from "fuse.js";

import Card from "../components/Card";
import Nav from '../components/Nav'
import Search from "../components/Search";

import snipppetData from '../libs/snippetData.json'



export default function Home() {

  const [searchInput, setSearchInput] = useState("")
  
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value)
  }
  const searchConfig = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: [
      "name",
    ]
  }
  const fuse = new Fuse(snipppetData, searchConfig)
  
  return (
    <>
      <Nav />
      <Search value={searchInput} handleSearchInputChange={handleSearchInputChange} />
      <div className="container mx-auto px-2 py-10 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {searchInput ? (
          fuse.search(searchInput).map((snippet, index) => <Card id={snippet.item.id} imageUrl={snippet.item.image} key={index} />)
        ) : (
          snipppetData.map((snippet, index) => <Card id={snippet.id} imageUrl={snippet.image} key={index} />)
        )
        }
      </div>
    </>
  )
}

