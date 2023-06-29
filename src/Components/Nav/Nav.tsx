import {
  HomeOutlined,
  ZhihuOutlined
} from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchInput from '../SearchInput/SearchInput';
// import logo from '../../assets/logo.jpg';
import './Nav.scss'
import { Dropdown, MenuProps } from "antd";
import { MenuItemType } from "antd/lib/menu/hooks/useItems";
import {
  MenuOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "../../hooks";
import { selectShowNavItem } from "../../AppSlice";

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: '/homepage',
    icon: <HomeOutlined />,
  },
  {
    label: '好物推荐',
    key: '/zhihu/goods',
    icon: <ZhihuOutlined />,
  },
  {
    label: '红包问题',
    key: '/zhihu/redenvelope',
    icon: <ZhihuOutlined />,
  },
];

const Navbar: FC= () => {
  let navigate = useNavigate();
  
  const location = 
    useLocation()
    .pathname
    .match(/.*?(?<path>\/[^\?]*)/)
    ?.groups
    ?.path 
    ?? "/homepage";

  const [current, setCurrent] = useState(location);
  const showNavItem = useAppSelector(selectShowNavItem);
  
  const onClick = (nav: any) => {
    setCurrent(nav.key);
    navigate(nav.key);
  }

  useEffect(() => {
    setCurrent(location);
  }, [location])

  return (
    <div className="Navbar">
      <div className="brand">
        {/* <img src={logo} alt="" /> */}
        绿皮书
      </div>
      <SearchInput/>
      <div className="items">
      {
        showNavItem 
        ? (
          items.map(item => <span onClick={() => onClick(item)}>{(item as MenuItemType)?.label}</span>)
        )
        : (
          <Dropdown menu={{ items }}>
              <MenuOutlined />
          </Dropdown>     
        )
      }
      </div>
    </div>
  )
};

export default Navbar;
