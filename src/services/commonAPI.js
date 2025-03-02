import axios from "axios";

export const commonAPI = async (httpMethod, url, reqBody) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
  };
  return await axios(reqConfig)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      throw err;
    });
};