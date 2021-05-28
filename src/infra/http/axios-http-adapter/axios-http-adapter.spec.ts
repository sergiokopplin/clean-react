import axios from 'axios';

import { mockPostRequest } from 'data/test';
import { mockAxios } from 'infra/test';

import { AxiosHttpAdapter } from './axios-http-adapter';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpAdapter;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpAdapter();
  const mockedAxios = mockAxios();

  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpAdapter', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();

    await sut.post(request);

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut();
    const promise = sut.post(mockPostRequest());

    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
