import { FC } from "react";
import './TrendCard.scss'

export interface Trend {
  id: string,
	title: string,
	content: string,
  author: string,
  thumb_url: string,
  type: number,
  createTime: string
}

const TrendCard: FC<{ trend: Trend }> = ({ trend }) => {
  const { title, content, author, thumb_url, type, createTime } = trend;

  return (
    <div className="TrendCard">
      <img src={thumb_url} alt="" />
      <title>{title}</title>
      <div className="info">
        <div className="author">{author}</div>
        <div className="trendType">{type === 0 ? "闲置" : "组队"}</div>
      </div>
    </div>
  )
}

export default TrendCard;