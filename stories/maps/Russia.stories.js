import { VectorMap } from "@react-jvectormap/core";
import { ruMill, ruMerc, README } from "@react-jvectormap/maps";
import { ruMill, ruMerc, README } from "@react-jvectormap/russia";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Russia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: ruMill,
  fileName: "ruMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: ruMerc,
  fileName: "ruMerc",
};
