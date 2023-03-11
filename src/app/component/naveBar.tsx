"use client";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import {useState} from "react";
export default function NavBar({
  data,
}: {
  data: { items: { id: number; name: string; link: string }[] };
}) {
  const { items } = data;
  const [navBar, setNavBar]=useState(false);
  const handlenavBar =()=>{
    setNavBar(!navBar);
  }
  return (
    <main className="relative py-8">
      <ul className="  hidden sm:flex sm:justify-end sm:gap-4 ">
        {items.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className=" bg-slate-800 text-white p-3 rounded-md flex justify-center w-32 hover:text-black hover:bg-gradient-to-r hover:from-green-200 hover:to-green-500 cursor-pointer "
          >
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end">
        <Menu>

          <Menu.Button onClick={handlenavBar} className="rounded-full  bg-gradient-to-r from-green-200 to-green-500 p-2">
            <Image src={"/hamburger.svg"} width={30} height={30} alt="menu" />
          </Menu.Button>
        </Menu>
      </div>
    </main>
  );
}
