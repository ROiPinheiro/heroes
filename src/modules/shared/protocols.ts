export interface HttpRequest<Body = any, Params = any> {
  body?: Body;
  params?: Params;
}

export interface HttpResponse {
  statusCode: number;
  payload: any;
}

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}

export interface Validator {
  validate(httpRequest: HttpRequest): Promise<any>;
}
