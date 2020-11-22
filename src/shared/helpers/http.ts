import { HttpResponse } from "../protocols";

export const ok = (payload?: any): HttpResponse => ({
  statusCode: 200,
  payload,
});

export const badRequest = (error?: any): HttpResponse => ({
  statusCode: 400,
  payload: {
    error,
  },
});

export const serverError = (error?: any): HttpResponse => ({
  statusCode: 500,
  payload: {
    error,
  },
});
