import Header from "@/components/shared/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-center  flex-col">
       <Header />
       <div className="p-3 text-3xl py-6">
        DISCOVER BESTSELLERS
       </div>
    </main>
  );
}
