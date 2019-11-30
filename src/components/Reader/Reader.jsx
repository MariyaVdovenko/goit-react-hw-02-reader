import React, { Component } from 'react';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    current: 0,
    activButton: false,
  };

  incrPublication = evt => {
    if (this.state.current + 1 === this.props.items.length) {
      alert('You have read all publications');

      return;
    }

    this.setState(state => ({
      current: state.current + 1,
      activButton: true,
    }));
  };
  decrPublication = evt => {
    if (this.state.current + 1 === 1) {
      this.setState(state => ({ activButton: false }));
      return;
    }

    this.setState(state => ({
      current: state.current - 1,
    }));
  };

  render() {
    const { current } = this.state;
    const { activButton } = this.state;
    console.log(activButton);
    return (
      <div className={styles.reader}>
        <Controls
          activButton={activButton}
          incrPublication={this.incrPublication}
          decrPublication={this.decrPublication}
        />
        <Counter current={current} total={this.props.items.length} />
        <Publication item={this.props.items[current]} />
      </div>
    );
  }
}
