import { createSelector } from 'reselect';

const selectRaw = (state) => state.sell.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const sellDestroySelectors = {
  selectLoading,
};

export default sellDestroySelectors;
