import { Layout, Menu, Typography } from 'antd';
import React, { useEffect } from 'react';
import SiderWrapper from 'src/view/layout/styles/SiderWrapper';
import { Link } from 'react-router-dom';
import authSelectors from 'src/modules/auth/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import actions from 'src/modules/layout/layoutActions';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import menus from 'src/view/menus';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import _ from 'lodash';
import type { MenuProps } from 'antd';



const { Text } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

function getGroup(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label:<Text style={{color:'#6E7276'}} strong>{label}</Text>,
    type,
    style:{ marginTop: 'auto', display: 'hidden' }
  } as MenuItem;
}
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const { Sider } = Layout;

const AppMenu = (props) => {
  const dispatch = useDispatch();
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );
  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );
  const menuVisible = useSelector(
    layoutSelectors.selectMenuVisible,
  );

  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );
 
  const toggleMenuOnResize = () => {
    window.innerWidth < 576 ? hideMenu() : showMenu();
  };

  useEffect(() => {
    toggleMenuOnResize();
    window.addEventListener('resize', toggleMenuOnResize);

    return () => {
      window.removeEventListener(
        'resize',
        toggleMenuOnResize,
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedKeys = () => {
    const url = props.url;
    const match = menus.find((option) => {
      if (option.exact) {
        return url === option.path;
      }

      return (
        url === option.path ||
        url.startsWith(option.path + '/')
      );
    });

    if (match) {
      return [match.path];
    }
  };

  const hideMenu = () => {
    dispatch(actions.doHideMenu());
  };

  const showMenu = () => {
    dispatch(actions.doShowMenu());
  };

  const match = (permission) => {
    return permissionChecker.match(permission);
  };

  const lockedForCurrentPlan = (permission) => {
    return permissionChecker.lockedForCurrentPlan(
      permission,
    );
  };

  const menuCategories = _.chain(menus)
  // Group the elements of Array based on `productName` property
  .groupBy('type')
  // `key` is group's name (product Name), `value` is the array of objects
  .map((value, key) => ({ type: key, menus: value }))
  .value();

  const onClick: MenuProps['onClick'] = (e) => {
    getHistory().push(e.key);
  };

  return (
    <SiderWrapper
      // style={{
      //   display: menuVisible ? 'block' : 'none',
      // }}
    >
      <Sider theme="dark" trigger={null}  collapsible collapsed={!menuVisible}>
        <div className="logo">
          {menuVisible ? (
            <Link to="/">
              <img
                src='/images/landscape.png'
                width="64px"
                alt={i18n('app.title')}
              />
            </Link>
          ) : (
            <h2>
              <img
                src='/images/logo.png'
                width="40px"
                alt={i18n('app.title')}
              />
            </h2>
          )}
        </div>
        {menuCategories.map((category, index)=>(
          <Menu
          onClick={onClick}
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys()}
          items={[
            getGroup(category.type, index, null, [ ...category.menus
            .filter((menu) =>
              match(menu.permissionRequired) && menu.type === category.type,
            )
            .map((menu) => (getItem(menu.label, menu.path, menu.icon)))], 'group'),
            ...category.menus
            .filter((menu) =>
            lockedForCurrentPlan(menu.permissionRequired) && menu.type === category.type,
            )
            .map((menu) => (getItem(menu.label, menu.path, menu.icon,))),
           
          ]}
          />
        ))}
       
      </Sider>
    </SiderWrapper>
  );
};

export default AppMenu;
