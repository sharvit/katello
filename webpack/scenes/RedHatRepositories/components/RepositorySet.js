import React from '@theforeman/vendor/react';
import PropTypes from '@theforeman/vendor/prop-types';
import { ListView, Icon } from '@theforeman/vendor/patternfly-react';

import RepositoryTypeIcon from './RepositoryTypeIcon';
import RepositorySetRepositories from './RepositorySetRepositories';

const RepositorySet = ({
  type, id, name, label, product, recommended,
}) => (
  <ListView.Item
    id={id}
    className="listViewItem--listItemVariants"
    description={label}
    heading={name}
    leftContent={<RepositoryTypeIcon id={id} type={type} />}
    stacked
    actions={recommended ? <Icon type="fa" name="star" className="recommended-repository-set-icon" /> : ''}
    hideCloseIcon
  >
    <RepositorySetRepositories contentId={id} productId={product.id} type={type} label={label} />
  </ListView.Item>
);

RepositorySet.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  recommended: PropTypes.bool,
};

RepositorySet.defaultProps = {
  recommended: false,
};

export default RepositorySet;
