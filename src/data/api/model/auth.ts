export interface Auth {
  user_uuid: string;
  token: string;
  refresh_token: RefreshToken;
}

export interface RefreshToken {
  value: string;
  created_at: Date;
  expired: number;
}
