import Candidate from "./candidate";

export default interface FindAddressCandidatesResponse {
  spatialReference: {
    wkid: string;
    latestWkid: string;
  };
  candidates: Candidate[];
}
