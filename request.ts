import type {
  DeleteQuery,
  GetQuery,
  PostQuery,
  PutQuery,
  RequestClient,
} from "./types.ts";

export function createRequest(
  token: string,
  baseUrl: string | URL,
): RequestClient {
  const get = async (path: string, query?: GetQuery) => {
    const body = JSON.stringify(query);
    return await fetch(
      baseUrl + path,
      {
        body,
        method: "GET",
        headers: {
          "X-TYPETALK-TOKEN": token,
          "Content-Type": "application/json",
        },
      },
    );
  };
  const post = async (path: string, query?: PostQuery) => {
    const body = JSON.stringify(query);
    return await fetch(
      baseUrl + path,
      {
        body,
        method: "POST",
        headers: {
          "X-TYPETALK-TOKEN": token,
          "Content-Type": "application/json",
        },
      },
    );
  };
  const put = async (path: string, query?: PutQuery) => {
    const body = JSON.stringify(query);
    return await fetch(
      baseUrl + path,
      {
        body,
        method: "PUT",
        headers: {
          "X-TYPETALK-TOKEN": token,
          "Content-Type": "application/json",
        },
      },
    );
  };

  const del = async (path: string, query?: DeleteQuery) => {
    const body = JSON.stringify(query);
    return await fetch(
      baseUrl + path,
      {
        body,
        method: "DELETE",
        headers: {
          "X-TYPETALK-TOKEN": token,
          "Content-Type": "application/json",
        },
      },
    );
  };

  return { get, post, put, del };
}
