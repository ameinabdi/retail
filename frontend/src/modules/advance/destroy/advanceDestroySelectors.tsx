import { createSelector } from 'reselect';

const selectRaw = (state) => state.advance.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const advanceDestroySelectors = {
  selectLoading,
};

export default advanceDestroySelectors;
