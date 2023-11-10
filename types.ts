export interface Attachment {
  fileUrl: string;
  fileName?: string;
}
export interface UploadFileQuery {
  file: BinaryType;
}
export interface DownloadFileQuery {
  type?: string;
}
export interface GetMessageListQuery {
  count?: number;
  from?: number;
  direction?: "backward" | "forward";
}
export interface PostMessageQuery {
  message: string;
  replyTo?: number;
  showLinkMeta?: boolean;
  ignoreHashTag?: boolean;
  filekeys?: string[];
  talkIds?: number[];
  attachments?: Attachment[];
}
export interface EditMessageQuery {
  message: string;
  showLinkMeta?: boolean;
}
export interface SearchMessageQuery {
  q: string;
  spaceKey: string;
  topicIds?: number;
  hasAttachments?: boolean;
  accountIds?: number;
  start?: number;
  from?: Date;
  to?: Date;
  botExclusion?: boolean;
}
export interface MessageToTagQuery {
  postIds: number[];
}
export interface CreateTagQuery {
  talkName: string;
  postIds: number[];
}
export interface UpdateTagQuery {
  talkName: string;
}
export type GetQuery = DownloadFileQuery | GetMessageListQuery;
export type PostQuery =
  | UploadFileQuery
  | PostMessageQuery
  | MessageToTagQuery
  | CreateTagQuery;
export type PutQuery = EditMessageQuery | UpdateTagQuery;
export type DeleteQuery = EditMessageQuery | MessageToTagQuery;
export interface RequestClient {
  get: (path: string, query?: GetQuery) => Promise<Response>;
  post: (path: string, query?: PostQuery) => Promise<Response>;
  put: (path: string, query?: PutQuery) => Promise<Response>;
  del: (path: string, query?: DeleteQuery) => Promise<Response>;
}
