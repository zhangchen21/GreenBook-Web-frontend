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
  const [showNavItem, setShowNavItem] = useState(true);

  const onClick = (nav: any) => {
    setCurrent(nav.key);
    navigate(nav.key);
  }

  // 监听窗口宽度变化，自动调整列数
  useEffect(() => {
    const handleResize = () => {
      setShowNavItem(window.innerWidth > 1400 ? true : false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

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
