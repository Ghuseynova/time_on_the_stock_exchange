import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import Icon from '../Icon';
import './modal.scss';

import { addClock, changeTimezone } from '../../store/actions';

const Modal = ({ onClose, onChange, changeTimezone, addClock, modalData }) => {
  const { isOpen, title, content, btnText, id } = modalData;
  const { selectOptions, currentOption } = content;

  const renderOptions = (options) => {
    return options.map((option) => (
      <option key={uuidv4()} value={option}>
        {option}
      </option>
    ));
  };

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const onAdd = () => {
    const clock = {
      id: uuidv4(),
      timezone: currentOption,
    };

    addClock(clock);
    onClose();
  };

  const onChangeTz = () => {
    changeTimezone(id, currentOption);
    onClose();
  };

  return (
    <div className={isOpen ? 'modal modal--is-open' : 'modal'}>
      <div className="modal__inner">
        <button className="modal__close" onClick={onClose}>
          <Icon className="modal__close-icon" iconId="icon-clear" />
        </button>
        <h2 className="modal__title">{title}</h2>
        <h3 className="modal__subtitle">Choose timezone</h3>
        <select
          className="modal__select"
          name="timezone"
          id="timezone"
          value={currentOption}
          onChange={handleChange}
        >
          {Object.keys(content).length ? renderOptions(selectOptions) : ''}
        </select>

        <div className="modal__buttons">
          <button
            className="modal__btn modal__btn--blue"
            onClick={btnText === 'Add' ? onAdd : onChangeTz}
          >
            {btnText}
          </button>

          <button className="modal__btn modal__btn--simple" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addClock, changeTimezone })(Modal);
