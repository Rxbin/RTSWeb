import { TimesheetRecord } from '../model/models';

export interface TimesheetDisplayProps {
  viewDisplayState: number;
  timesheetRecords: TimesheetRecord[];
  selectedTimesheet: TimesheetRecord;

  onSelectedTimesheetChanged: (data: TimesheetRecord) => void;
}

export interface EditTimesheetDisplayProps {
  viewDisplayState: number;
  currentTimesheet: TimesheetRecord;
}
