﻿export interface User {
  id: string;
  username: string;
  password: string;
  isDeleted: boolean;
}

export interface Alluser {
  id?:string;
  username: string;
  password: string;
  isDeleted?: boolean;
}

export interface update {
  id?:string;
  username: string;
  password: string;
  isDeleted: boolean;
}

