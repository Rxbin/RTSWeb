import * as React from "react";
import { TimesheetDisplayProps } from '../interfaces/props';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import Button from '@material-ui/core/Button';

export class TimesheetDisplay extends React.Component<TimesheetDisplayProps, {}> {
    constructor(props: any, state: any) {
        super(props, state);
    }

    render() {
        let content = ( <Grid rows={this.props.timesheetRecords} columns={[
            { name: 'oid', title: 'OID' },
            { name: 'ppDate', title: 'Date' }
          ]} >
                <Table />
                <TableHeaderRow />
        </Grid>
        );

        return (<div> {content} 
        <Button onClick={this.testOnClick.bind(this)} >
            Link
        </Button>
        </div>);
    }

    testOnClick() {
        // this.props.onSelectedTimesheetChanged()
    }
}