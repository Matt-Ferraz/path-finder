import React, { Component } from 'react';
import './Node.css';

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    const { isEnd, isStart } = this.props;

    const extraClassName = isEnd ? 'node node-finish' : isStart ? 'node node-start' : 'node'
  
    return <div className={extraClassName}></div>
  };
};

export const DEFAULT_NODE = {
  row: 0,
  col: 0
}