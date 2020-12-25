import React, { Component } from 'react';
import Clocks from './components/clocks';
import Modal from './components/modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalData: {
        isOpen: false,
        title: '',
        content: {
          selectOptions: [],
          currentOption: '',
        },
        btnText: '',
      },
    };
  }

  openModal = (modalData) => {
    this.setState({ modalData });
  };

  closeModal = () => {
    this.setState({ modalData: { ...this.state.modalData, isOpen: false } });
  };

  changeOption = (currentOption) => {
    this.setState({
      modalData: {
        ...this.state.modalData,
        content: {
          ...this.state.modalData.content,
          currentOption,
        },
      },
    });
  };

  render() {
    const { modalData } = this.state;

    return (
      <>
        <div className="wrapper">
          <h1>Time on the Stock Exchange</h1>
          <Clocks openModal={this.openModal} />
          <Modal
            modalData={modalData}
            onClose={this.closeModal}
            onChange={this.changeOption}
          />
        </div>
      </>
    );
  }
}

export default App;
