/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { Container } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Notification from 'containers/Notification';
import { makeSelectCurrentUser } from 'containers/App/selectors';

import reducer from './redux/reducer';
import saga from './redux/saga';

import TopBar from './layout/components/TopBar';

import Dashboard from './dashboard';
import UsersPage from './user/pages/UsersPage';
import UserEditPage from './user/pages/UserEditPage';

import EntriesPage from './entry/pages/EntriesPage';
import WeeklyReport from './entry/pages/ReportPage';
import EntryEditPage from './entry/pages/EntryEditPage';
import './styles.scss';

class App extends Component {
  adminRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/users/:id" component={UserEditPage} /> }
        <Route exact path="/entries" component={EntriesPage} />
        <Route exact path="/entries/:id" component={EntryEditPage} />
        <Route exact path="/report" component={WeeklyReport} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    );
  }

  managerRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/users/:id" component={UserEditPage} /> }
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    );
  }

  userRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/entries" component={EntriesPage} />
        <Route exact path="/report" component={WeeklyReport} />
        <Route exact path="/entries/:id" component={EntryEditPage} />

        <Route render={() => <Redirect to="/" />} />
      </Switch>
    );
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="main-app">
        <TopBar />
        <Notification />
        <Container className="app-container main-app-container">
          {this[`${currentUser.role}Routes`]()}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(App);
