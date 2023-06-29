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
import { useAppSelector } from "../../hooks";
import { selectTrendColumn } from "../../AppSlice";
import { maxTrendsWidth, minTrendsWidth } from "../../App";

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
  const column = useAppSelector(selectTrendColumn);

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
          gridTemplateColumns: `repeat(${column}, minmax(${minTrendsWidth}px, ${maxTrendsWidth}px)`,
          gridGap: `${column === 2 ? 10 : 32}px ${column === 2 ? 10 : 32}px`,
          margin: `0 ${column === 2 ? 10 : 32}px`,
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