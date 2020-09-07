import { RequestHeaderResponseModel } from './request-header-response-model';

export class ErrorLogResponseModel {
    public date: Date;
    public statusCode: number;
    public schoolId: string;
    public userId: string;
    public exception: string;
    public innerException: string;
    public controllerName: string;
    public actionName: string;
    public requestUrl: string;
    public stackTrace: string;
    public requestPeyload: string
    public requestHeaders: Array<RequestHeaderResponseModel>;
}