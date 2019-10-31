import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Visibility, Menu, Message } from 'semantic-ui-react';
import { setGlobalNotification } from 'containers/App/actions';
import { makeSelectNotification } from 'containers/App/selectors';

import './style.scss';

class Notification extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      fixedStyle: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notification.visible !== this.props.notification.visible) {
      if (nextProps.notification.visible) {
        this.timeout = setTimeout(() => {
          this.onDismiss();
        }, 5000);
      } else {
        clearTimeout(this.timeout);
      }
    }
  }

  onDismiss = () => {
    this.props.setNotification('', '', false);
  };

  stickNotification = () => this.setState({ fixedStyle: true });

  unstickNotification = () => this.setState({ fixedStyle: false });

  render() {
    const { notification, className } = this.props;
    const { fixedStyle } = this.state;
    const type = notification.type;

    if (!notification.visible) {
      return null;
    }

    return (
      <Visibility
        className={className}
        onBottomPassed={this.stickNotification}
        onBottomVisible={this.unstickNotification}
        once={false}
      >
        <Menu
          borderless
          fixed={fixedStyle ? 'top' : undefined}
          className={fixedStyle ? 'fixed-notification' : 'sticky-notification'}
        >
          <Message
            className="notification-message"
            info={type === 'info'}
            success={type === 'success'}
            error={type === 'error'}
            header={notification.heading}
            content={notification.message}
            onDismiss={this.onDismiss}
          />
        </Menu>
      </Visibility>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  notification: makeSelectNotification(),
});

const mapDispatchToProps = {
  setNotification: setGlobalNotification,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Notification);
