import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import {
  ADD_TO_CART_REQUEST,
  addToCartSuccess,
  UPDATE_AMOUNT_REQUEST,
  updateAmountSuccess,
} from './actions';

export function* addToCart({ payload }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === payload)
  );

  const stock = yield call(api.get, `/stock/${payload}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora do estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(payload, amount));
  } else {
    const response = yield call(api.get, `/products/${payload}`);

    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

export function* updateAmount({ payload }) {
  if (payload.amount <= 0) return;

  const stock = yield call(api.get, `/stock/${payload.productId}`);
  const stockAmount = stock.data.amount;

  if (payload.amount > stockAmount) {
    toast.error('Quantidade solicitada fora do estoque');
    return;
  }

  yield put(updateAmountSuccess(payload.productId, payload.amount));
}

export default all([
  takeLatest(ADD_TO_CART_REQUEST, addToCart),
  takeLatest(UPDATE_AMOUNT_REQUEST, updateAmount),
]);
