import Sidebar from "./component/sidebar";
import { personalData } from "./data/page-data";
import "./globals.css";

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
      <body className="flex flex-col sm:flex-row bg-black">
        <Sidebar data={personalData} />
        <main className="grow-full w-full sm:basis-[75%]  ml-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
