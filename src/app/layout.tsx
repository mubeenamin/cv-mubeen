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
      <body className="lg:px-4 bg-gradient-to-t from-slate-700 to-black">
        <NavBar data={navBarItems}/>
          {children}
          
      </body>
    </html>
  );
}
