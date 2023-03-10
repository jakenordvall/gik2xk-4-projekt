import api from "../api.js";
export async function getOne(userName) {
  const result = await api.get(`/users/${userName}`);

  if (result.status === 200) {
    return result.data;
  } else if (result.status === 404) {
    return { error: "User not found" };
  } else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
