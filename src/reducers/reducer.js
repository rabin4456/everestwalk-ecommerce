let initialState = {
  loading: true,
  products: [],
  carts: [],
  visible: false,
  checkout: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      const data = action.payload.product;
      console.log("product in reducer", data);
      return {
        ...state,
        products: data,
        loading: false,
      };
    case "ADD_TO_CART":
      const cartData = action.payload;
      let cartArray = [...state.carts];
      const index = cartArray.findIndex(
        (el) => el.product.id === cartData.product.id
      );
      if (index > -1) {
        cartArray[index] = {
          product: { ...cartData.product },
          quantity: cartArray[index].quantity + 1,
        };
      } else {
        cartArray = [...cartArray, { ...cartData, quantity: 1 }];
      }
      console.log("cartArray", cartArray);
      let productsArray = [...state.products];
      const productIndex = productsArray.findIndex(
        (el) => el.id === cartData.product.id
      );
      if (productIndex > -1) {
        productsArray[productIndex] = cartData.product;
      }
      console.log(cartData, "productsarray", productsArray);
      return {
        ...state,
        carts: cartArray,
        products: productsArray,
        visible: true,
      };
    case "UPDATE_CART":
      const updateProduct = action.payload;
      let allProducts = state.products;
      const productI = allProducts.findIndex(
        (el) => el.id === updateProduct.product.id
      );
      if (productI > -1) {
        allProducts[productI] = updateProduct.product;
      }
      let cartItems = state.carts;
      const i = cartItems.findIndex(
        (el) => el.product.id === updateProduct.product.id
      );
      if (i > -1) {
        cartItems[i] = updateProduct;
      }
      console.log("carts", cartItems, allProducts);
      return {
        ...state,
        products: allProducts,
        carts: cartItems,
      };
    case "REMOVE_CART_PRODUCT":
      const deleteProduct = action.payload;
      let allProduct = state.products;
      const productIndexs = allProduct.findIndex(
        (el) => el.id === deleteProduct.product.id
      );
      if (productIndexs > -1) {
        allProduct[productIndexs] = deleteProduct.product;
      }
      let cartItem = state.carts;
      const ind = cartItem.findIndex(
        (el) => el.product.id === deleteProduct.product.id
      );
      if (ind > -1) {
        cartItem.splice(ind, 1);
      }
      return {
        ...state,
        products: allProduct,
        cart: cartItem,
      };
    case "SORT_PRODUCTS":
      const sort = action.payload;
      let productsAll = [...state.products];
      if (sort === "price_high_to_low") {
        productsAll.sort(
          (a, b) =>
            parseFloat(b.price.split("$")[1] * 120.88) -
            parseFloat(a.price.split("$")[1] * 120.88)
        );
      }
      if (sort === "price_low_to_high") {
        productsAll.sort(
          (a, b) =>
            parseFloat(a.price.split("$")[1] * 120.88) -
            parseFloat(b.price.split("$")[1] * 120.88)
        );
      }

      return {
        ...state,
        products: productsAll,
      };
    case "CART_DROPDOWN_VISIBLE":
      return {
        ...state,
        visible: false,
      };
    case "GET_CHECKOUT":
      const checkout = localStorage.getItem("checkout");
      return {
        ...state,
        checkout: JSON.parse(checkout),
        visible: false,
      };

    default:
      return state;
  }
};
export default reducer;
