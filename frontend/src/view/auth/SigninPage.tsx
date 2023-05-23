import {
  Button,
  Checkbox,
  Divider,
  Form,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import Content from 'src/view/auth/styles/Content';
import Logo from 'src/view/auth/styles/Logo';
import Wrapper from 'src/view/auth/styles/Wrapper';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Message from 'src/view/shared/message';
import I18nFlags from '../layout/I18nFlags';

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n('user.fields.email'), {
    required: true,
  }),
  password: yupFormSchemas.string(
    i18n('user.fields.password'),
    {
      required: true,
    },
  ),
  rememberMe: yupFormSchemas.boolean(
    i18n('user.fields.rememberMe'),
  ),
});

const SigninPage = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);
  const { socialErrorCode } = queryString.parse(
    location.search,
  );
  const externalErrorMessage = useSelector(
    selectors.selectErrorMessage,
  );
  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );

  const clearErrorMessage = () => {
    dispatch(actions.doClearErrorMessage());
  };

  useEffect(() => {
    clearErrorMessage();
    form.register({ name: 'rememberMe' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (socialErrorCode) {
      if (socialErrorCode === 'generic') {
        Message.error(i18n('errors.defaultErrorMessage'));
      } else {
        Message.error(
          i18n(`auth.social.errors.${socialErrorCode}`),
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = () => {
    if (externalErrorMessage) {
      clearErrorMessage();
    }
  };

  const [initialValues] = useState({
    email: '',
    password: '',
    rememberMe: true,
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(
      actions.doSigninWithEmailAndPassword(
        email,
        password,
        rememberMe,
      ),
    );
  };

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${
          backgroundImageUrl || '/images/signin.jpg'
        })`,
      }}
    >
      <Content>
        <Logo>
          <img
              src='/images/landscape.png'
              width="200px"
              alt={i18n('app.title')}
            />
        </Logo>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <InputFormItem
              name="email"
              placeholder={i18n('user.fields.email')}
              autoComplete="email"
              size="large"
              autoFocus
              layout={null}
              onChange={handleChange}
              externalErrorMessage={externalErrorMessage}
            />

            <InputFormItem
              name="password"
              placeholder={i18n('user.fields.password')}
              autoComplete="password"
              type="password"
              size="large"
              layout={null}
            />

            <Form.Item>
              <Checkbox
                checked={form.watch('rememberMe')}
                onChange={(event) =>
                  form.setValue(
                    'rememberMe',
                    event.target.checked,
                  )
                }
                type="checkbox"
              >
                {i18n('user.fields.rememberMe')}
              </Checkbox>

              <Link
                style={{
                  float: 'right',
                }}
                to="/auth/forgot-password"
              >
                {i18n('auth.forgotPassword')}
              </Link>
            </Form.Item>

            <Button
              type="primary"
              size="large"
              block
              htmlType="submit"
              loading={loading}
            >
              {i18n('auth.signin')}
            </Button>

            <Divider
              style={{ color: 'white', margin: '24px 0' }}
            >
              {i18n('common.or')}
            </Divider>
            <I18nFlags
              style={{
                marginTop: '24px',
              }}
            />
            
          </form>
        </FormProvider>
      </Content>
    </Wrapper>
  );
};

export default SigninPage;
