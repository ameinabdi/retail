import { createSelector } from 'reselect';

const selectRaw = (state) => state.paymentVoucher.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const paymentVoucherViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default paymentVoucherViewSelectors;
