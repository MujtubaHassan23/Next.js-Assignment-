import Image from "next/image";
import { Header } from "./components/Header";
import { About } from "./components/About";

export default function Home() {
  return (
   <>
   <h1>Hello world</h1>
   <Header/>
   <About/>
   </>
  );
}
