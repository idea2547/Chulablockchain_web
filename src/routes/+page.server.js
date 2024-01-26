import { serializeNonPOJOs } from "$lib/utils";
import { error, redirect } from '@sveltejs/kit';
import { registerUserSchema } from '$lib/schemas';
import { generateUsername, validateData, generatePassword } from '$lib/utils';



export const load = ({ locals }) => {
	/* const getProjects = async () => {
		try {
			const projects = serializeNonPOJOs(
				await locals.pb.collection("projects").getFullList(undefined),
			);
			return projects;
		} catch (err) {
			console.log("Error:", err);
			throw error(err.status, err.message);
		}
	};

	return {
		projects: getProjects(),
	}; */
};



export const actions = {
	registerBeta: async ({ locals, request }) => {
		const { formData, errors } = await validateData(await request.formData(), registerUserSchema);

		console.log(formData)

/* 		if (errors) {
			return invalid(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		} */

		const resultList = await locals.pb.collection('users').getList(1, 1, { sort: '-created' });
		console.log(serializeNonPOJOs(resultList?.items[0].UserNumber))
		const UserNumAdd = resultList?.items[0].UserNumber + 1;

		let username = `Betatestuser_${UserNumAdd}` //generateUsername('Beta test user').split(' ').join('').toLowerCase();
		let UserNumber = UserNumAdd;
		let password = generatePassword();
		let passwordConfirm = password;
		console.log(password)
		console.log(username)
		const Token = 10000;
		
		
		try {
			/* const checkNameExist = await locals.pb.collection('users').getFullList(undefined, {
				filter: `user = "${username}"`,
			})
			console.log(checkNameExist)
			if (checkNameExist.length > 0) {
				console.log("user exist")
				return {
					userExist: true,
				};
			} else {
				console.log("success")
				await locals.pb.collection('users').create({ username, ...formData, Token});
				await locals.pb.collection('users').requestVerification(formData.email);
			} */

			console.log("success")
			const formDatas = new FormData();
            // listen to file input changes and add the selected files to the form data
            formDatas.append('Password', password);
			formDatas.append('email', formData.email);
			
			const user = await locals.pb.collection('users').create({ username, password, passwordConfirm, UserNumber, ...formData, Token});
			formDatas.append('user', user.id);
			await locals.pb.collection('users').requestVerification(formData.email);
			await locals.pb.collection('userPass').create(formDatas);
		} catch (err) {
			console.log('Error: ', err);
			/* throw error(500, 'Something went wrong'); */
			if (err.data?.data?.username?.code){
				console.log("user already exist")
				return {
					userNameExist: true,
				};      
			} else if (err.data?.data?.email?.code){
				console.log("email already exist")
				return {
					userEmailExist: true,
				};  
			} else if (err.data?.data?.password?.code){
				console.log("password problem")
				return {
					userPasswordPass: true,
				};  
			}
		}
		

		throw redirect(303, 'https://docs.google.com/forms/d/e/1FAIpQLSfIBYXaexab-A3btFaU3yH6agom1TEtOz0EexzKFwRGdSRISQ/viewform?usp=sf_link');
	}
};

