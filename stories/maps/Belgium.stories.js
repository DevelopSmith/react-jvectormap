import { VectorMap } from "@react-jvectormap/core";
import { beMill, beMerc, README } from "@react-jvectormap/maps";
import { beMill, beMerc, README } from "@react-jvectormap/belgium";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Belgium",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: beMill,
  fileName: "beMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: beMerc,
  fileName: "beMerc",
};
