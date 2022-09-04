export const getUserId = (user) => {
  const property = `${process.env.AUTH0_AUDIENCE}/user_metadata.user_id`;
  return user[`${property}`];
};
