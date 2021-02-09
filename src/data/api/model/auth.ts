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

// Converts JSON strings to/from your types
export class Convert {
  public static toAuth(json: string): Auth {
    return JSON.parse(json);
  }

  public static authToJson(value: Auth): string {
    return JSON.stringify(value);
  }
}
