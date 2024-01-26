import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const POST = async ({ locals, request, cookies }) => {
  const { token } = request.params; // Retrieve the token from the request parameters
  
  const url = `${env.PB_URL_MAIN}_/#/auth/confirm-verification/${token}`;

  // Make the POST request using the constructed URL
  // You can use a library like 'axios' or the built-in 'fetch' API to make the request
  // Replace the following code with your actual POST request implementation
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Handle the response from the server
  // Replace the following code with your actual response handling logic
  if (response.ok) {
    return json({ success: true });
  } else {
    return error(response.statusText);
  }
};