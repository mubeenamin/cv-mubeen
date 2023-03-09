import Image from "next/image";

type prop = {
  title: string;
  body: string[];
  personal: { name: string; description: string; icon: string }[];
};

export default function AboutMeDetail({ data }: { data: prop }) {
  const { title, body, personal } = data;

  return (
    <main className=" bg-slate-800 relative p-8 sm:p-20 rounded-md mb-10">
      <div>
        <h2 className="mb-10">{title}</h2>
        <div className="sm:flex">
          <Image
            src={"/profile.jpg"}
            width={200}
            height={500}
            alt="profile"
            className="sm:w-[60%] rounded-3xl"
          />
          <div className="flex flex-col w-full sm:ml-8 gap-y-8">
            <div className="flex flex-col gap-y-4">
              <h2>Who am I? </h2>
              <p>{body[0]}</p>
              <p>{body[1]}</p>
            </div>
            <h2>Personal Info </h2>
            <div className="sm:flex sm:gap-4 space-y-2 sm:space-y-0 sm:flex-wrap sm:justify-between w-full">
              {
                personal.map((el)=>(
                  <div key={el.name} className="flex sm:w-72 ">
                   <Image src={el.icon} width={30} height={30} alt="icon" className="p-2 bg-slate-700 w-12 rounded-md"/>
                   <div className="ml-4 ">
                    <div className="text-gray-500">{el.name}</div>
                    <div className="text-white font-bold">{el.description}</div>
                    </div>   
                  </div>
                ))
                
              }
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4"></div>
    </main>
  );
}
