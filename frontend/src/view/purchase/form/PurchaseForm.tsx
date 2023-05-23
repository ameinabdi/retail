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
import SupplierAutocompleteFormItem from 'src/view/supplier/autocomplete/SupplierAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';
import  _  from 'lodash';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';

const  { Text } = Typography;


const schema = yup.object().shape({
  supplier: yupFormSchemas.relationToOne(
    i18n('entities.purchase.fields.supplier'),
    {
      required:true
    },
  ),
  totalAmount: yupFormSchemas.decimal(
    i18n('entities.purchase.fields.totalAmount'),
    {
      "scale": 2
    },
  ),
  paidAmount: yupFormSchemas.decimal(
    i18n('entities.purchase.fields.paidAmount'),
    {
      "scale": 2
    },
  ),
  balanceAmount: yupFormSchemas.decimal(
    i18n('entities.purchase.fields.balanceAmount'),
    {
      "scale": 2
    },
  ),
  purchaseDate: yupFormSchemas.date(
    i18n('entities.purchase.fields.purchaseDate'),
    {
      required:true
    },
  ),
  purchaseDatails: yupFormSchemas.string(
    i18n('entities.purchase.fields.purchaseDatails'),
    {},
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.purchase.fields.shop'),
    {
      required:true
    },
  ),
  Items:yup
  .array()
  .of(
    yup
      .object().shape({
        product: yupFormSchemas.relationToOne(
          i18n('entities.purchaseItem.fields.product'),
          {},
        ),
        itemName: yupFormSchemas.string(
          i18n('entities.purchaseItem.fields.itemName'),
          {},
        ),
        costPrice: yupFormSchemas.decimal(
          i18n('entities.purchaseItem.fields.costPrice'),
          {
            "scale": 2
          },
        ),
        quantity: yupFormSchemas.integer(
          i18n('entities.purchaseItem.fields.quantity'),
          {},
        ),
        sellingPrice: yupFormSchemas.decimal(
          i18n('entities.purchaseItem.fields.sellingPrice'),
          {
            "scale": 2
          },
        ),
        totalPrice: yupFormSchemas.decimal(
          i18n('entities.purchaseItem.fields.totalPrice'),
          {},
        ),
        shop: yupFormSchemas.relationToOne(
          i18n('entities.purchaseItem.fields.shop'),
          {},
        ),
      }))
  
});

