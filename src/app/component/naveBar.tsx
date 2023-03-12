"use client";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
export default function NavBar({
  data,
}: {
  data: { items: { id: number; name: string; link: string }[] };
}) {
  const { items } = data;
  const [navBar, setNavBar] = useState(false);
  const handlenavBar = () => {
    setNavBar(!navBar);
  };
  return (
    <main className="relative w-full py-8 mb-10 sm:mb-0">
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

      <div className="sm:hidden  ">
        <Menu as={"div"} className="relative flex justify-end px-4">
          <Menu.Button className=" rounded-full  bg-gradient-to-r from-green-200 to-green-500 p-2">
            <Image src={"/hamburger.svg"} width={30} height={30} alt="menu" />
          </Menu.Button>
          <Menu.Items className=" absolute top-8 mt-6 flex flex-col space-y-4 px-12 py-6 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            {items.map((item1) => (
              <Menu.Item key={item1.id}>
                <Link href={item1.link}> {item1.name}</Link>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </main>
  );
}
