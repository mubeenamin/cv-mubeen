export default function AboutMe({ data, skills }) {
  const { title, body } = data;
  const { hard } = skills;
  return (
    <main className="h-screen bg-slate-50 relative px-4">
      <div>
        <h2>{title}</h2>
        {body?.map((el: string) => (
          <p key={el} className="mb-6">
            {el}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {hard.map((el: { icon: string; text: string }) => (
          <p key={el.text} className="mb-6">
            {el.icon}
            {el.text}
          </p>
        ))}
      </div>
    </main>
  );
}
