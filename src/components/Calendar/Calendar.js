import React from 'react';
import Day from '../Day/Day';
import TaskList from '../TaskList/TaskList';
import './Calendar.css';

class Calendar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            month: [],
            nowMonth: 7,
            monthArr: ['январь', 'февраль', 'март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь' ],
            monthName: ["август"],
        
        };

        this.addBlock = this.addBlock.bind(this);
        this.deleteBlock = this.deleteBlock.bind(this);
        this.updateBlock = this.updateBlock.bind(this);
        this.taskList = this.taskList.bind(this);
        this.getDatys = this.getDatys.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
    }

    getDatys (month, year){
        return new Date(year, month, 0).getDate();
    }

    componentDidMount() {
        let getDatys = this.getDatys(this.state.nowMonth, 2019); console.log(getDatys);
        var arr=[];
        for(var i = 0; i < getDatys; i++){
           arr[i]=i+1;
        }
        this.setState({month:arr});
    }

    addBlock (text){
        let arr = this.state.tasks;
        arr.push (text);
        this.setState({tasks: arr});
    }

    deleteBlock (i){
        let arr = this.state.tasks;
        arr.splice(i, 1);
        this.setState({tasks: arr});
    }

    updateBlock (text, i){
        let arr = this.state.tasks;
        arr[i] = text; 
        this.setState({tasks: arr}); 
    }

    taskList (item, i) {
        return (
            <TaskList key={i} index={i}>
                {item}
            </TaskList>
        );
    }

    nextMonth(){
        let nowMonth = this.state.nowMonth;
        this.setState({nowMonth:nowMonth+1});
        let getDatys = this.getDatys(this.state.nowMonth, 2019);
        var arr=[];
        for(var i = 0; i < getDatys; i++){
            arr[i]=i+1;
         
        }
        this.setState({monthName: this.state.monthArr[nowMonth]});
        this.setState({month:arr}); 
    }
    prevMonth(){
        let nowMonth = this.state.nowMonth;
        this.setState({nowMonth:nowMonth-1});
        let getDatys = this.getDatys(this.state.nowMonth, 2019);
        var arr=[];
        for(var i = 0; i < getDatys; i++){
            arr[i]=i+1;
        }
        this.setState({monthName: this.state.monthArr[nowMonth]});
        this.setState({month:arr});
    }

    render() {
        return (
            <div className="field">
                <div className="tasksList">
                    <p>Список задач:</p>
                    {this.state.tasks.map(this.taskList)}
                </div>
                <div className="calendar">
                    <div>{this.state.monthName}</div>
                    <div>
                        <button onClick={this.prevMonth}>prev month</button>
                        <button onClick={this.nextMonth}>next month</button>
                    </div>
                    {this.state.month.map( (i)=>
                        <Day key={i} day={i} item={i}
                               addBlock={this.addBlock}
                               updateBlock={this.updateBlock}
                               deleteBlock={this.deleteBlock}
                               nameMonth={this.state.monthName}
                        />)}
                </div>
            </div>

        );
    }
}

export default Calendar;
