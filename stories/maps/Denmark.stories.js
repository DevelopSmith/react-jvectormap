import { VectorMap } from "@react-jvectormap/core";
import { dkMill, dkMerc, README } from "@react-jvectormap/maps";
import { dkMill, dkMerc, README } from "@react-jvectormap/denmark";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Denmark",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: dkMill,
  fileName: "dkMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: dkMerc,
  fileName: "dkMerc",
};
