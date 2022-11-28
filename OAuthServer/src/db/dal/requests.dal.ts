import {
  Requests,
  RequestsInput,
  RequestsOutput,
} from "../models/requests.model";

export const create = async (payload: RequestsInput): Promise<RequestsOutput> =>
  await Requests.create(payload);

export const destroy = async (requestId: string): Promise<number> =>
  await Requests.destroy({
    where: {
      requestId,
    },
  });

export const getRequestByRequestId = async (
  requestId: string
): Promise<RequestsOutput> => {
  const request = await Requests.findOne({
    where: {
      requestId,
    },
  });
  if (!request) {
    // @todo throw custom error
    throw new Error("not found");
  }
  return request;
};
