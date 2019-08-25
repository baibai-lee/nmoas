import React from 'react';
import { Menu, Icon } from 'antd';

import './index.scss'

const Sider: React.FC = () => {
    return (
        <div className='sider'>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <span>概览</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="upload" />

                    <span>管理</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="video-camera" />

                    <span>关于</span>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Sider