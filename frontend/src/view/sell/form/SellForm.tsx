import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
  PlusOutlined,
  MinusCircleOutlined
} from '@ant-design/icons';
import { Button, Form, Row, Col, Card, Typography} from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';
import  _  from 'lodash';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/SellProductAutocompleteFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';

const  { Text } = Typography;

const schema = yup.object().shape({
  customer: yupFormSchemas.relationToOne(
    i18n('entities.sell.fields.customer'),
    {},
  ),
  sellDate: yupFormSchemas.date(
    i18n('entities.sell.fields.sellDate'),
    {
      required:true
    },
  ),
  sellDetails: yupFormSchemas.string(
    i18n('entities.sell.fields.sellDetails'),
    {},
  ),
  totalAmount: yupFormSchemas.decimal(
    i18n('entities.sell.fields.totalAmount'),
    {
      "scale": 2
    },
  ),
  paidAmount: yupFormSchemas.decimal(
    i18n('entities.sell.fields.paidAmount'),
    {
      "scale": 2
    },
  ),
  balanceAmount: yupFormSchemas.decimal(
    i18n('entities.sell.fields.balanceAmount'),
    {
      "scale": 2
    },
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.sell.fields.shop'),
    {},
  ),
  sellBy: yupFormSchemas.relationToOne(
    i18n('entities.sell.fields.sellBy'),
    {
      required:true
    },
  ),
  tems:yup
  .array()
  .of(
    yup
      .object().shape({
        itemName: yupFormSchemas.string(
          i18n('entities.sellItem.fields.itemName'),
          {},
        ),
        product: yupFormSchemas.relationToOne(
          i18n('entities.sellItem.fields.product'),
          {},
        ),
        price: yupFormSchemas.decimal(
          i18n('entities.sellItem.fields.price'),
          {
            "scale": 2
          },
        ),
        quantity: yupFormSchemas.decimal(
          i18n('entities.sellItem.fields.quantity'),
          {
            "scale": 2
          },
        ),
        total: yupFormSchemas.decimal(
          i18n('entities.sellItem.fields.total'),
          {
            "scale": 2
          },
        ),
        shop: yupFormSchemas.relationToOne(
          i18n('entities.sellItem.fields.shop'),
          {},
        ),

   }))
});

