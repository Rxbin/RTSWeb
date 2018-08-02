export enum TSStatus { CREATED, REJECTED, MGRREVIEW, CHKDGOOD, CHKDBAD }
  
export interface TimesheetRecord {
    oid: string;
    ppDate: string;
    empId: string;
    status: TSStatus;
}