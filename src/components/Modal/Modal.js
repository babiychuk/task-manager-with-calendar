import React from 'react';
import './Modal.css';

class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.save = this.save.bind(this);
        this.cansel = this.cansel.bind(this);
        this.remove = this.remove.bind(this);

    }

    save(){
        this.props.updateBlock(this.props.day + this.props.nameMonth + '|Текст задачи: '+ this.refs.textar.value, this.props.day);
        this.props.hideModal();
    }

    cansel(){
        this.props.hideModal();
    }

    remove(){
        this.props.deleteBlock (this.props.day);
        this.props.hideModal();
    }

    render(){
        return(
            <div className="modal">
                <div>
                    <p>Выбрано {this.props.day} {this.props.nameMonth}</p>
                    <textarea ref="textar" defaultValue='input some text...'></textarea>
                    <p><button onClick={this.save} className="btn green">Сохранить</button>
                    <button onClick={this.cansel} className="btn red">Отменить</button>
                    <button onClick={this.remove} className="btn red">Удалить</button></p>
                </div>
            </div>
        );

    }
}

export default Modal;
