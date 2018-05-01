import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.expense){
            this.state = {
                id:this.props.expense.id,
                description:this.props.expense.description,
                note:this.props.expense.note,
                amount:(this.props.expense.amount /100).toString(),
                createdAt:moment(this.props.expense.createdAt),
                calendarFocused:false,
                error:''
            };
        } else {
            this.state = {
                id:undefined,
                description: '',
                note:'',
                amount:'',
                createdAt:moment(),
                calendarFocused:false,
                error:''
            }
        }
       
    }
    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(()=>( { description: description } ))
    }
    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState(()=>({note:note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ amount: amount }));
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt: createdAt}));
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({calendarFocused: focused}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error:'Fill all fields pliz!'}));
        } else {
            this.setState(() => ({error:undefined}));

                this.props.onSubmit({
                    description: this.state.description,
                    note:this.state.note,
                    amount: parseFloat(this.state.amount,10) * 100,
                    createdAt:this.state.createdAt.valueOf()
                });
            }
        }
    render() {
        return (
            <div>
                {!this.state.error || <p>{this.state.error}</p> }
                <form onSubmit={this.onSubmit}>
                    <input type="text" 
                    value={this.state.description} 
                    onChange={this.onDescriptionChange} 
                    placeholder="description" 
                    autoFocus />

                    <input 
                    type="text" 
                    placeholder="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange} />

                    <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => (false)} />

                    <textarea 
                    placeholder="Add a note(optional)" 
                    value={this.state.note}
                    onChange={this.onNoteChange}></textarea>
                    {this.state.id === undefined ? <button>Add expense</button> : <button>Edit expense</button>}
                    
                </form>
            </div>
        )
    }
}