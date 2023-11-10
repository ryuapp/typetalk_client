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
  constructor(private token: string, private topicId: string) {
    const baseUrl = "https://typetalk.com/api/v";
    this.request = createRequest(this.token, baseUrl);
    this.token = token;
    this.topicId = topicId;
  }
  async getMessage(postId: number) {
    const path = `1/topics/${this.topicId}/posts/${postId}`;
    return await this.request.get(path);
  }
  async getMessageList(query?: GetMessageListQuery) {
    const path = `1/topics/${this.topicId}`;
    return await this.request.get(path, query);
  }
  async postMessage(query?: PostMessageQuery) {
    const path = `1/topics/${this.topicId}`;
    return await this.request.post(path, query);
  }
  async editMessage(postId: number, query?: EditMessageQuery) {
    const path = `1/topics/${this.topicId}/posts/${postId}`;
    return await this.request.put(path, query);
  }
  async deleteMessage(postId: number) {
    const path = `1/topics/${this.topicId}/posts/${postId}`;
    return await this.request.del(path);
  }
  async likeMessage(postId: number) {
    const path = `1/topics/${this.topicId}/posts/${postId}/like`;
    return await this.request.post(path);
  }
  async unlikeMessage(postId: number) {
    const path = `1/topics/${this.topicId}/posts/${postId}/like`;
    return await this.request.del(path);
  }
  async addMessageToTag(talkId: number, query: MessageToTagQuery) {
    const path = `1/topics/${this.topicId}/talks/${talkId}/posts`;
    return await this.request.post(path, query);
  }
  async removeMessageFromTag(talkId: number, query: MessageToTagQuery) {
    const path = `1/topics/${this.topicId}/talks/${talkId}/posts`;
    return await this.request.del(path, query);
  }
  async createTag(query: CreateTagQuery) {
    const path = `1/topics/${this.topicId}/talks`;
    return await this.request.post(path, query);
  }
  async updateTag(talkId: number, query: UpdateTagQuery) {
    const path = `1/topics/${this.topicId}/talks/${talkId}`;
    return await this.request.put(path, query);
  }
  async deleteTag(talkId: number) {
    const path = `1/topics/${this.topicId}/talks/${talkId}`;
    return await this.request.del(path);
  }
  async downloadFile(
    postId: number,
    attachmentId: string,
    query?: DownloadFileQuery,
  ) {
    const path =
      `2/topics/${this.topicId}/posts/${postId}/attachments/${attachmentId}`;
    return await this.request.get(path, query);
  }
  async uploadFile(query: UploadFileQuery) {
    const path = `1/topics/${this.topicId}/attachments`;
    return await this.request.post(path, query);
  }
  async getMembers() {
    const path = `1/topics/${this.topicId}/members/status`;
    return await this.request.get(path);
  }
}
