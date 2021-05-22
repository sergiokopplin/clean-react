import { HttpPostClient, HttpPostParams } from "data/protocols";

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: {
    [key: string]: string;
  };

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve();
  }
}
