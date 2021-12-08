import Card from "../components/Card";
import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <Search />
      <div className="container mx-auto p-2 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
    </>
  )
}

