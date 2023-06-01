import { Table } from 'antd';
  import { i18n } from 'src/i18n';
  import actions from 'src/modules/sellItem/list/sellItemListActions';
  import selectors from 'src/modules/sellItem/list/sellItemListSelectors';
  import destroySelectors from 'src/modules/sellItem/destroy/sellItemDestroySelectors';
  import React from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import TableWrapper from 'src/view/shared/styles/TableWrapper';
  import ProductListItem from 'src/view/product/list/ProductListItem';
  
  const SellItemListTable = (props) => {
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
  
    React.useEffect(() => {
      dispatch(actions.doFetch({sell:props.sell?.id},{sell:props.sell?.id}));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const columns = [
        {
          title: i18n('entities.sellItem.fields.itemName'),
          sorter: true,
          dataIndex: 'itemName',
        },
        {
          title: i18n('entities.sellItem.fields.product'),
          sorter: false,
          dataIndex: 'product',
          render: (value) => <ProductListItem value={value} />,
        },
        {
            title: i18n('entities.sellItem.fields.price'),
            sorter: true,
            dataIndex: 'price',
            align: 'right',
            render: (value) =>
              value || value === 0
                ? Number(value).toFixed(2)
                : value,
          },
        {
            title: i18n('entities.sellItem.fields.quantity'),
            sorter: true,
            dataIndex: 'quantity',
            align: 'right',
            render: (value) =>
              value || value === 0
                ? Number(value).toFixed(2)
                : value,
          },
        {
            title: i18n('entities.sellItem.fields.total'),
            sorter: true,
            dataIndex: 'total',
            align: 'right',
            render: (value) =>
              value || value === 0
                ? Number(value).toFixed(2)
                : value,
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
  
  export default SellItemListTable;
  