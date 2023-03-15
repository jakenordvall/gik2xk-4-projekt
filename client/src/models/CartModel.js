import api from "../api.js";
export async function createCart(userId) {
  const result = await api.post(`/carts`, { userId });

  if (result.status === 200) {
    return result.data;
  } else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

export async function addProductToCart(cartId, productId) {
  const result = await api.post(`/${cartId}/addProduct"`, { productId });
  if (result.status === 200) {
    return result.data;
  } else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
