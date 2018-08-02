import * as React from "react";

interface IUsersPageState {
  viewDisplayState: number;
  timesheetRecords: ITimesheetRecord [];
  selectedTimesheet: ITimesheetRecord;
}

enum TSStatus { CREATED, REJECTED, MGRREVIEW, CHKDGOOD, CHKDBAD }

interface ITimesheetRecord {
    oid: string;
    ppDate: string;
    empId: string;
    status: TSStatus;
}

class UsersPage extends React.Component<{}, IUsersPageState> {

    constructor(props: any, state: any) {
        super(props, state);
        this.state = {viewDisplayState: 0, timesheetRecords: [], 
        selectedTimesheet: {oid: '', ppDate: '', empId: '', status: TSStatus.CREATED}};

        let m = new Promise<number>(function(resolve, reject) {
            const data: number = 1;
            resolve(data);
        });

        m.then((result) => this.setState({viewDisplayState: result}))
         .then(() => this.sleep(2000))
         .then(() => this.setState({viewDisplayState: 2}));
    }

    sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {
        let content =(<div></div>);

        if (this.state.viewDisplayState === 1) {
            content = (<div> Display Timesheets </div>);
        }
        else if (this.state.viewDisplayState === 2) {
            content = (<div> Data </div>);
        }

        return (<div> {content} </div>);
    }

}

export default UsersPage;
