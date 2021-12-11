import Card from "../components/Card";
import Nav from '../components/Nav'
import snipppetData from '../libs/snippetData.json'

import Search from "../components/Search";

export default function Home() {
  
  
  return (
    <>
      <Nav />
      <Search />
      <div className="container mx-auto px-2 py-10 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
          snipppetData.map((snippet, index) => <Card id={snippet.id} imageUrl={snippet.image} key={index} />) 
        }
      </div>
    </>
  )
}

