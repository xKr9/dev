export default function DetailsBox({
  detail,
}: {
  detail: {
    id: number;
    company: string;
    role: string;
    from: string;
    to: string;
    responsibilities: string[];
  };
}) {
  return (
    <div className="flex flex-col">
      <p className="text-2xl ">
        {detail.role}{" "}
        <span className="text-primary font-bold text-lg">
          @{detail.company}
        </span>
      </p>
      <p>
        {detail.from} - {detail.to}
      </p>
      <ul className="list-disc list-inside flex flex-col gap-y-5 mt-5">
        {detail.responsibilities.map((resp) => {
          return <li key={resp}>{resp}</li>;
        })}
      </ul>
    </div>
  );
}
