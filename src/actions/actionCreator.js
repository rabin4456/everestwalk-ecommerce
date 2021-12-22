export const fetchProducts = () => (dispatch) => {
  fetch("https://electronic-ecommerce.herokuapp.com/api/v1/product", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (res) => {
      console.log("response", res);
      const data = await res.json();
      if (data.status === "success") {
        console.log("response", data);
        dispatch({
          type: "FETCH_PRODUCT",
          payload: data.data,
        });
      } else {
        dispatch({
          type: "FETCH_PRODUCT_ERROR",
        });
      }
    })
    .catch((e) => console.log(e));
};

export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const updateCartItems = (data) => {
  return {
    type: "UPDATE_CART",
    payload: data,
  };
};

export const removeCartProduct = (data) => {
  return {
    type: "REMOVE_CART_PRODUCT",
    payload: data,
  };
};
export const filterProducts = (data) => {
  return {
    type: "SORT_PRODUCTS",
    payload: data,
  };
};
export const setCartVisible = (data) => {
  return {
    type: "CART_DROPDOWN_VISIBLE",
  };
};

export const getCheckoutData = () => {
  return {
    type: "GET_CHECKOUT",
  };
};
