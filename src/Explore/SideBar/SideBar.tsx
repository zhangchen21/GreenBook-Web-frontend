import { Button } from "antd";
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import {
  HomeOutlined,
  PlusSquareOutlined
} from "@ant-design/icons";
import './SideBar.scss'
import { useState } from "react";
import NormalButton from "../../Components/Button/NormalButton";

const Actions = [
  {
    label: '发现',
    key: '/homepage',
    icon: <HomeOutlined />,
  },
  {
    label: '发布',
    key: '/zhihu/goods',
    icon: <PlusSquareOutlined />,
  },
];

function SideBar() {
  const [current, setCurrent] = useState(Actions[0]);
  
  return (
    <div className="sideBar">
      {
        Actions.map(action => 
          <NormalButton 
            selected={current === action}
            icon={action.icon}
            onClick={() => {
              setCurrent(action)
            }}
            label={action.label}
          />
        )
      }
      <Button 
        className='loginBtn'
        type="text" 
        size="large" 
        onClick={() => {}}
      >
        登录
      </Button>    
    </div>
  )
}

export default SideBar;