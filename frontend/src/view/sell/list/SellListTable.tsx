import { Table, Popconfirm,Drawer,Space,Button } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sell/list/sellListActions';
import destroyActions from 'src/modules/sell/destroy/sellDestroyActions';
import selectors from 'src/modules/sell/list/sellListSelectors';
import destroySelectors from 'src/modules/sell/destroy/sellDestroySelectors';
import sellSelectors from 'src/modules/sell/sellSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import CustomerListItem from 'src/view/customer/list/CustomerListItem';
import ShopListItem from 'src/view/shop/list/ShopListItem';
import SellItemListItem from 'src/view/sellItem/list/SellItemListItem';
import SellReportListTableItem from 'src/view/report/sells/SellReportListTableItem';
import SellView from '../view/SellView';

const SellListTable = (props) => {
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const loading = findLoading || destroyLoading;
  const [visible, setVisible] =  React.useState(null);

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasPermissionToEdit = useSelector(
    sellSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    sellSelectors.selectPermissionToDestroy,
  );

  const doClose = () => {
    setVisible(null);
  };

  const doOpen = (id) => {
    setVisible(id);
  };

  const handleTableChange = (
    pagination,
    filters,
    sorter,
  ) => {
    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  const doDestroy = (id) => {
    dispatch(destroyActions.doDestroy(id));
  };

 

  const columns = [
      {
        title: i18n('entities.sell.fields.customer'),
        sorter: false,
        dataIndex: 'customer',
        render: (value) => <CustomerListItem value={value} />,
      },
      
      {
          title: i18n('entities.sell.fields.totalAmount'),
          sorter: true,
          dataIndex: 'totalAmount',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.sell.fields.paidAmount'),
          sorter: true,
          dataIndex: 'paidAmount',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.sell.fields.balanceAmount'),
          sorter: true,
          dataIndex: 'balanceAmount',
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
          title: i18n('entities.sell.fields.sellDetails'),
          sorter: true,
          dataIndex: 'sellDetails',
        },
        {
          title: i18n('entities.sell.fields.items'),
          sorter: false,
          dataIndex: 'Items',
          render: (value) => <SellItemListItem value={value} />,
        }, 
      {
        title: i18n('entities.sell.fields.shop'),
        sorter: false,
        dataIndex: 'shop',
        render: (value) => <ShopListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      fixed:'right',
      render: (_, record) => (
        <div className="table-actions">
          <Button onClick={()=>doOpen(record.id)} type="link">
            {i18n('common.view')}
          </Button>
          {hasPermissionToEdit && (
            <Link to={`/sell/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
          <Drawer
          title="View Purchase"
          width={"70%"}
          onClose={doClose}
          visible={visible === null ? false : visible === record.id ? true : false}
          bodyStyle={{ paddingBottom: 80 }}
          /* @ts-ignore */
          extra={
            <Space>
              <Button onClick={doClose} type="primary">
                Cancel
              </Button>
            </Space>
          }
          >
          <SellView loading={false} record={record} />
        </Drawer>
        </div>
      ),
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
        expandable={{
          expandedRowRender: record => <div style={{marginLeft:40}}><SellReportListTableItem record={record.Items}/></div>,
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
        scroll={{
          x: true,
        }}
      />
    </TableWrapper>
  );
};

export default SellListTable;
