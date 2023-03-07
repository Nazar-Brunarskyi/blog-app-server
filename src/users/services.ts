import { User } from "../database/models/user";

export const syncUser = async (name: string, uid: string) => {
  try {
    const user = await User.findOrCreate({
      where: {
        googleId: uid
      },
      defaults: {
        name,
      }
    });

    if (user) {
      console.log(1);
      
      throw new Error('5555');
    }

    // return user;
  } catch (err) {
    throw new Error('unable to connect to database');
  };
}