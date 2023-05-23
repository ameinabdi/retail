import { Table, Typography } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sellItem/list/sellItemListActions';
import selectors from 'src/modules/sellItem/list/sellItemListSelectors';
import destroySelectors from 'src/modules/sellItem/destroy/sellItemDestroySelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ProductListItem from 'src/view/product/list/ProductListItem';
import ShopListItem from 'src/view/shop/list/ShopListItem';
const { Text } = Typography;

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


  const columns = [
      {
        title: i18n('entities.sellItem.fields.product'),
        sorter: false,
        dataIndex: 'product',
        render: (value) => <ProductListItem value={value} />,
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
          title: i18n('entities.sellItem.fields.total'),
          sorter: true,
          dataIndex: 'total',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
        {
          title: i18n('entities.sell.fields.sellDate'),
          sorter: true,
          dataIndex: 'sellDate',
        },
      {
        title: i18n('entities.sellItem.fields.shop'),
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
        summary={(pageData) => {
          let totalQuantity = 0;
          let totalPrice = 0;
          let totalAmount = 0;
  
          pageData.forEach(({ quantity, price }) => {
            totalQuantity += parseInt(quantity);
            totalPrice += parseFloat(price);
            totalAmount += (parseInt(quantity)*parseFloat(price));
          });
  
          return (
            <>
              <Table.Summary.Row style={{backgroundColor:'#F0F4F2'}}>
              <Table.Summary.Cell index={0}></Table.Summary.Cell>
                <Table.Summary.Cell index={1}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={2} align='right'>
                  <Text strong>{totalQuantity}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3} align='right'>
                  <Text strong>{totalPrice}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4} align='right'>
                  <Text strong>{totalAmount}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={0}></Table.Summary.Cell>
                <Table.Summary.Cell index={0}></Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
        scroll={{
          x: true,
        }}
      />
    </TableWrapper>
  );
};

export default SellItemListTable;
