import { RequestsInput, RequestsOutput } from "../../db/models/requests.model";
import { RequestsDTO } from "../dtos/requests.dto";

export const toRequestsDTO = (request: RequestsOutput): RequestsDTO => {
  return {
    id: request.id,
    requestId: request.requestId,
    content: request.content,
    application_id: request.application_id,
  };
};

export const toRequests = (request: RequestsDTO): RequestsInput => {
  return {
    application_id: request.application_id,
    content: request.content,
    requestId: request.requestId,
  };
};