const SellForm = (props) => {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const [initialValues] = useState(() => {
    const record = props.record || {};
    if(record.Items){
      const index:any =record?.Items.map((_,index)=>{return index})
      setIndexes(index);
      setCounter(record?.Items?.length);
     }
    return {
      customer: record.customer,
      totalAmount: record.totalAmount,
      paidAmount: record.paidAmount,
      balanceAmount: record.balanceAmount,
      sellDate: record.sellDate ? moment(record.sellDate) : null,
      sellDatails: record.sellDatails,
      shop: record.shop,
      sellBy:record.sellBy,
      Items: record?.Items?.map((item)=>{
        return{
          itemName: item.itemName,
          product: item.product,
          quantity: item.quantity,
          price: item.price,
          total: item.total,
          shop: item.shop,
        }
      })
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const Items = _.compact(form.watch()?.Items);
  const totalAmount:any = _.sumBy(Items, function(item:any) { return (parseInt(item?.quantity) *parseFloat(item.price)); }); 


  const onSubmit = (values) => {
    const Items = _.compact(values.Items);
    const updatedValue = {
      ...values,
      totalAmount,
      balanceAmount:totalAmount-parseFloat(form.watch('paidAmount')),
      Items
    }
    props.onSubmit(props?.record?.id, updatedValue);  
  };


  const addFriend = () => {
    /* @ts-ignore */
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeFriend = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index)
    ]);
    form.unregister(`Items[${index}].id`);
    form.unregister(`Items[${index}].product`);
    form.unregister(`Items[${index}].itemName`);
    form.unregister(`Items[${index}].quantity`);
    form.unregister(`Items[${index}].price`);
    form.unregister(`Items[${index}].total`);
    form.unregister(`Items[${index}].shop`);
    form.unregister(`Items[${index}]`);
  };


  const ColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 6,
    style: {
      marginBottom: 24,
    },
  };

  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <Row gutter={16}>
          <Col {...ColumnsResponsiveProps}>
          <CustomerAutocompleteFormItem  
            name="customer"
            label={i18n('entities.sell.fields.customer')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          </Col> 
          <Col {...ColumnsResponsiveProps}>
          <DatePickerFormItem
            name="sellDate"
            label={i18n('entities.sell.fields.sellDate')}
            required={true}
            layout={formItemLayout}
          />
          </Col>  
          <Col {...ColumnsResponsiveProps}>
          <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.sell.fields.shop')}
            required={false}
            layout={formItemLayout}
          />
          </Col> 
          <Col {...ColumnsResponsiveProps}>
          <UserAutocompleteFormItem  
            name="sellBy"
            label={i18n('entities.sell.fields.sellBy')}
            required={true}
            layout={formItemLayout}
          />
          </Col> 
        </Row>
          <Card title={ <Row>
          <Col className="gutter-row" span={11}>
            <Text>{i18n('entities.sellItem.fields.product')} </Text>
          </Col>
          <Col className="gutter-row" span={4}>
            <Text>{i18n('entities.sellItem.fields.quantity')} </Text>
          </Col>
          <Col className="gutter-row" span={4}>
            <Text>{i18n('entities.sellItem.fields.price')}</Text>
          </Col>
          <Col className="gutter-row" span={4}>
            <Text>{i18n('entities.sellItem.fields.total')} </Text>
          </Col>
          <Col span={1}><Button type="primary" style={{}} onClick={addFriend} block icon={<PlusOutlined />} /></Col></Row>} bordered={false}>
        {indexes.map((index) => {
        const fieldName = `Items[${index}]`;
        const itemtotalAmount = parseFloat(form.watch(`${fieldName}.quantity`))*parseFloat(form.watch(`${fieldName}.price`))
        const minSelling = form.watch(`${fieldName}.product`)?.data?.sellingPrice
        return (
          <Row className="flex flex-wrap -mx-3 mb-10 " key={index}>
            <InputFormItem
              name={`${fieldName}.id`}
              required={false}
              hidden={true}
            />
           <Col span={11} style={{paddingRight:5, paddingLeft:5}}>
               <ProductAutocompleteFormItem
                name={`${fieldName}.product`}
                placeholder={i18n('entities.sellItem.fields.product')}
                required={false}
                quantity={`${fieldName}.quantity`}
                price={`${fieldName}.price`}
              />
           </Col>
           <Col span={4} style={{paddingRight:5, paddingLeft:5}}>
                <InputNumberFormItem
                name={`${fieldName}.quantity`}
                placeholder={i18n('entities.sellItem.fields.quantity')}  
                required={true}
                autoFocus
                />
           </Col>
           <Col span={4} style={{paddingRight:5, paddingLeft:5}}>
               <InputNumberFormItem
                  name={`${fieldName}.price`}
                  placeholder={i18n('entities.sellItem.fields.price')}  
                  required={true}
                  autoFocus
                  min={minSelling}
                />
           </Col>
           <Col span={4} style={{paddingRight:5, paddingLeft:5}}>
            <InputNumberFormItem
              name={`${fieldName}.total`}
              value={itemtotalAmount}
              placeholder={i18n('entities.sellItem.fields.total')} 
              required={true}
              disabled
              autoFocus
            />
           </Col>
           <Col className="gutter-row" span={1}>
             <Button type="primary" style={{ justifyContent:'center'}} onClick={removeFriend(index)} block icon={<MinusCircleOutlined />} />
           </Col>
        </Row>
        );
      })}
      </Card>
          
      <Row gutter={24}>
          <Col className="gutter-row" span={18}>
          <TextAreaFormItem
            name="sellDetails"
            label={i18n('entities.sell.fields.sellDetails')}  
            required={false}
            layout={formItemLayout}
          />
          </Col>
          <Col className="gutter-row" span={6}>
            <Row className="h-10 border-b-2 border-gray-300 m-1" gutter={24}>
            <Col  span={24}>
            <InputFormItem
              name="totalAmount"
              label={i18n('entities.sell.fields.totalAmount')}  
              required={false}
              layout={formItemLayout}
              value={totalAmount}
              disabled
            />
            </Col>
            </Row>
            <Row className="h-10 border-b-2 border-gray-300 m-1" gutter={24}>
            <Col  span={24}>
            <InputFormItem
              name="paidAmount"
              label={i18n('entities.sell.fields.paidAmount')}  
              required={false}
              layout={formItemLayout}
            />
            </Col>
            </Row>
            <Row className="h-10 border-b-2 border-gray-300 m-1" gutter={24}>
            <Col  span={24}>
            <InputFormItem
                name="balanceAmount"
                label={i18n('entities.sell.fields.balanceAmount')}  
                required={false}
                layout={formItemLayout}
                value={totalAmount-parseFloat(form.watch('paidAmount'))}
                disabled
              />
            </Col>
            </Row>
          </Col>
        </Row> 
          <Form.Item
            className="form-buttons"
            {...tailFormItemLayout}
          >
            <Button
              loading={saveLoading}
              type="primary"
              onClick={form.handleSubmit(onSubmit)}
              icon={<SaveOutlined />}
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              icon={<UndoOutlined />}
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel && (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                icon={<CloseOutlined />}
              >
                {i18n('common.cancel')}
              </Button>
            )}
          </Form.Item>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default SellForm;
