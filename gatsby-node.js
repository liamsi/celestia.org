exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;

	createRedirect({
		fromPath: `/deploy`,
		toPath: `/build#deploy`,
		isPermanent: true,
	});
};
