import { request } from "umi";
import { stringify } from 'qs';

export async function getUserInfo() {
  return request('/api/isLogin');
}