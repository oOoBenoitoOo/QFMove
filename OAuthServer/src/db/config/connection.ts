import { Sequelize } from "sequelize-typescript";
import { AccessTokens } from "../models/accesstokens.model";
import { Applications } from "../models/applications.model";
import { Codes } from "../models/codes.model";
import { RefreshTokens } from "../models/refreshtokens.model";
import { Requests } from "../models/requests.model";
import { ScopeAccessTokens } from "../models/scope-accesstokens.model";
import { ScopeApplications } from "../models/scope-applications.model";
import { Scopes } from "../models/scopes.model";
import { Users } from "../models/users.model";
import { Dialect } from "sequelize";

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT as unknown as number;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  port: dbPort,
  models: [
    Applications,
    AccessTokens,
    Codes,
    RefreshTokens,
    Requests,
    ScopeAccessTokens,
    ScopeApplications,
    Scopes,
    Users,
  ],
});

export default sequelizeConnection;
