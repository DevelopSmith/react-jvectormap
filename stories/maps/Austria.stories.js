import { VectorMap } from "@react-jvectormap/core";
import { atMerc, atMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/Austria",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: atMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: atMill,
};
