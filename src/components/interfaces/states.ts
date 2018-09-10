import { TimesheetRecord } from '../model/models';

export interface IUsersPageState {
  viewDisplayState: number;
  timesheetRecords: TimesheetRecord[];
  selectedTimesheet: TimesheetRecord;
}
