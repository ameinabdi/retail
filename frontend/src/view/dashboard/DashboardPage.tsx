import { 
  AppstoreOutlined,
  DollarOutlined
 } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import actions from 'src/modules/dashboard/view/dashboardViewActions';
import selectors from 'src/modules/dashboard/view/dashboardViewSelectors';
import Spinner from '../shared/Spinner';
import { Column } from '@ant-design/plots';


const DashboardPage = (props) => {
  const dispatch = useDispatch();

  const dashboardCounts = useSelector(selectors.selectDashboardCounts);
  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);

  useEffect(() => {
    dispatch(actions.doFetch({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fourColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 6,
    lg: 6,
    xl: 6,
    style: {
      marginBottom: 24,
    },
  };
  
 
  if(loading && !dashboardCounts && !rows){
    return <Spinner />
  }

  return (
    <>
    <Row gutter={16}>
      <Col {...fourColumnsResponsiveProps}>
        <Card bordered={false}>
          <Statistic
            title="Products"
            value={parseInt(dashboardCounts?.totalProducts)}
            prefix={<AppstoreOutlined />}
          />
        </Card>
      </Col>
      <Col {...fourColumnsResponsiveProps}>
        <Card bordered={false}>
          <Statistic
            title="Total Sells"
            value={dashboardCounts?.totalSold}
            prefix={<DollarOutlined />}
          />
        </Card>
      </Col>
      <Col {...fourColumnsResponsiveProps}>
        <Card bordered={false}>
          <Statistic
            title="Total Purchases"
            value={dashboardCounts?.totalPurchased}
            prefix={<DollarOutlined />}
          />
        </Card>
      </Col>
      <Col {...fourColumnsResponsiveProps}>
        <Card bordered={false}>
          <Statistic
            title="Total Expense"
            value={parseFloat(dashboardCounts?.totalExpense ?dashboardCounts?.totalExpense:0.00)}
            prefix={<DollarOutlined />}
          />
        </Card>
      </Col>
     </Row>
      <Row gutter={24}>
        <Col span={24}>
        <Card title="Daily Sells">
         <Column {...{
          data:rows?.dailysells ? rows?.dailysells.map(({transactionDate,totalSell })=>({transactionDate, totalSell:parseFloat(totalSell)})) : [],
          xField: 'transactionDate',
          yField: 'totalSell',
          label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 配置样式
            style: {
              fill: '#FFFFFF',
              opacity: 0.6,
            },
          },
          xAxis: {
            label: {
              autoHide: true,
              autoRotate: false,
            },
          },
        }} />
        </Card>
      </Col>
      </Row>
      <br/><br/>
      <Row gutter={24}>
      <Col span={24}>
        <Card title="Daily Purchase ">
        <Column {...{
          data:rows?.dailypurchase ? rows?.dailypurchase.map(({transactionDate,totalPurchase })=>({transactionDate, totalPurchase:parseFloat(totalPurchase)})) : [],
          xField: 'transactionDate',
          yField: 'totalPurchase',
          label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 配置样式
            style: {
              fill: '#FFFFFF',
              opacity: 0.6,
            },
          },
          xAxis: {
            label: {
              autoHide: true,
              autoRotate: false,
            },
          },
        }} />
        </Card>
      </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
