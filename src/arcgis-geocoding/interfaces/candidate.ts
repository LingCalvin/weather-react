import Attributes from "./attributes";
import Extent from "./extent";

export default interface Candidate {
  address: string;
  location: {
    x: number;
    y: number;
  };
  score: number;
  attributes: Attributes;
  extent: Extent;
}
