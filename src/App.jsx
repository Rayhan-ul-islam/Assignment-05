import { Suspense } from "react";
import Hero from "./Components/Hero"
import Main from "./Components/Main";
import Navbar from "./Components/Navbar"
import Technologies from "./Components/Technologies";
import AddTechList from "./Components/AddTechList";

const fetchData = async () => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

const techPromise = fetchData();
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Main>
        <section className="container mx-auto grid w-full grid-cols-1 gap-5 md:grid-cols-4">
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Technologies techPromise={techPromise} ></Technologies>
          </Suspense>
          <AddTechList></AddTechList>
        </section>
      </Main>
    </>
  )
}

export default App
