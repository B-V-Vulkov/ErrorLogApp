import { RequestHeaderResponseModel } from './request-header-response-model';

export class ErrorLogResponseModel {
    public date: Date;
    public statusCode: Number;
    public schoolId: String;
    public userId: String;
    public exception: String;
    public controllerName: String;
    public actionName: String;
    public requestUrl: String;
    public innerException: String;
    public stackTrace: String;
    public requestPeyload: String
    public requestHeaders: Array<RequestHeaderResponseModel> = new Array<RequestHeaderResponseModel>();
}