import { Icon } from "@iconify/react/dist/iconify.js";

export default function LeftFooter() {
  return (
    <div className="fixed bottom-0 left-10 flex flex-col text-4xl gap-y-5">
      <a target="_blank" href="https://github.com/xKr9">
        <Icon icon={"mdi:github"} />
      </a>
      <a href="https://www.linkedin.com/in/dominik-grad" target="_blank">
        <Icon icon={"mdi:linkedin"} />
      </a>
      <a href="mailto:dominikgrad47@gmail.com">
        <Icon icon={"ic:round-mail"} />
      </a>
      <a href="https://twitter.com/dGrad47" target="_blank">
        <Icon icon={"mdi:twitter"} />
      </a>
      <div className="w-[0.5px] h-20 bg-white mx-auto"></div>
    </div>
  );
}
