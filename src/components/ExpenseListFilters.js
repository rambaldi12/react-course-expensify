import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'
import * as filtersActions from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(filtersActions.setStartDate(startDate));
        this.props.dispatch(filtersActions.setEndDate(endDate))
    }
    render() {
        return <div>
            <input value={this.props.filters.text} onChange={(e) => {
                this.props.dispatch(filtersActions.setTextFilter(e.target.value));
            }} />
            <select
                value={this.props.filters.sortBy}
                onChange={(e) => {
                    this.props.dispatch(e.target.value == "date" ? filtersActions.sortByDate() : filtersActions.sortByAmount());
                }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={(calendarFocused) => this.setState(() => ({
                calendarFocused
            }))}
            numberOfMonths={1}
            isOutsideRange={ () => false}
            showClearDates={true}
            />
        </div>
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);

