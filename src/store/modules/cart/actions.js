export const ADD_TO_CART_REQUEST = '@cart/ADD_REQUEST';
export const addToCartRequest = productId => ({
  type: ADD_TO_CART_REQUEST,
  payload: productId,
});
export const ADD_TO_CART_SUCCESS = '@cart/ADD_SUCCESS';
export const addToCartSuccess = product => ({
  type: ADD_TO_CART_SUCCESS,
  payload: product,
});

export const REMOVE_FROM_CART = '@cart/REMOVE';
export const removeFromCart = productId => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const UPDATE_AMOUNT_REQUEST = '@cart/UPDATE_AMOUNT_REQUEST';
export const updateAmountRequest = (productId, amount) => ({
  type: UPDATE_AMOUNT_REQUEST,
  payload: { productId, amount },
});

export const UPDATE_AMOUNT_SUCCESS = '@cart/UPDATE_AMOUNT_SUCCESS';
export const updateAmountSuccess = (productId, amount) => ({
  type: UPDATE_AMOUNT_SUCCESS,
  payload: { productId, amount },
});
