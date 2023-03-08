import Image from "next/image";
import Link from "next/link";



export default function Sidebar({ data }:any) {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col content-between w-full h-auto sm:h-screen sm:justify-around sm:w-[25%] sm:fixed">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          priority
          width={150}
          height={150}
          className="rounded-full mb-6"
          src={"/profile.jpg"}
          alt="Mubeen Ameen"
        />
        <h1 className="mb-6">{name}</h1>
        <h2 className="mb-6">{role}</h2>
        <p className="mb-6">{education[0]}</p>
        <p className="mb-6"> {education[1]}</p>
        <h2>Contact me</h2>
        <div className="flex flex-wrap">
          {contactLinks.map((link: { name: string ; icon: string  }) => (
            <Link
              key={link.name}
              href={link.name}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 hover:text-white"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
