import { GraphQLClient } from "graphql-request";

export function request({ query, variables, preview }) {
	const endpoint = preview
		? `https://graphql.datocms.com/preview`
		: `https://graphql.datocms.com/`;
	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
		},
	});
	return client.request(query, variables);
}

export async function getHomeData() {
	const { home } = await request({
		query: `query homeData {
		home {
			pageTitle
		}
	  }`,
	});

	return home;
}

export async function getAllProjects() {
	const { allProjects } = await request({
		query: `query allProjects {
		allProjects {
		  name
		  id
		  slug
		  categories {
			  id
			image {
			  width
			  height
			  url
			  blurUpThumb
			  alt
			}
		  }
		  featuredImage {
			width
			height
			url
			blurUpThumb
			alt
		  }
		  excerpt {
			value
		  }
		}
	  }
	  `,
	});

	return allProjects;
}
