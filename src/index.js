import dva, {connect} from 'dva';
import { Router, Route, Switch } from 'dva/router';
import React from 'react';
import app from './model/count';
import CountApp from './components/count';

// 1. Initialize
// const app = dva();

// 2. Model
// Remove the comment and define your model.
//app.model({});

// 3. Router

function mapStateToProps(state) {
  return {count: state.count};
}

const HomePage = connect(mapStateToProps)(CountApp);
app.router(({ history }) =>
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  </Router>
);

// 4. Start
app.start('#root');