const PurchaseForm = (props) => {
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
      supplier: record.supplier,
      totalAmount: record.totalAmount,
      paidAmount: record.paidAmount,
      balanceAmount: record.balanceAmount,
      purchaseDate: record.purchaseDate ? moment(record.purchaseDate) : null,
      purchaseDatails: record.purchaseDatails,
      shop: record.shop,
      Items: record?.Items?.map((item)=>{
        return{
          product: item.product,
          itemName: item.itemName,
          costPrice: item.costPrice,
          quantity: item.quantity,
          sellingPrice: item.sellingPrice,
          totalPrice: item.totalPrice,
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
  const totalAmount:any = _.sumBy(Items, function(item:any) { return (parseInt(item?.quantity) *parseFloat(item.costPrice)); }); 


  const onSubmit = (values) => {
    const Items = _.compact(values.Items);
    const updatedValue = {
      ...values,
      totalAmount,
      balanceAmount:totalAmount-parseFloat(form.watch('paidAmount')),
      Items
    }
    console.log('sssss', updatedValue)
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
    form.unregister(`Items[${index}].costPrice`);
    form.unregister(`Items[${index}].quantity`);
    form.unregister(`Items[${index}].sellingPrice`);
    form.unregister(`Items[${index}].totalPrice`);
    form.unregister(`Items[${index}].shop`);
    form.unregister(`Items[${index}]`);
  };

 
  const threeColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 8,
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
            <Col {...threeColumnsResponsiveProps}>
              <SupplierAutocompleteFormItem  
                name="supplier"
                label={i18n('entities.purchase.fields.supplier')}
                required={true}
                showCreate={!props.modal}
                layout={formItemLayout}
              />
            </Col>
            <Col {...threeColumnsResponsiveProps}>
            <DatePickerFormItem
            name="purchaseDate"
            label={i18n('entities.purchase.fields.purchaseDate')}
            required={true}
            layout={formItemLayout}
          />
            </Col>
            
            <Col {...threeColumnsResponsiveProps}>
            <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.purchase.fields.shop')}
            required={true}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
            </Col>
             
          </Row>
         
          
          <Card title={ <Row>
          <Col className="gutter-row" span={11}>
            <Text>{i18n('entities.purchaseItem.fields.product')} </Text>
          </Col>
          <Col className="gutter-row" span={3}>
            <Text>{i18n('entities.purchaseItem.fields.quantity')} </Text>
          </Col>
          <Col className="gutter-row" span={3}>
            <Text>{i18n('entities.purchaseItem.fields.costPrice')}</Text>
          </Col>
          <Col className="gutter-row" span={3}>
            <Text>{i18n('entities.purchaseItem.fields.sellingPrice')} </Text>
          </Col>
          <Col className="gutter-row" span={3}>
            <Text>{i18n('entities.purchaseItem.fields.totalPrice')} </Text>
          </Col>
          <Col span={1}><Button type="primary" style={{}} onClick={addFriend} block icon={<PlusOutlined />} /></Col></Row>} bordered={false}>
        {indexes.map((index) => {
        const fieldName = `Items[${index}]`;
        const itemtotalAmount = parseFloat(form.watch(`${fieldName}.quantity`))*parseFloat(form.watch(`${fieldName}.costPrice`))
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
                placeholder={i18n('entities.purchaseItem.fields.product')}
                required={false}
              />
           </Col>
           <Col span={3} style={{paddingRight:5, paddingLeft:5}}>
                <InputNumberFormItem
                name={`${fieldName}.quantity`}
                placeholder={i18n('entities.purchaseItem.fields.quantity')}  
                  required={true}
                  autoFocus
                />
           </Col>
           <Col span={3} style={{paddingRight:5, paddingLeft:5}}>
               <InputNumberFormItem
                  name={`${fieldName}.costPrice`}
                  placeholder={i18n('entities.purchaseItem.fields.costPrice')}  
                  required={true}
                  autoFocus
                />
           </Col>
           <Col span={3} style={{paddingRight:5, paddingLeft:5}}>
                <InputNumberFormItem
                name={`${fieldName}.sellingPrice`}
                placeholder={i18n('entities.purchaseItem.fields.sellingPrice')} 
                required={true}
                autoFocus
                />
           </Col>
           <Col span={3} style={{paddingRight:5, paddingLeft:5}}>
            <InputNumberFormItem
              name={`${fieldName}.totalPrice`}
              value={itemtotalAmount}
              placeholder={i18n('entities.purchaseItem.fields.totalPrice')} 
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
            name="purchaseDatails"
            label={i18n('entities.purchase.fields.purchaseDatails')}  
            required={false}
            layout={formItemLayout}
          />
          </Col>
          <Col className="gutter-row" span={6}>
            <Row className="h-10 border-b-2 border-gray-300 m-1" gutter={24}>
            <Col  span={24}>
            <InputNumberFormItem
              name="totalAmount"
              label={i18n('entities.purchase.fields.totalAmount')}  
              required={false}
              layout={formItemLayout}
              value={totalAmount}
              disabled={true}
            />
            </Col>
            </Row>
            <Row className="h-10 border-b-2 border-gray-300 m-1" gutter={24}>
            <Col  span={24}>
            <InputFormItem
            name="paidAmount"
            label={i18n('entities.purchase.fields.paidAmount')}  
            required={false}
            layout={formItemLayout}
          />
            </Col>
            </Row>
            <Row className="h-10 border-b-2 border-gray-300 m-1" gutter={24}>
            <Col  span={24}>
            <InputNumberFormItem
              name="balanceAmount"
              label={i18n('entities.purchase.fields.balanceAmount')}  
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

export default PurchaseForm;
