import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Container } from 'semantic-ui-react';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { logout } from 'modules/auth/redux/actions';
import { UserAvatar } from 'react-user-avatar';

import './style.scss';

class TopBar extends Component {
  render() {
    const { currentUser, logout: logoutAction } = this.props;
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as={Link} header to="/">
            Jogging Track
          </Menu.Item>
          {(currentUser.role === 'admin' || currentUser.role === 'manager') && (
            <Dropdown item simple text="Users">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/users/new">
                  Add New User
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/users">
                  User List
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {(currentUser.role === 'admin' || currentUser.role === 'user') && (
            <Dropdown item simple text="Entries">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/entries/new">
                  Add New Entry
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/report">
                  Weekly Report
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/entries">
                  Entry List
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          <Menu.Menu position="right">
            <Dropdown item simple text={`Hello ${currentUser.firstName}`}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={logoutAction}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const mapDispatchToProps = {
  logout,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(TopBar);
