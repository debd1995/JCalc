import { IBreakdownRecord } from "./breakdown-record";

export interface IBreakdown {
    rows: IBreakdownRecord[],
    total: string
}