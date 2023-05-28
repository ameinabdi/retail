import { Table, Typography } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchaseItem/list/purchaseItemListActions';
import selectors from 'src/modules/purchaseItem/list/purchaseItemListSelectors';
import destroySelectors from 'src/modules/purchaseItem/destroy/purchaseItemDestroySelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ProductListItem from 'src/view/product/list/ProductListItem';
import ShopListItem from 'src/view/shop/list/ShopListItem';
import Spinner from 'src/view/shared/Spinner';
const { Text } = Typography;

const PurchaseItemListTable = (props) => {
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
        title: i18n('entities.purchaseItem.fields.product'),
        sorter: false,
        dataIndex: 'product',
        render: (value) => <ProductListItem value={value} />,
      },
      {
          title: i18n('entities.purchaseItem.fields.costPrice'),
          sorter: true,
          dataIndex: 'costPrice',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
        title: i18n('entities.purchaseItem.fields.quantity'),
        sorter: true,  
        dataIndex: 'quantity',
        align: 'right',
      },
      {
          title: i18n('entities.purchaseItem.fields.sellingPrice'),
          sorter: true,
          dataIndex: 'sellingPrice',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
        title: i18n('entities.purchaseItem.fields.totalPrice'),
        sorter: true,
        dataIndex: 'totalPrice',
        align: 'right',
        render: (value) =>
        value || value === 0
          ? Number(value).toFixed(2)
          : value,
      },
      {
        title: i18n('entities.purchaseItem.fields.shop'),
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
  if(loading){
    return(<Spinner />)
  }

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
        summary={(pageData) => {
          let totalQuantity = 0;
          let totalcostPrice = 0;
          let totalsellingPrice = 0;

          let totalAmount = 0;
  
          pageData.forEach(({ quantity, sellingPrice, costPrice}) => {
            totalQuantity += parseInt(quantity);
            totalcostPrice += parseFloat(costPrice);
            totalsellingPrice += parseFloat(sellingPrice);
            totalAmount += (parseInt(quantity)*parseFloat(costPrice));
          });
  
          return (
            <>
              <Table.Summary.Row style={{backgroundColor:'#F0F4F2'}}>
              <Table.Summary.Cell index={0}></Table.Summary.Cell>
                <Table.Summary.Cell index={1}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={3} align='right'>
                  <Text strong>{Number(totalcostPrice).toFixed(2)}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2} align='right'>
                  <Text strong>{Number(totalQuantity).toFixed(2)}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3} align='right'>
                  <Text strong>{Number(totalsellingPrice).toFixed(2)}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4} align='right'>
                  <Text strong>{ Number(totalAmount).toFixed(2)}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={0}></Table.Summary.Cell>
                <Table.Summary.Cell index={0}></Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
    </TableWrapper>
  );
};

export default PurchaseItemListTable;
