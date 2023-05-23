import { createSelector } from 'reselect';

const selectRaw = (state) => state.sellItem.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const sellItemViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default sellItemViewSelectors;
