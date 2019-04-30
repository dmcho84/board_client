import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { getCookie } from 'lib/cookie';

const ajaxConfig = (method, url, body, option, error) => {
  const settings = {
    method,
    url: 'http://localhost:4000' + url,
    withCredentials: true,
    crossDomain: true,
    headers: {
      // 'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      ...option,
    },
    body,
  };
  return ajax(settings).pipe(map(data => data));
};

const privateOption = () => {
  return {
    'Content-Type': 'application/json',
    Authorization: `JWT ${getCookie('auth_token')}`,
  };
};

export const GET = (url, error) =>
  ajaxConfig('GET', url, null, privateOption(), error);
export const POST = (url, body) =>
  ajaxConfig('POST', url, body, privateOption());
export const PUT = (url, body) => ajaxConfig('PUT', url, body, privateOption());
export const PATCH = (url, body) =>
  ajaxConfig('PATCH', url, body, privateOption());
export const DELETE = (url, body) =>
  ajaxConfig('DELETE', url, body, privateOption());

export const pathMaster = basePath => {
  return (pathname, queryString = []) => {
    return `${basePath}${pathname ? pathname : ''}${
      queryString.length
        ? `?${queryString.map((query, i) => {
            // return { [query.key]: query.value }
            return `${i > 0 ? '&' : ''}${query.key}=${query.value}`;
          })}`
        : ''
    }`;
  };
};
