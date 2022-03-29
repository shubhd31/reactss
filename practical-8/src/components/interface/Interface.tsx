import { ReactNode } from "react";

export interface userAction {
  title: ReactNode;
  name: string;
  email: string;
  number: string;
  password: string;
  confirm_password: string;
  image: string;
}
