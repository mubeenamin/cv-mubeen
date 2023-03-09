import Link from "next/link";

export default function NavBar({
  data,
}: {
  data: { items: { id: number; name: string; link: string }[] };
}) {
  const { items } = data;
  return (
    <div className="relative py-8">
      <ul className="flex justify-end gap-4">
        {items.map((item) => (
          <li key={item.id} className=" bg-slate-800 text-white p-3 rounded-md hover:text-black hover:bg-gradient-to-r hover:from-green-200 hover:to-green-500 cursor-pointer">
            <Link href={item.link} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
