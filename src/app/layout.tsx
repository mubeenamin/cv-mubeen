import NavBar from "./component/naveBar";

import { navBarItems, personalData } from "./data/page-data";
import "./globals.css";
import Image from "next/image";
export const metadata = {
  title: "Resume",
  description: "Resume of Mubeen Ameen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Image
          width={3000}
          height={2000}
        
          alt="bg image"
          src={"/bg.jpg"}
          className=" fixed w-full h-screen bg-cover shrink "
        />
        <main className="lg:px-4">
        <NavBar data={navBarItems}/>
        
          {children}
          </main>
      </body>
    </html>
  );
}
