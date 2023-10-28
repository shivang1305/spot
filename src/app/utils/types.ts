export interface User {
  id: string;
  avatar_url: string;
  login: string;
}

interface UserInfo {
  login: string;
}

export interface Repo {
  id: string;
  html_url: string;
  name: string;
  description: string;
  owner: UserInfo;
}
