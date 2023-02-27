import axiosClient from "./axiosClient";

const productApi = {
  getAll(config) {
    const url = "/v2/animals";
    return axiosClient.get(url, { params: config.params, headers: config.headers });
  },

  get(id) {
    const url = `/v2/animals/${id}`;
    return axiosClient.get(url);
  },

  post(data) {},

  update(data) {},

  remove(id) {},
};

export default productApi;
