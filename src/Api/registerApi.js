import axiosClient from "./axiosClient";

const registerApi = {
  refreshToken(params) {
    const url = "/v2/oauth2/token";
    return axiosClient.get(url, { params });
  },

  post(data) {
    const url = `/v2/oauth2/token`;
    return axiosClient.post(url, data);
  },

  add(data) {},
};

export default registerApi;
