import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// eslint-disable-next-line
import { Header, Sider, Footer } from './containers'

import { About, Home, Error } from './views'

import { Layout, Icon } from 'antd';
const { Header: HeaderLayout, Footer: FooterLayout, Sider: SiderLayout, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <BrowserRouter>
      <Layout className='App'>

        <SiderLayout trigger={null} collapsible collapsed={collapsed}><Sider /></SiderLayout>

        <Layout>

          <HeaderLayout >
            <Header>
              <Icon className="trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
            </Header >
          </HeaderLayout>

          <Content className='main-container'>
            <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/home/' component={Home}></Route>
              <Route path='/about/' component={About}></Route>
              <Route path='/error/' component={Error}></Route>
              <Redirect to='/error/' />
            </Switch>
          </Content>

          <FooterLayout><Footer /></FooterLayout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
