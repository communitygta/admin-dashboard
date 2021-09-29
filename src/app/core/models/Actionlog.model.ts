/* eslint-disable @typescript-eslint/naming-convention */
export interface Actionlog {
  id: string;
  action: string;
  created_at: Date;
  note: string;
  user: {
    username: string;
  };
}
