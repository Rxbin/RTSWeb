import * as React from "react";
import { TimesheetDisplayProps } from '../interfaces/props';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { DataTypeProvider } from '@devexpress/dx-react-grid';
import { Table as TableBase, } from '@devexpress/dx-react-grid';
import Button from '@material-ui/core/Button';
import { TimesheetRecord } from "../model/models";

interface CustomCellProps {
    cellProps: TableBase.DataCellProps & { className?: string; style?: React.CSSProperties; [x: string]: any };
    onEditClickedEvent: (record: TimesheetRecord) => void;
    onDeleteClickedEvent: (record: TimesheetRecord) => void;
}

const StatusFormatter = (data: DataTypeProvider.ValueFormatterProps) => {
    switch(data.value) {
        case 0: {
            return "CREATED";
        }
        case 1: {
            return "REJECTED";
        }
        case 2: {
            return "MGRREVIEW";
        }
        case 3: {
            return "CHKDGOOD";
        }
        case 4: {
            return "CHKDBAD";
        }
        default : {
            return "";
        }
    }
};

const StatusTypeProvider = (props: any) => (
    <DataTypeProvider formatterComponent={StatusFormatter} {...props} />
);

export class TimesheetDisplay extends React.Component<TimesheetDisplayProps, {}> {
    constructor(props: any, state: any) {
        super(props, state);
    }

    render() {

        const Cell = (props: TableBase.DataCellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }) => {
            const { column } = props;
            
            if (column.name === 'oid') {
                return <CustomCell cellProps={props} 
                                   onEditClickedEvent={this.onEditClicked.bind(this)} 
                                   onDeleteClickedEvent={this.onDeleteClicked.bind(this)} />;
            }
        
            return <Table.Cell {...props} />;
        };

        // This needs CSS help..
        // #CSS
        let content = (
            <div>
                <h1>
                    My Timesheets    
                </h1>
                &nbsp;
                <Button size="small" color="primary" name="createbutton" variant="contained" onClick={this.onCreateClicked.bind(this)}>
                  CREATE
                </Button>
                &nbsp; 
                <Button size="small" color="primary" name="refreshbutton" variant="contained" onClick={this.onRefreshClicked.bind(this)}>
                  REFRESH
                </Button>
                <Grid rows={this.props.timesheetRecords} 
                       columns = {[
                        { name: 'oid', title: 'ACTIONS'},
                        { name: 'ppDate', title: 'DATE' },
                        { name: 'empId', title: 'EMP ID' },
                        { name: 'status', title: 'STATUS' },
                        ]}>
                    <StatusTypeProvider for={['status']} />
                    <Table cellComponent={Cell} />
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

    onEditClicked(record: TimesheetRecord) {
        this.props.onSelectedTimesheetChanged(record);
    }

    onDeleteClicked(record: TimesheetRecord) {
        alert(record.oid);        
    }

    onCreateClicked() {
        alert("CREATE");
    }

    onRefreshClicked() {
        alert("REFRESH");
    }
}

class CustomCell extends React.Component<CustomCellProps, {}> {
    constructor(props: any, state: any) {
        super(props, state);
    }

    render() {
        const that = this.props;
        let record: TimesheetRecord = that.cellProps.row;
                 
        return (            
        <Table.Cell {...that.cellProps} >
            <div>
              <Button size="small" name="editbutton" onClick={that.onEditClickedEvent.bind(this, record)}>
                  EDIT
              </Button>
              <Button size="small" name="deletebutton" onClick={that.onDeleteClickedEvent.bind(this, record)}>
                  DELETE
              </Button>  
            </div>
          </Table.Cell>
        );
    }
}