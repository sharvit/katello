import { testSelectorsSnapshotWithFixtures } from 'react-redux-test-utils';

import { ORGANIZATION_PRODUCTS_KEY } from '../OrganizationProductsConstants';
import { selectOrganizationProductsState, selectOrganizationProducts } from '../OrganizationProductsSelectors';

const stateFixture = {
  katello: {
    [ORGANIZATION_PRODUCTS_KEY]: {
      results: 'some-results',
    },
  },
};

const fixtures = {
  'should select the organization products state': () => selectOrganizationProductsState(stateFixture),
  'should select the organization products': () => selectOrganizationProducts(stateFixture),
};

describe('OrganizationProducts selectors', () => testSelectorsSnapshotWithFixtures(fixtures));
