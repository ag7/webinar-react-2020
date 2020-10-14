import {create} from 'apisauce'

export default (() => {
  const api = create({baseURL: 'http://localhost:5000'});

  const makeNetFun =
      (restMethod) => {
        return async (url, params) => {
          const {ok, data} = await api[restMethod](url, params);
          return ok ? data : new Error(`Error while calling ${url}`);
        }
      }

  return {
    get: makeNetFun('get'), post: makeNetFun('post'),
        delete: makeNetFun('delete'),
  }
})()
