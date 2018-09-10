export enum TSStatus {
  CREATED,
  REJECTED,
  MGRREVIEW,
  CHKDGOOD,
  CHKDBAD
}

export interface TimesheetRecord {
  oid: string;
  ppDate: string;
  empId: string;
  status: TSStatus;
}

export interface TimesheetJobEntry {
  timesheetRecordId: string; // OID?
  ejc: string;
  p_fri: number;
  sat: number;
  sun: number;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  rgHrs: number; // Computed?
  stOT: number; // Computed?
  prOT: number; // Computed?
  dblTime: number;
  comment: string;
  workOrder: string;
}
