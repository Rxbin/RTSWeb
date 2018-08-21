import * as React from "react";
import { TimesheetDisplayProps } from '../interfaces/props';

export class EditTimesheetDisplay extends React.Component<TimesheetDisplayProps, {}> {
    constructor(props: any, state: any) {
        super(props, state);
    }

    render() {

        let content = (
            <div>
                EditTimesheetDisplay
            </div>
        );

        return (
            <div>
                { content }
            </div>
        );
    }
}