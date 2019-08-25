import React from 'react';

import { Button } from 'antd';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { About, Home, Error } from './views'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/home/' component={Home}></Route>
          <Route path='/about/' component={About}></Route>
          <Route path='/error/' component={Error}></Route>
          <Redirect to='/error/' />
        </Switch>

        <span>hello</span>
        <Button type="primary">helo antd</Button>
      </div>
    </BrowserRouter>
  );
}

export default App;
