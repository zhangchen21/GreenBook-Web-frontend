import { Typography, Button, Row, Col, Card } from 'antd';
import './HomePage.css'; // 导入自定义的样式文件

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="home-body">
        <Row justify="center" align="middle">
          <Col span={24} className="home-content">
            <Title level={1} className="title">
              欢迎来到我们的官网
            </Title>
            <Title level={3} className="subtitle">
              我们使用AI创作内容，帮助用户躺着就能实现财富自由
            </Title>
            <Paragraph className="description">
              您只需轻松躺在舒适的床上，我们的AI系统将为您创作优质内容，助您实现财富自由。无需付出额外的努力，我们的智能算法将为您提供卓越的服务，从而帮助您在事业上取得更大的成功。
            </Paragraph>
            <Button type="primary" size="large" className="cta-button">
              开始体验
            </Button>
          </Col>
        </Row>
      </div>
      <div className="feature-section">
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card className="feature-card" hoverable>
              <Title level={4} className="feature-title">
                强大的AI创作引擎
              </Title>
              <Paragraph className="feature-description">
                我们的智能算法采用先进的机器学习技术，能够创作高质量、独具创意的内容，满足您的各种需求。
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card className="feature-card" hoverable>
              <Title level={4} className="feature-title">
                一键生成丰富多样的内容
              </Title>
              <Paragraph className="feature-description">
                我们的系统提供了丰富多样的内容生成选项，包括文章、博客、社交媒体内容等，
                只需轻松点击一键，即可生成您所需的各种类型的内容，轻松应对不同场景的需求。
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card className="feature-card" hoverable>
              <Title level={4} className="feature-title">
                定制化的输出结果
              </Title>
              <Paragraph className="feature-description">
                您可以根据您的需求对生成的内容进行定制化的调整，包括格式、风格、语调等，确保生成的内容符合您的要求。
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="call-to-action-section">
        <Title level={2} className="section-title">
          开始体验
        </Title>
        <Paragraph className="cta-description">
          立即注册并体验我们强大的AI内容生成引擎，躺着就能实现财富自由！
        </Paragraph>
        <Button type="primary" size="large" className="cta-button">
          立即注册
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
