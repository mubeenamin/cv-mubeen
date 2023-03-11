import Image from "next/image";

type prop = {
  title: string;
  body: string[];
  personal: { name: string; description: string; icon: string }[];
};

export default function AboutMeDetail({ data }: { data: prop }) {
  const { title, body, personal } = data;

  return (
    <main className=" bg-slate-800 relative p-8 lg:p-20 rounded-lg mb-10">
      <div>
        <h1 className="mb-10">{title}</h1>
        <div className="md:flex space-y-2">
          <Image
            priority
            src={"/profile.jpg"}
            width={343}
            height={417}
            alt="profile"
            className=" w-[40%] rounded-3xl aspect-square md:h-[224px] lg:h-[417px] "
          />
          <div className="flex flex-col w-full md:ml-4 lg:ml-8 gap-y-8">
            <div className="flex flex-col gap-y-4">
              <h2>Who am I? </h2>
              <p>{body[0]}</p>
              <p>{body[1]}</p>
            </div>
            <h2>Personal Info </h2>
            <div className="md:flex md:gap-4 space-y-2 md:space-y-0 md:flex-wrap md:justify-between w-full">
              {personal.map((el) => (
                <div key={el.name} className="flex md:w-72 ">
                  <Image
                    src={el.icon}
                    width={30}
                    height={30}
                    alt="icon"
                    className="p-2 bg-slate-700 w-12 rounded-md"
                  />
                  <div className="ml-4 ">
                    <div className="text-gray-500">{el.name}</div>
                    <div className="text-white font-bold">{el.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
