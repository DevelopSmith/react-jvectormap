import { VectorMap } from "@react-jvectormap/core";
import { beMerc, beMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Belgium",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: beMerc,
  fileName: "beMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: beMill,
  fileName: "beMill",
};
