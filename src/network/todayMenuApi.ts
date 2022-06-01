import {todayMenuAxios, request, AxiosRequestParams} from './axiosUtils';
// NOTE: curlirize 출력 시 사용
// import curlirize from 'axios-curlirize';

export default async ({
  method,
  url,
  queryParams,
  requestBody,
  headers,
}: AxiosRequestParams) => {
  const instance = todayMenuAxios.getInstance();
  //   curlirize(instance);
  return await request(
    instance,
    method,
    url,
    queryParams,
    requestBody,
    headers,
  );
};
