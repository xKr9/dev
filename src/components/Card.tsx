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
    <div className="rounded-lg grid grid-cols-12">
      <img className="md:col-span-5 md:block hidden" src={img} alt="" />
      <div
        className={`col-span-full flex flex-col md:col-span-7 p-5 ${
          idx % 2 ? "text-right" : "text-left"
        }`}
      >
        <h4 className="tex-xl text-primary font-semibold">Featured Project</h4>
        <h3 className="text-2xl">{title}</h3>
        <div className="col-span-5">{description}</div>
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
