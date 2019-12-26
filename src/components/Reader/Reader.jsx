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
    activButtonFwd: true,
  };

  incrPublication = evt => {
    console.log(this.state.current);
    console.log(this.props.items.length);

    if (this.state.current + 2 === this.props.items.length) {
      this.setState(state => ({ activButtonFwd: false }));
    }

    this.setState(state => ({
      current: state.current + 1,
      activButton: true,
    }));
  };
  decrPublication = evt => {
    if (this.state.current === 1) {
      this.setState(state => ({ activButton: false }));
    }

    this.setState(state => ({
      current: state.current - 1,
    }));
  };

  render() {
    const { current, activButtonFwd, activButton } = this.state;

    console.log(activButton);
    return (
      <div className={styles.reader}>
        <Controls
          activButton={activButton}
          activButtonFwd={activButtonFwd}
          incrPublication={this.incrPublication}
          decrPublication={this.decrPublication}
        />
        <Counter current={current} total={this.props.items.length} />
        <Publication item={this.props.items[current]} />
      </div>
    );
  }
}
