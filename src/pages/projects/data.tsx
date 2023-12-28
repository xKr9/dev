import AmaSelections from "./AmaSelections";
import HatlessWebsite from "./HatlessWebsite";
import PrimaryLanguages from "./PrimaryLanguages";

const data: {
  name: string;
  component: React.ReactNode;
}[] = [
  {
    name: "primary-languages-network",
    component: <PrimaryLanguages />,
  },
  {
    name: "ama-selections",
    component: <AmaSelections />,
  },
  {
    name: "hatless-website",
    component: <HatlessWebsite />,
  },
];

export default data;
