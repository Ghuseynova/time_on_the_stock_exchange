import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnalogDisplay from './analog-display';
import DigitalDisplay from './digital-display';
import Icon from '../Icon';
import timezone from '../../data/timezone';
import { deleteClock } from '../../store/actions';

import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: new Date(),
      isOpen: false,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      currentTime: new Date(),
    });
  }

  onOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  onClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  onChangeTimeZone = (id, currentOption) => {
    const { openModal } = this.props;
    const modalData = {
      id,
      isOpen: true,
      title: 'Change timezone',
      content: {
        selectOptions: timezone,
        currentOption: currentOption,
      },
      btnText: 'Change',
    };
    openModal(modalData);
  };

  render() {
    const { clockId, className, timezone, deleteClock } = this.props;
    const { currentTime, isOpen } = this.state;

    return (
      <div className={`clock ${className}`}>
        <div className="clock__tz">{timezone.split('/')[1]}</div>
        <AnalogDisplay
          className="clock__analog"
          time={currentTime}
          timezone={timezone}
        />
        <DigitalDisplay time={currentTime} timezone={timezone} />
        <button
          className="clock__btn"
          onClick={this.onOpen}
          title="change timezone or delete"
        >
          <Icon
            className="clock__btn-icon"
            iconId="icon-dots-three-horizontal"
          />
        </button>

        <div className={isOpen ? 'clock__overlay is-open' : 'clock__overlay'}>
          <button className="clock__overlay-close" onClick={this.onClose}>
            <Icon iconId="icon-clear" />
          </button>

          <button
            onClick={() => {
              deleteClock(clockId);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              this.onChangeTimeZone(clockId, timezone);
            }}
          >
            Change Timezone
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteClock })(Clock);
