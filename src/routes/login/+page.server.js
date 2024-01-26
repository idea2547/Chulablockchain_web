import { error, redirect } from "@sveltejs/kit";
import { validateData } from "$lib/utils";
import { loginUserSchema } from "$lib/schemas";


export const load = ({ locals, url }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
	
};

export const actions = {
	login: async ({ request, locals }) => {
		const { formData, errors } = await validateData(
			await request.formData(),
			loginUserSchema,
		);

		if (errors) {
			return invalid(400, {
				data: formData,
				errors: errors.fieldErrors,
			});
		}

		try {
			await locals.pb
				.collection("users")
				.authWithPassword(formData.email, formData.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true,
				};
			}
		} catch (err) {
			console.log("Error: ", err?.data?.message);
			if (err?.data?.message){
				console.log("Wrong")
				return {
					InvalidCred: true,
				};      
			} 
		}

		throw redirect(307, "http://speecify.in.th/createsound");
	},
	loginGoogle: async ({ request, locals }) => {

		//http://localhost:5173/oauth2-redirect
		console.log("google login")
		try {
			locals.pb.authStore.clear()
      		const authMethods = await locals.pb.collection('users').listAuthMethods()
			const authData = await locals.pb.collection('users').authWithOAuth2({ provider: 'google' });
			console.log(locals.pb.authStore.isValid);
			console.log(authData)
			console.log(locals.pb.authStore.exportToCookie({ httpOnly: false }))
		  } catch (e) {
			console.log(e)
			console.log("error")
		  }

		throw redirect(303, "/createsoundplus");
	},

	OAuth: async({cookies,url,locals})=>{

        const authMethods = await locals.pb?.collection('users').listAuthMethods();
        if (!authMethods) {
            return {
                authProviderRedirect: '',
                authProviderState: ''
            };
        }
        const redirectURL = `${url.origin}/oauth`;
        const googleAuthProvider = authMethods.authProviders[0];
        const authProviderRedirect = `${googleAuthProvider.authUrl}${redirectURL}`;
        const state = googleAuthProvider.state;
        const verifier = googleAuthProvider.codeVerifier

        cookies.set('state',state);
        cookies.set('verifier',verifier);

		console.log("oauth ready")

        throw redirect(302,authProviderRedirect)
    

    },
	

};
