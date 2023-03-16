import api from "../api.js";
export async function addNewRating(productId, newValue) {
  const result = await api.post(`/ratings/${productId}/${newValue}`);
  if (result.status === 200) {
    return result.data;
  } else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
