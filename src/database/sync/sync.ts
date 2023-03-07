import { dbInit } from "../DBInit";
import { User } from "../models/user";

const sync = async () => {
  dbInit();

  User.sync({force: true})
};

sync();