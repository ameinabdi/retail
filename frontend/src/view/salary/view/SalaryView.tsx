import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import UserViewItem from 'src/view/user/view/UserViewItem';
import AccountsViewItem from 'src/view/accounts/view/AccountsViewItem';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';

const SalaryView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.employee) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.salary.fields.employee')}
          >
            <UserViewItem value={record.employee} />
          </Form.Item>
        )}

      {(Boolean(record.basicSalary) || record.basicSalary === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.salary.fields.basicSalary')}
          >
            {Number(record.basicSalary).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.allowanceSalary) || record.allowanceSalary === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.salary.fields.allowanceSalary')}
          >
            {Number(record.allowanceSalary).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.totalSalary) || record.totalSalary === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.salary.fields.totalSalary')}
          >
            {Number(record.totalSalary).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.advance) || record.advance === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.salary.fields.advance')}
          >
            {Number(record.advance).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.netSalary) || record.netSalary === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.salary.fields.netSalary')}
          >
            {Number(record.netSalary).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.paidSalary) || record.paidSalary === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.salary.fields.paidSalary')}
          >
            {Number(record.paidSalary).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.balance) || record.balance === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.salary.fields.balance')}
          >
            {Number(record.balance).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.account) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.salary.fields.account')}
          >
            <AccountsViewItem value={record.account} />
          </Form.Item>
        )}

      {Boolean(record.salaryDate) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.salary.fields.salaryDate')}
        >
          {record.salaryDate}
        </Form.Item>
      )}

      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.salary.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default SalaryView;
