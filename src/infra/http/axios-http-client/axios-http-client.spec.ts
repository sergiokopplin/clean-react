import axios from 'axios';
import faker from 'faker';

import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): { sut: AxiosHttpClient } => {
  const sut = new AxiosHttpClient();

  return {
    sut,
  };
};

describe('Axios Http Client', () => {
  test('Should call axios with correct URL and verb', async () => {
    const url = faker.internet.url();
    const { sut } = makeSut();
    await sut.post({ url });
    expect(mockedAxios.post).toHaveBeenCalledWith(url);
  });
});
