import Image from "next/image";
import Card from "./components/Card";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap">
        <Card />
      </div>
    </main>
  );
}
