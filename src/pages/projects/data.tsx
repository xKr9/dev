import AmaSelections from "./AmaSelections/AmaSelections";
import HatlessWebsite from "./HatlessWebsite/HatlessWebsite";
import PrimaryLanguages from "./PrimaryLanguages/PrimaryLanguages";
import StudentArtPlatform from "./StudentArtPlatform/StudentArtPlatform";
import Ultraleap from "./Ultraleap/Ultraleap";

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
  {
    name: "ultraleap",
    component: <Ultraleap />,
  },
  {
    name: "student-art-platform",
    component: <StudentArtPlatform />,
  },
];

export default data;
