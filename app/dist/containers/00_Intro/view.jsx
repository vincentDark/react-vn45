import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';


export default class Intro extends PureComponent {
  state = {
    activePage: '',
    samplePage: false
  };

  vn45Array = [
    {
      route: '/vn45',
      title: 'VN45 Hellow'
    },
  ];

  checkRouteLegal = activePage => {
    const isLegal = this.vn45Array.some(obj => obj.route === activePage)
    this.setState({
      activePage: isLegal ? activePage : '/todo',
      isLegal: isLegal,
    });
  };

  componentWillReceiveProps(nextProps) {
    this.checkRouteLegal(nextProps.history.location.pathname);
  }

  componentWillMount() {
    const { activePage } = this.state;
    this.checkRouteLegal(activePage);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.activePage !== nextState.activePage;
  }

  render() {
    const { children } = this.props;
    const { activePage, isLegal } = this.state;
    return (
      <div>
          {children}
      </div>
    );
  }
}
