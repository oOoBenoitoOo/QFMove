import {
  create,
  destroy,
  getRequestByRequestId,
} from "../../db/dal/requests.dal";
import { RequestsDTO } from "../dtos/requests.dto";
import { toRequests, toRequestsDTO } from "../mappers/requests.mapper";

export const createRequest = async (
  payload: RequestsDTO
): Promise<RequestsDTO> => {
  const model = toRequests(payload);
  const request = await create(model);
  return toRequestsDTO(request);
};

export const destroyRequest = async (requestId: string): Promise<number> =>
  await destroy(requestId);

export const getByRequestId = async (requestId: string): Promise<RequestsDTO> =>
  await getRequestByRequestId(requestId);
