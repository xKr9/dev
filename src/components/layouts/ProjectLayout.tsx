import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function ProjectLayout({ children }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#0a192f] relative min-h-screen py-20 font-primary w-full font-default  text-app-accent">
      <section className="max-w-5xl mx-auto flex flex-col gap-y-20 px-8 ">
        <Link
          to="/dev/"
          className="absolute flex items-center gap-1 top-5 text-xl lg:text-3xl left-5 text-white"
        >
          <Icon icon="charm:chevron-left" />
          Back
        </Link>
        {children}
      </section>
    </main>
  );
}
