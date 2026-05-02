import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <ToastContainer/>
    </div>
  );
}
