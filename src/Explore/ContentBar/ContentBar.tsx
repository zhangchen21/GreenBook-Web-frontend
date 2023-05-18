import { useEffect, useState } from "react"
import TrendCard from "./TrendCard";
import { Trend } from './TrendCard';
import './ContentBar.scss'
import { Button } from "antd";
import {
  FireOutlined,
  TeamOutlined,
  ShoppingOutlined
} from "@ant-design/icons";
import NormalButton from "../../Components/Button/NormalButton";

const mock: Trend[] = new Array(6).fill({
    title: 'test',
    content: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
    author: 'Chen',
    thumb_url: 'https://th.bing.com/th/id/OIP.syaydsHxqIdmEtE_qrozFgHaMW?w=193&h=322&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    type: 0,
    createTime: '2023/05/12'
  }).concat([
    {
      title: 'test',
      content: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
      author: 'Chen',
      thumb_url: 'https://th.bing.com/th/id/OIP.syaydsHxqIdmEtE_qrozFgHaMW?w=193&h=322&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      type: 0,
      createTime: '2023/05/12'
    }
  ])

const minWidth = 202;
const maxWidth = 238;
const columnGap = 32;
const sidebarWidth = 267;
const channels = [
  {
    name: '推荐',
    url: './recommand',
    icon: <FireOutlined />
  },
  {
    name: '闲置',
    url: './stuffs',
    icon: <ShoppingOutlined />
  },
  {
    name: '组队',
    url: './teams',
    icon: <TeamOutlined />
  },
];

function ContentBar() {
  const [trends, setTrends] = useState<Trend[]>(mock);
  const [currentChannel, setCurrentChannel] = useState(channels[0]);
  const [column, setColumn] = useState(4);
  const [marginRight, setmarginRight] = useState(columnGap);

   // 监听窗口宽度变化，自动调整列数
   useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth - sidebarWidth;
      let count = Math.max(
        Math.floor(width / (minWidth + columnGap)), // 每列最小宽度为202px
        Math.floor(width / (maxWidth + columnGap)),
      )
      if (count < 2) count = 2; // 最少显示2列
      if (count > 5) {
        count = 5;
        // 设置右边内边距，阻止继续变大
        setmarginRight(width - count * (maxWidth + columnGap));
      }
      setColumn(count);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  return (
    <div className="ContentBar">
      <div className="channelList">
        {
          channels.map(channel => 
            <NormalButton 
              selected={currentChannel === channel}
              icon={channel.icon}
              onClick={() => setCurrentChannel(channel)}
              label={channel.name}
            />
          )
        }   
      </div>
      <div 
        className="trendlist"
        style={{
          gridTemplateColumns: `repeat(${column}, 1fr`,
          gap: ` 20px ${columnGap}px`,
          marginRight: `${marginRight}px`,
        }}
      >
        {
          trends.map((trend, index) => {
            return (
              <div>
                <TrendCard key={trend.id} trend={trend} />
              </div>
            )
          })
        }
      </div>      
    </div>
  )
}

export default ContentBar;