import axios from 'axios';

import { HttpPostParams } from 'data/protocols';

export class AxiosHttpClient {
  async post(params: HttpPostParams<any>): Promise<void> {
    await axios.post(params.url);
  }
}
