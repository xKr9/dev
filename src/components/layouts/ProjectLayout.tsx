import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function ProjectLayout({ children }: Props) {
  return (
    <main className="bg-[#0a192f] relative min-h-screen py-20 font-primary w-full font-default text-white">
      <section className="max-w-5xl mx-auto flex flex-col gap-y-32 px-4 ">
        <Link
          to="/dev"
          className="absolute flex items-center gap-1 top-5 text-xl lg:text-3xl left-5"
        >
          <Icon icon="charm:chevron-left" />
          Back
        </Link>
        {children}
      </section>
    </main>
  );
}
