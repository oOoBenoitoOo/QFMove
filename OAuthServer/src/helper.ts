import crypto from "crypto";
import querystring from "querystring";

export const randomString = () => {
  const randomBytes = crypto.randomBytes(20);
  return randomBytes.toString("base64");
};

export const containsAll = (arr1: Array<string>, arr2: Array<string>) => {
  const arr1Set = new Set();
  for (let i = 0; i < arr1.length; i++) {
    arr1Set.add(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1Set.has(arr2[i])) {
      return false;
    }
  }
  return true;
};

export const decodeAuthCredentials = (auth: string) => {
  var clientCredentials = Buffer.from(auth.slice("basic ".length), "base64")
    .toString()
    .split(":");
  var clientId = querystring.unescape(clientCredentials[0]);
  var clientSecret = querystring.unescape(clientCredentials[1]);
  return { clientId, clientSecret };
};

export const deleteAllKeys = (obj: any) => {
  Object.keys(obj).forEach((k) => {
    delete obj[k];
  });
};

export const timeout = (req: any, res: any, next: any) => {
  res.setTimeout(400, function () {
    res.status(408).end();
  });

  next();
};
