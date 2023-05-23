import { i18n } from 'src/i18n';
import React from 'react';
import { Tag } from 'antd';

function StockStatus(props) {
  const { value } = props;

  if (!value) {
    return null;
  }

  if (value?.totalAvailable > 0) {
    return (
      <Tag color="green">{i18n('entities.stock.status.stock')}</Tag>
    );
  }

  if (value?.totalAvailable < 0) {
    return (
      <Tag color="red">
        {i18n('entities.stock.status.outofstock')}
      </Tag>
    );
  }

  return (
    <Tag color="blue">{i18n('entities.stock.status.unavailable')}</Tag>
  );
}

export default StockStatus;
