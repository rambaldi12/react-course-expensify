import moment from 'moment';
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense)=> {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment) : true;
        const endDateMatch =  endDate ? endDate.isSameOrAfter(createdAtMoment) : true;
        const textMatch = !text || expense.description.toLowerCase().indexOf(text.toLowerCase()) > -1 ;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy == 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy == 'amount'){
            return a.amount < b.amount ? 1 : -1;
        } 
        return null;
    });
}