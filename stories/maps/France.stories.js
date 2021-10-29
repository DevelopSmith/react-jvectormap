import { VectorMap } from "@react-jvectormap/core";
import { frMill, frMerc } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/France",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: frMill,
  fileName: "frMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: frMerc,
  fileName: "frMerc",
};
