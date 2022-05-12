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

export async function getHomeData(context) {
	const { home } = await request({
		query: `query homeData($locale: SiteLocale = ${context.locale}) {
		home(locale: $locale) {
			pageTitle
			_seoMetaTags {
				attributes
				content
				tag
			  }
		}
	  }`,
	});

	return home;
}

export async function getAllProjects(context) {
	const { allProjects } = await request({
		query: `query allProjects($locale: SiteLocale = ${context.locale}) {
		allProjects(locale: $locale) {
		  name
		  id
		  slug
		  link
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
