import { HttpResponse } from 'data/protocols';

export type HttpPostParams = {
  url: string;
  body?: {
    [key: string]: string;
  };
};

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>;
}
