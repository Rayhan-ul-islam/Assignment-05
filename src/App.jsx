import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Technologies from "./Components/Technologies";
import AddTechList from "./Components/AddTechList";
import Footer from "./Components/Footer";

const fetchData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const techPromise = fetchData();

function App() {
  const [addToStack, setAddToStack] = useState([]);

  return (
    <>
      <Navbar />
      <Hero />

      <Main>
        <section className="container mx-auto grid w-full grid-cols-1 gap-5 md:grid-cols-4">
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Technologies
              techPromise={techPromise}
              addToStack={addToStack}
              setAddToStack={setAddToStack}
            />
          </Suspense>

          <AddTechList
            addToStack={addToStack}
            setAddToStack={setAddToStack}
          />
        </section>
      </Main>
      <Footer></Footer>

      <ToastContainer position="bottom-right"/>
    </>
  );
}

export default App;