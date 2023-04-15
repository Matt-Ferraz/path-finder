import React, { Component } from "react";
import Node from "./Node/Node";
import './PathFinder.css'


export default class PathFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  };

  componentDidMount() {
    const nodes = [];
    // creates 15 rows
    for (let row = 0; row < 20; row++) {
      // current row
      const currentRow = [];

      // add 50 cols into the current row
      for (let col = 0; col < 50; col++) {
        const currentNode = {
          col,
          row,
          isStart: row === 10 && col === 5,
          isEnd: row === 10 && col === 45
        }
        currentRow.push(currentNode);
      };

      nodes.push(currentRow);
    };

    this.setState({ nodes })
  };

  render() {
    const { nodes } = this.state;
    return (
      <div className='grid'>
        {
          nodes.map((row, rowIndex) => {
            return (
              <div key={rowIndex}>
                {
                  row.map((node, nodeIndex) => {
                    const { isStart, isEnd } = node;
                    return (
                      <Node
                        key={nodeIndex}
                        isStart={isStart}
                        isEnd={isEnd}
                        test={'Foo'}
                      ></Node>
                    )
                  })
                }
            </div>)
          })
        }
      </div>
    )
  };
};