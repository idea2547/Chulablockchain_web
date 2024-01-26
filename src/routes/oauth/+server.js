import { redirect } from '@sveltejs/kit';
import PocketBase from "pocketbase"
import { serializeNonPOJOs } from "$lib/utils";

const adminClient = new PocketBase(import.meta.env.VITE_PB_URL);

export const GET = async ({locals,  url, cookies, request  }) => {

    console.log("OAUTH CALL")

    await adminClient.admins.authWithPassword(import.meta.env.VITE_AUTH_ADMIN_NAME, import.meta.env.VITE_AUTH_ADMIN_PASS, {
        // This will trigger auto refresh or auto reauthentication in case
        // the token has expired or is going to expire in the next 30 minutes.
        autoRefreshThreshold: 30 * 60
    })

    
    //console.log(url.searchParams);
    const redirectURL = `${url.origin}/oauth`;
    const expectedState = cookies.get('state');
    const expectedVerifier = cookies.get('verifier');

    //console.log('expected',expectedState)

    const state = await url.searchParams.get('state');
    const code = await url.searchParams.get('code');

    //console.log('returned state',state)
    //console.log('returned code',code)

    //as a side effect this will generate a new code verifier, hence why we need to pass the verifier back in through the cookie
    const authMethods = await locals.pb?.collection('users').listAuthMethods();

    
    if (!authMethods?.authProviders) {
        console.log('No Auth Providers');
        throw redirect(303, '/login');
    }
    const provider = authMethods.authProviders[0];
    if (!provider) {
        console.log('Provider Not Found');
        throw redirect(303, '/login');
    }

    if (expectedState !== state) {
        console.log('Returned State Does not Match Expected', expectedState, state);
        throw redirect(303, '/login');
    }
    
    locals.pb?.authStore.clear()

    /* try {
        const authData = await locals.pb.collection('users').authWithOAuth2(
            googleAuthProvider, code, verifier, redirectURL 
        );

        throw redirect(303, '/');

    } catch (err) {
        console.log(err)

        console.log(provider)
        


        await adminClient.collection('users').authWithOAuth2(
            provider.name, code, expectedVerifier, redirectURL 
        );

        adminClient.authStore.clear()
        console.log('isvalid = ', locals.pb.authStore.isValid, code, expectedVerifier, provider.name);
    } */


    try {
        console.log(provider)

        const resultList = await adminClient.collection('users').getList(1, 1, { sort: '-created' });
		console.log(serializeNonPOJOs(resultList?.items[0].UserNumber))
		const UserNumAdd = resultList?.items[0].UserNumber + 1;
		let UserNumber = UserNumAdd;
        


        /* await adminClient.collection('users').authWithOAuth2(
            provider.name, code, expectedVerifier, redirectURL 
        );
 */

        const authData = await locals.pb?.collection('users').authWithOAuth2(
            provider.name, code, expectedVerifier, redirectURL, {Token:10000, UserNumber: UserNumber}
        );

        /* adminClient.authStore.clear()
        console.log('isvalid = ', locals.pb.authStore.isValid, code, expectedVerifier, provider.name); */
        
        /* console.log('isvalid = ', locals.pb.authStore.isValid); */
        /* await locals.pb.collection('users').authWithOAuth2(provider.name, code, expectedVerifier, redirectURL); */
        /* .authWithOAuth2Code(provider.name, code, expectedVerifier, redirectURL,{username:'',name:'My Awesome User'}); */
    } catch (err) {
        console.log('Error logging in with OAuth2 user', err);
    }

    throw redirect(303, '/');
};