import { Exclude } from 'class-transformer';

/* eslint-disable prettier/prettier */
export interface User {
  username: string;
  password: string;
}

export class SerializedUser {
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
