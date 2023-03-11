export default function ResumeDetail({ data, professional }: any) {
  const { education } = data;
  const {title, experiences}=professional;
  return (
    <main className=" bg-slate-800 relative p-4 sm:p-8 lg:p-20 rounded-lg mb-10">
        <h1 className="mb-8">Education</h1>
      <div className="lg:flex space-y-4 lg:space-x-4 lg:space-y-0">
        
        {education.map(
          (el: { degree: string; institute: string; year: string }) => (
            <div
              key={el.degree}
              className="lg:w-1/2 h-36 px-5 w-full pt-8 border-2 border-gray-600 rounded-md"
            >
              <p>{el.degree}</p>
              <div className="flex flex-wrap justify-between mt-5">
                <p className="text-gray-400">{el.institute}</p>
                <p className="text-gray-400">{el.year}</p>
              </div>
            </div>
          )
        )}
      </div>
      <h1 className="mb-8 mt-8">{title}</h1>
      <div className=" border-x-4  border-green-500 p-4 rounded-md">
        {
            experiences.map((el:{role:string; description:string; year:string})=>(
                <div key={el.role}>
                    <div className="flex justify-between pb-8">
                    <p className="md:text-lg font-bold">{el.role}</p>
                    <p className="text-green-400">{el.year}</p>
                    </div>
                    <p>{el.description}</p>
                    
                </div>
            ))
        }
      </div>
    </main>
  );
}
