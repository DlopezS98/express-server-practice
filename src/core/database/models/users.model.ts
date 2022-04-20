export default interface IUsers {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  roles: Array<string>;
  password: string;
  created_at: Date;
  updated_at?: Date;
}