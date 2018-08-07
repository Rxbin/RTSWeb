import * as React from "react";
import { TimesheetDisplayProps } from '../interfaces/props';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { DataTypeProvider, Column } from '@devexpress/dx-react-grid';
import { Table as TableBase, } from '@devexpress/dx-react-grid';

 interface ExtraCellProps { 
     className?: string; 
     style?: React.CSSProperties; 
     [x: string]: any;
 }

interface CellDisplayProps {
     cellProps: TableBase.DataCellProps;    
    // value: any;
    // row: any;
    // column: Column;
     cellStyle: ExtraCellProps;
    // className?: string; 
    // style?: React.CSSProperties; 
    // [x: string]: any;
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

const HighlightedCell = (value: any, style: any) => (
    <Table.Cell {...style} >
      <span>
          Edit | Delete
      </span>
    </Table.Cell>
  );

// const cell = (props: CellDisplayProps) => {
//     const { column } = props.cellProps;
//     if (column.name === 'oid') {
//         return <HighlightedCell value={props.cellProps.value} style = {props.cellStyle}  />;
//     }
// 
//     return <Table.Cell {...props.cellProps} />;
// };

const Cell = (props: TableBase.DataCellProps & { className?: string; style?: React.CSSProperties; [x: string]: any }) => {
    const { column } = props;

    if (column.name === 'oid') {
        return <HighlightedCell {...props} />;
    }

    return <Table.Cell {...props} />;
};

export class TimesheetDisplay extends React.Component<TimesheetDisplayProps, {}> {
    constructor(props: any, state: any) {
        super(props, state);
    }

    render() {
        let content = ( 
            <Grid rows={this.props.timesheetRecords} 
                   columns = {[
                    { name: 'oid', title: 'ACTIONS'},
                    { name: 'ppDate', title: 'Date' },
                    { name: 'empId', title: 'Employee ID' },
                    { name: 'status', title: 'Status' },
                    ]}>
                <StatusTypeProvider for={['status']} />
                <Table cellComponent={Cell}/>
                <TableHeaderRow />
            </Grid>
        );

        return (
            <div> 
                {content}
            </div>
        );
    }
}