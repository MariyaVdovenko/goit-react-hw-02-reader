import React, { Component } from 'react';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import styles from './App.module.css';
import T from 'prop-types';

export default class App extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        title: T.string,
        text: T.string,
      }),
    ),
  };

  state = {
    current: 0,
  };

  handleClick = ({ target: { name } }) => {
    this.setState(state => ({
      current: name === 'increment' ? state.current + 1 : state.current - 1,
    }));
  };

  render() {
    const { current } = this.state;

    return (
      <div className={styles.reader}>
        <Controls
          current={current}
          total={this.props.items.length}
          handleClick={this.handleClick}
        />
        <Counter current={current} total={this.props.items.length} />
        <Publication item={this.props.items[current]} />
      </div>
    );
  }
}
