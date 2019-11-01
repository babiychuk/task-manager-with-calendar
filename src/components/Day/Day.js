import React, {Fragment} from 'react';
import Modal from '../Modal/Modal';
import './Day.css';

class Day extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showModal: false};

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal () {
        this.setState({showModal: true});
    }

    hideModal () {
        this.setState({showModal: false});
    }



    render() {
        const modal = this.state.showModal ? (
            <Modal
                key={this.props.day}
                day={this.props.day}
                item={this.props.item}
                addBlock={this.props.addBlock}
                updateBlock={this.props.updateBlock}
                deleteBlock={this.props.deleteBlock}
                hideModal={this.hideModal}
                nameMonth={this.props.nameMonth}
            />
        ) : null;
        return (
            <Fragment>
                <button onClick={this.showModal} className="day">
                    {this.props.day}
                </button>
                {modal}
            </Fragment>

        );
    }
}

export default Day;
