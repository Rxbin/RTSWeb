import * as React from "react";
import { TimesheetDisplayProps } from '../interfaces/props';
import Button from '@material-ui/core/Button';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { TimesheetJobEntry } from "../model/models";

export class EditTimesheetDisplay extends React.Component<TimesheetDisplayProps, {}> {
    constructor(props: any, state: any) {
        super(props, state);
    }

    render() {
        const data: TimesheetJobEntry[] = [
            {
                timesheetRecordId: this.props.selectedTimesheet.oid,
                ejc: "TEST EJC",
                p_fri: 0.0,
                sat: 0.0,
                sun: 0.0,
                mon: 0.0,
                tue: 0.0,
                wed: 0.0,
                thu: 0.0,
                fri: 0.0,
                rgHrs: 0.0,
                stOT: 0.0,
                prOT: 0.0,
                dblTime: 0.0,
                comment: "Comment",
                workOrder: "WO",
            },
          ];

        let content = (
            <div>
                <Button size="small" color="primary" name="refreshbutton" variant="contained" onClick={this.onRefreshClicked.bind(this)}>
                  REFRESH
                </Button>
                &nbsp; 
                <Button size="small" color="primary" name="backbutton" variant="contained" onClick={this.onBackClicked.bind(this)}>
                  BACK
                </Button>

                <Grid rows={data} 
                      columns={[
                        {name: 'ejc', title: 'EJC'},
                        {name: 'p_fri', title: 'P_Fri'},
                        {name: 'sat', title: 'Sat'},
                        {name: 'sun', title: 'Sun'},
                        {name: 'mon', title: 'Mon'},
                        {name: 'tue', title: 'Tue'},
                        {name: 'wed', title: 'Wed'},
                        {name: 'thu', title: 'Thu'},
                        {name: 'fri', title: 'Fri'},
                        {name: 'rgHrs', title: 'RegHours'},
                        {name: 'stOT', title: 'St OT'},
                        {name: 'prOT', title: 'Pr OT'},
                        {name: 'dblTime', title: 'Dbl Time'},
                        {name: 'comment', title: 'Comment'},
                        {name: 'workOrder', title: 'workOrder'},
                        ]}>
                        <Table />
                        <TableHeaderRow />
                </Grid>

            </div>
        );

        return (
            <div>
                { content }
            </div>
        );
    }

    fetchTimesheetData() {

    }

    onRefreshClicked() {
        this.props.onSelectedTimesheetChanged(this.props.selectedTimesheet);
    }

    onBackClicked() {
        
    }
}