import { Guid } from "guid-typescript";

export class ErrorLogListingResponseModel {
    public errorLogId: Guid;
    public statusCode: Number;
    public schoolId: String;
    public userId: String;
    public exception: String;
    public date: Date;
}