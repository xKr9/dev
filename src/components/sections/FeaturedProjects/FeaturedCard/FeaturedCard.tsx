import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  pills: string[];
  img: string;
  idx: number;
  link: string;
};

export default function FeatureCard({
  title,
  description,
  pills,
  img,
  link,
}: Props) {
  return (
    <Link to={link} className={`flex group cursor-pointer`}>
      <div className="md:block hidden w-full bg-primary">
        <img
          src={img}
          className="aspect-[2/1] h-full object-cover blur-sm group-hover:blur-none transition-all cursor-pointer duration-200"
          alt={`${title}-img`}
        />
      </div>
      <div
        className={`w-full flex !rounded-lg bg-primary bg-opacity-25 p-4 flex-col px-5 ${" text-right items-end"}`}
      >
        <h2 className="text-primary font-bold">Featured Project</h2>
        <h1 className="text-3xl font-bold mb-5">{title}</h1>
        <p className="text-accent">{description}</p>
        <div
          className={`flex text-accent mt-10 md:mt-auto gap-x-2 gap-y-1 justify-end flex-wrap `}
        >
          {pills.map((pill, idx) => {
            return (
              <p key={pill} className="flex items-center gap-x-2">
                {pill}
                {idx !== pills.length - 1 && (
                  <div className="w-2 h-2 text bg-white rounded-full inline-block"></div>
                )}
              </p>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
