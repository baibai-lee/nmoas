import React from 'react';
import { Card, Col, Row } from 'antd';

const Home: React.FC = () => {
    return (
        <div>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="总图片量" bordered={false}>
                        总图片量
                    </Card>
                </Col>

                <Col span={8}>
                    <Card title="总浏览量" bordered={false}>
                        总浏览量
                    </Card>
                </Col>

                <Col span={8}>
                    <Card title="总贡献人数" bordered={false}>
                        总贡献人数
                    </Card>
                </Col>
     
            </Row>
        </div>


    )
}

export default Home