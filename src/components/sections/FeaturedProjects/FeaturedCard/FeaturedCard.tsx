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
    <div className="rounded-lg grid grid-cols-12 group cursor-pointer">
      <div className="col-span-6 bg-red-500">
        <img
          src={img}
          className="aspect-[2/1] object-cover blur-sm group-hover:blur-none transition-all cursor-pointer duration-200"
          alt=""
        />
      </div>
      <div className="col-span-6 flex flex-col items-end text-right px-5">
        <h1 className="text-primary font-bold">Featured Project</h1>
        <p>{description}</p>
        <div className="flex mt-auto gap-x-2 gap-y-1 justify-end flex-wrap">
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
