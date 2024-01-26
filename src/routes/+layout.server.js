import { error } from "@sveltejs/kit";
import { serializeNonPOJOs } from "$lib/utils";

export const load = async ({ locals }) => {
	
	
	const getUsersProjects = async () => {
		try {
			const record = serializeNonPOJOs(await locals.pb.collection('users').getOne(locals.user.id));
			return record.Token
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	}

	const getUsersTokens = async () => {
		try {
			const record = serializeNonPOJOs(await locals.pb.collection('users').getOne(locals.user.id));
			return record.Tokens
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	}
	

	if (locals.user) {
		return {
			user: locals.user,
			Tokens: await getUsersTokens(),
			Token: await getUsersProjects(),
		};
	}

	return {
		user: undefined
	};
};
