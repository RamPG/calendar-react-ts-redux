import { PREV_MONTH, NEXT_MONTH } from './actions/actions-constants';

interface PrevMonthAction {
    type: typeof PREV_MONTH
}

interface NextMonthAction {
    type: typeof NEXT_MONTH
}
export type DateObject = {
    year: number,
    month: number
}
export type ItemObject = {
    day: number,
    classButton: string
}
export interface CalendarState {
    currentDay: {
        name: string,
        number: number,
    }
    currentYear: number,
    currentMonth: {
        name: string,
        number: number
    },
    calendar: Array<Array<ItemObject>>
}
export type MonthActionTypes = PrevMonthAction | NextMonthAction
