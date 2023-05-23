import { createSelector } from 'reselect';

const selectRaw = (state) => state.sellItem.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const sellItemDestroySelectors = {
  selectLoading,
};

export default sellItemDestroySelectors;
