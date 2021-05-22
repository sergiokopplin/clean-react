export type HttpPostParams = {
  url: string;
  body?: {
    [key: string]: string;
  };
};

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<void>;
}
