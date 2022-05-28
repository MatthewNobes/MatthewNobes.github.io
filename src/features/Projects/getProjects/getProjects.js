import ghAPIGet from "../../../data/ghAPI";

export const getProjects = () => {
  return ghAPIGet(`https://api.github.com/users/matthewnobes/repos`);
};
