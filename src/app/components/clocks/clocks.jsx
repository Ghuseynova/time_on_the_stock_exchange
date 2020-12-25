import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getClocks } from '../../store/actions';
import clocks from '../../data/clocks';
import timezone from '../../data/timezone';

import Clock from '../clock';

import './clocks.scss';

class Clocks extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getClocks } = this.props;
    const localState = JSON.parse(localStorage.getItem('app_state'));

    !localState ? getClocks(clocks) : getClocks(localState.clocks);
  }

  onAdd = () => {
    const { openModal } = this.props;
    const modalData = {
      isOpen: true,
      title: 'Add new clock',
      content: {
        selectOptions: timezone,
        currentOption: 'Europe/Moscow',
      },
      btnText: 'Add',
    };
    openModal(modalData);
  };

  render() {
    const { clocks } = this.props;
    const { openModal } = this.props;

    const renderClocks = (clocks) => {
      return clocks.map((clock) => {
        const { id, timezone } = clock;

        return (
          <Clock
            key={uuidv4()}
            className="clocks__item"
            clockId={id}
            timezone={timezone}
            openModal={openModal}
          />
        );
      });
    };

    return (
      <div className="clocks">
        <div className="clocks__inner">{renderClocks(clocks)}</div>
        <div className="clocks__bottom">
          <button className="clocks__button" onClick={this.onAdd}>
            Add new clock
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { clocks } = state;
  return {
    clocks,
  };
};

const mapDispatchToProps = {
  getClocks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Clocks);
