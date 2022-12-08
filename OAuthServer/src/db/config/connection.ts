import { Sequelize } from "sequelize-typescript";
import { Applications } from "../models/applications.model";
import { Codes } from "../models/codes.model";
import { Requests } from "../models/requests.model";
import { ScopeApplications } from "../models/scope-applications.model";
import { Scopes } from "../models/scopes.model";
import { Users } from "../models/users.model";
import { Dialect } from "sequelize";
import { PasswordLinks } from "../models/password-links.model";

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
    Codes,
    Requests,
    ScopeApplications,
    Scopes,
    Users,
    PasswordLinks,
  ],
});

export default sequelizeConnection;
