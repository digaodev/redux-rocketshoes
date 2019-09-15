import produce from 'immer';

import {
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART,
  UPDATE_AMOUNT_SUCCESS,
} from './actions';

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_CART_SUCCESS:
      return produce(state, draft => {
        draft.push(payload);
      });

    case REMOVE_FROM_CART:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === payload);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case UPDATE_AMOUNT_SUCCESS: {
      if (payload.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === payload.productId);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(payload.amount);
        }
      });
    }
    default:
      return state;
  }
};
