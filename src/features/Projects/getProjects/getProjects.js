import ghAPIGet from "../../../data/ghAPIGet";

export const getProjects = () => {
	return ghAPIGet(
		"https://api.github.com/users/matthewnobes/repos?per_page=100",
	);
};
