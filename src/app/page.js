import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Tips from "@/components/Tips";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Tips></Tips>
      <TopBrands></TopBrands>
      <ToastContainer/>
    </div>
  );
}
