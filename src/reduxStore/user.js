const USER_LOGIN = "USER_LOGIN";

export const userLogin = (username, password) => ({
  type: USER_LOGIN,
  payload: { username, password },
});

const loginReducer = (
  user = {
    avatarUrl: "https://data.whicdn.com/images/324294713/original.png",
    username: "glolgun",
    password: "password",
    socials: {
      twitter: "https://twitter.com/glolgunn",
      instagram: "https://www.instagram.com/glolgun",
      github: "https://github.com/yurdagulOlgun",
    },
    joinDate: "February 2022",
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload.username === user.username &&
        action.payload.password === user.password
        ? { ...user, login: true }
        : { ...user, login: false };
    default:
      return user;
  }
};

export default loginReducer;
