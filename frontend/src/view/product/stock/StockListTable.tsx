import { Table } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/product/stock/StockListActions';
import selectors from 'src/modules/product/stock/StockListSelectors';
import destroySelectors from 'src/modules/product/destroy/productDestroySelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ImagesListView from 'src/view/shared/list/ImagesListView';
import ShopListItem from 'src/view/shop/list/ShopListItem';
import StockStatus from './StockStatus';

const StockListTable = (props) => {
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );

  const handleTableChange = (
    pagination,
    filters,
    sorter,
  ) => {
    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };


  const columns = [
      {
        title: i18n('entities.stock.fields.productPhoto'),
        sorter: false,
        dataIndex: 'productPhoto',
        render: (value) => <ImagesListView value={value} />,
      },
      {
        title: i18n('entities.stock.fields.productName'),
        sorter: true,
        dataIndex: 'productName',
      },
      {
        title: i18n('entities.stock.fields.productSerialNumber'),
        sorter: true,
        dataIndex: 'productSerialNumber',
      },
      {
        title: i18n('entities.stock.fields.totalPurchased'),
        sorter: true,  
        dataIndex: 'totalPurchased',
        align: 'right',
      },
      {
        title: i18n('entities.stock.fields.totalSold'),
        sorter: true,  
        dataIndex: 'totalSold',
        align: 'right',
      },
      {
        title: i18n('entities.stock.fields.totalAvailable'),
        sorter: true,  
        dataIndex: 'totalAvailable',
        align: 'right',
      },
      {
        title: i18n('entities.stock.fields.status'),
        sorter: true,
        dataIndex: '',
        render: (value) =><StockStatus value={value} />
     },
      {
        title: i18n('entities.stock.fields.totalAmountPurchased'),
        sorter: true,  
        dataIndex: 'totalAmountPurchased',
        align: 'right',
      },
      {
        title: i18n('entities.stock.fields.totalAmountSold'),
        sorter: true,  
        dataIndex: 'totalAmountSold',
        align: 'right',
      },
      {
        title: i18n('entities.stock.fields.shop'),
        sorter: false,
        dataIndex: 'shop',
        render: (value) => <ShopListItem value={value} />,
      },
  ];

  const rowSelection = () => {
    return {
      selectedRowKeys: selectedKeys,
      onChange: (selectedRowKeys) => {
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  return (
    <TableWrapper>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns as any}
        dataSource={rows}
        pagination={pagination}
        onChange={handleTableChange}
        rowSelection={rowSelection()}
        scroll={{
          x: true,
        }}
      />
    </TableWrapper>
  );
};

export default StockListTable;
