import Image from "next/image";
import Link from "next/link";

type prop = {
  name: string;
  role: string;
  education: { degree: string; institute: string; year: string }[];
  contactLinks: {
    name: string;
    icon: string;
  }[];
};

export default function HomePage({ data }: { data: prop }) {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
    
      <div className=" text-white flex flex-col p-6 items-center justify-center">
        <Image
          priority
          width={250}
          height={250}
          className="rounded-full mb-6 ring-8 ring-gray-700 hover:ring-green-500"
          src={"/profile.jpg"}
          alt="Mubeen Ameen"
        />
        <h1>{name}</h1>
        <h2 className="mb-6 text-xl text-gray-500 font-bold">{role}</h2>
        <div className="flex flex-wrap  gap-2">
          {contactLinks.map((link) => (
            <Link
              key={link.name}
              href={link.name}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-40"
            >
              <Image src={link.icon} width={42} height={42} alt="contact me" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
