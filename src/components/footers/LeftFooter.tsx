import { Icon } from "@iconify/react/dist/iconify.js";

export default function LeftFooter() {
  return (
    <div className="fixed hidden xl:flex bottom-0 left-10 flex-col text-4xl gap-y-5">
      <a
        className="hover:scale-125 transition-all "
        target="_blank"
        href="https://github.com/xKr9"
      >
        <Icon icon={"mdi:github"} />
      </a>
      <a
        className="hover:scale-125 transition-all "
        href="https://www.linkedin.com/in/dominik-grad"
        target="_blank"
      >
        <Icon icon={"mdi:linkedin"} />
      </a>
      <a
        className="hover:scale-125 transition-all "
        href="mailto:dominikgrad47@gmail.com"
      >
        <Icon icon={"ic:round-mail"} />
      </a>
      <a
        className="hover:scale-125 transition-all "
        href="https://twitter.com/dGrad47"
        target="_blank"
      >
        <Icon icon={"mdi:twitter"} />
      </a>
      <div className="w-[0.5px] h-20 bg-white mx-auto"></div>
    </div>
  );
}
