import { Guid } from "guid-typescript";

export class ErrorLogListingResponseModel {
    public errorLogId: String;
    public statusCode: number;
    public schoolId: string;
    public userId: string;
    public exception: string;
    public date: Date;
}
