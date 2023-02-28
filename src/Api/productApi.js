import axiosClient from "./axiosClient";

const productApi = {
  getAll(config) {
    const url = "/v2/animals";
    return axiosClient.get(url, { ...config });
  },
  getMore(nextLink,config){
    const url = nextLink;
    return axiosClient.get(url, { ...config });
  },
  get(id) {
    const url = `/v2/animals/${id}`;
    return axiosClient.get(url);
  },

};

export default productApi;
