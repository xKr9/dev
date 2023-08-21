type Props = {
  title: string;
  description: string;
  pills: string[];
  img: string;
  idx: number;
};

export default function FeatureCard({
  title,
  description,
  pills,
  img,
  idx,
}: Props) {
  return (
    <div className={`rounded-lg flex group cursor-pointer`}>
      <div className="md:block hidden w-full bg-white">
        <img
          src={img}
          className="aspect-[2/1] h-full object-cover blur-sm group-hover:blur-none transition-all cursor-pointer duration-200"
          alt={`${title}-img`}
        />
      </div>
      <div className={`w-full flex flex-col px-5 ${" text-right items-end"}`}>
        <h2 className="text-primary font-bold">Featured Project</h2>
        <h1 className="text-3xl font-bold mb-5">{title}</h1>
        <p>{description}</p>
        <div
          className={`flex mt-10 md:mt-auto gap-x-2 gap-y-1 justify-end flex-wrap `}
        >
          {pills.map((pill, idx) => {
            return (
              <p className="flex items-center gap-x-2">
                {pill}
                {idx !== pills.length - 1 && (
                  <div className="w-2 h-2 bg-white rounded-full inline-block"></div>
                )}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
