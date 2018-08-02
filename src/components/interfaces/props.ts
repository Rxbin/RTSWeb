import { TimesheetRecord } from '../model/models';

export interface TimesheetDisplayProps {
    viewDisplayState: number;
    timesheetRecords: TimesheetRecord [];
    selectedTimesheet: TimesheetRecord;

    // onToggleChange: (data: CheckboxProps) => void;
    onSelectedTimesheetChanged: (data: TimesheetRecord) => void; 
}