import { VectorMap } from "@react-jvectormap/core";
import { esMill, esMerc, README } from "@react-jvectormap/maps";
import { esMill, esMerc, README } from "@react-jvectormap/spain";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Spain",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: esMill,
  fileName: "esMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: esMerc,
  fileName: "esMerc",
};
