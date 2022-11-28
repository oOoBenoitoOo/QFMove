import { getByUUID } from "../../db/dal/applications.dal";
import { ApplicationsOuput } from "../../db/models/applications.model";
import { ApplicationsDTO } from "../dtos/applications.dto";
import { toApplicationsDTO } from "../mappers/applications.mapper";

export const getApplicationsByUUID = async (
  uuid: string
): Promise<ApplicationsDTO> => {
  const application: ApplicationsOuput = await getByUUID(uuid);
  return toApplicationsDTO(application);
};
