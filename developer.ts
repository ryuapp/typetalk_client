import {
  CreateTagQuery,
  DownloadFileQuery,
  EditMessageQuery,
  GetMessageListQuery,
  MessageToTagQuery,
  PostMessageQuery,
  RequestClient,
  UpdateTagQuery,
  UploadFileQuery,
} from "./types.ts";
import { createRequest } from "./request.ts";

export class TypetalkClient {
  request: RequestClient;
  constructor(private token: string) {
    const baseUrl = "https://typetalk.com/api/v";
    this.request = createRequest(this.token, baseUrl);
    this.token = token;
  }
  async getMessage(topicId: number, postId: number) {
    const path = `1/topics/${topicId}/posts/${postId}`;
    return await this.request.get(path);
  }
  async getMessageList(topicId: number, query?: GetMessageListQuery) {
    const path = `1/topics/${topicId}`;
    return await this.request.get(path, query);
  }
  async postMessage(topicId: number, query?: PostMessageQuery) {
    const path = `1/topics/${topicId}`;
    return await this.request.post(path, query);
  }
  async editMessage(topicId: number, postId: number, query?: EditMessageQuery) {
    const path = `1/topics/${topicId}/posts/${postId}`;
    return await this.request.put(path, query);
  }
  async deleteMessage(topicId: number, postId: number) {
    const path = `1/topics/${topicId}/posts/${postId}`;
    return await this.request.del(path);
  }
  async likeMessage(topicId: number, postId: number) {
    const path = `1/topics/${topicId}/posts/${postId}/like`;
    return await this.request.post(path);
  }
  async unlikeMessage(topicId: number, postId: number) {
    const path = `1/topics/${topicId}/posts/${postId}/like`;
    return await this.request.del(path);
  }
  async addMessageToTag(
    topicId: number,
    talkId: number,
    query: MessageToTagQuery,
  ) {
    const path = `1/topics/${topicId}/talks/${talkId}/posts`;
    return await this.request.post(path, query);
  }
  async removeMessageFromTag(
    topicId: number,
    talkId: number,
    query: MessageToTagQuery,
  ) {
    const path = `1/topics/${topicId}/talks/${talkId}/posts`;
    return await this.request.del(path, query);
  }
  async createTag(topicId: number, query: CreateTagQuery) {
    const path = `1/topics/${topicId}/talks`;
    return await this.request.post(path, query);
  }
  async updateTag(topicId: number, talkId: number, query: UpdateTagQuery) {
    const path = `1/topics/${topicId}/talks/${talkId}`;
    return await this.request.put(path, query);
  }
  async deleteTag(topicId: number, talkId: number) {
    const path = `1/topics/${topicId}/talks/${talkId}`;
    return await this.request.del(path);
  }
  async downloadFile(
    topicId: number,
    postId: number,
    attachmentId: string,
    query?: DownloadFileQuery,
  ) {
    const path =
      `2/topics/${topicId}/posts/${postId}/attachments/${attachmentId}`;
    return await this.request.get(path, query);
  }
  async uploadFile(topicId: number, query: UploadFileQuery) {
    const path = `1/topics/${topicId}/attachments`;
    return await this.request.post(path, query);
  }
  async getMembers(topicId: number) {
    const path = `1/topics/${topicId}/members/status`;
    return await this.request.get(path);
  }
}
