import axios, { AxiosInstance } from "axios";
import Candidate from "../interfaces/candidate";
import FindAddressCandidatesParams from "../interfaces/find-address-candidates-params";
import FindAddressCandidatesResponse from "../interfaces/find-address-candidates-response";
import SuggestParams from "../interfaces/suggest-params";
import SuggestResponse from "../interfaces/suggest-response";
import Suggestion from "../interfaces/suggestion";

export class ArcGISGeocodingService {
  constructor(private apiClient: AxiosInstance) {}

  async suggest(params: SuggestParams): Promise<Suggestion[]> {
    const {
      data: { suggestions },
    } = await this.apiClient.get<SuggestResponse>("/suggest", {
      params,
    });
    return suggestions;
  }

  async findAddressCandidates(
    params: FindAddressCandidatesParams
  ): Promise<Candidate[]> {
    const {
      data: { candidates },
    } = await this.apiClient.get<FindAddressCandidatesResponse>(
      "/findAddressCandidates",
      { params }
    );
    return candidates;
  }
}

const arcGISGeocodingService = new ArcGISGeocodingService(
  axios.create({
    baseURL:
      "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
    paramsSerializer: (params) => {
      // Ensure array entries are converted to a format that the API expects
      return new URLSearchParams(params).toString();
    },
  })
);

export default arcGISGeocodingService;
