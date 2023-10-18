export interface User {
  email: string,
  username: string,
  image?: string,
}

export interface CreateUserInterface extends User {
  password: string;
}
