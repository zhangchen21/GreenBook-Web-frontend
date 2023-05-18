import { FC } from 'react';
import { List, Typography, } from 'antd';

interface RecommandGoods {
	products: string[],
	className: string
}

const { Paragraph } = Typography;

const RecommandGoods: FC<RecommandGoods> = ({ products, className }) => {
	if(!products.length) {
		return null;
	} 
	return (
		<div  style={{width: "600px"}}>
			<List
				header={<div style={{fontWeight: "bold"}}>推荐好物</div>}
				bordered
				size="small"
				className={className}
				dataSource={products}
				renderItem={(item) => (
					<List.Item>
						<div style={{display: "flex", justifyContent: "space-between"}}>
							<Paragraph copyable>{item}</Paragraph>
						</div>
					</List.Item>
				)}
			/>
		</div>
	)
}

export default RecommandGoods;