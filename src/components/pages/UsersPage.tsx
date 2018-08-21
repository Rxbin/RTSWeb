import * as React from 'react';
import { IUsersPageState } from '../interfaces/states';
import { TSStatus, TimesheetRecord } from '../model/models';
import { TimesheetDisplay } from '../views/TimesheetDisplay';
import { EditTimesheetDisplay } from '../views/EditTimesheetDisplay';

class UsersPage extends React.Component<{}, IUsersPageState> {
  constructor(props: any, state: any) {
    super(props, state);

    this.state = {
      viewDisplayState: 0,
      timesheetRecords: [],
      selectedTimesheet: {
        oid: '',
        ppDate: '',
        empId: '',
        status: TSStatus.CREATED
      }
    };

    let m = new Promise<TimesheetRecord[]>(function(resolve, reject) {
      const data: TimesheetRecord[] = [
        {
          oid: 'A',
          ppDate: '01/01/2000',
          empId: 'A',
          status: TSStatus.CREATED
        },
        {
          oid: 'B',
          ppDate: '02/01/2000',
          empId: 'B',
          status: TSStatus.REJECTED
        },
        {
          oid: 'C',
          ppDate: '03/01/2000',
          empId: 'C',
          status: TSStatus.CHKDBAD
        },
        {
          oid: 'D',
          ppDate: '04/01/2000',
          empId: 'D',
          status: TSStatus.CHKDGOOD
        },
        {
          oid: 'E',
          ppDate: '05/01/2000',
          empId: 'E',
          status: TSStatus.MGRREVIEW
        }
      ];

      resolve(data);
    });

    m.then(result =>
      this.setState({ viewDisplayState: 1, timesheetRecords: result })
    );
  }

  render() {
    let content = <div />;

    if (this.state.viewDisplayState === 1) {
      content = (
        <div>
          <TimesheetDisplay {...this.state} onSelectedTimesheetChanged={this.onSelectedTimesheetChanged.bind(this)} />
        </div>
      );
    } else if (this.state.viewDisplayState === 2) {
        content = (
          <div> 
            <EditTimesheetDisplay {...this.state} onSelectedTimesheetChanged={this.onSelectedTimesheetChanged.bind(this)} />
          </div>
        );
    }

    return <div> {content} </div>;
  }

  onSelectedTimesheetChanged(data: TimesheetRecord) {    
    if(data.oid !== null)
      this.setState({ selectedTimesheet: data, viewDisplayState: 2 });
  }
}

export default UsersPage;
