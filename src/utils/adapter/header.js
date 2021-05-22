export const POST = 'PUBLIC_POST';
export const GET = 'PUBLIC_GET';
export const PRIVATE_GET = 'PRIVATE_GET';
export const PRIVATE_POST = 'PRIVATE_POST';

export const headers = (method, token) => {
  const apiToken = token;
  switch (method) {
    case 'PUBLIC_POST':
      return {headers: {'content-type': 'application/json'}};
    case 'PUBLIC_GET':
      return {headers: {'content-type': 'application/json'}};
    case 'PRIVATE_GET':
      return apiToken
        ? {
            headers: {
              authorization: `Bearer ${apiToken}`,
              'content-type': 'application/json',
            },
          }
        : {headers: {'content-type': 'application/json'}};
    case 'PRIVATE_POST':
      return apiToken
        ? {
            headers: {
              authorization: `Bearer ${apiToken}`,
              'content-type': 'application/json',
            },
          }
        : {headers: {'content-type': 'application/json'}};
    default:
      return {headers: {'content-type': 'application/json'}};
  }
};
