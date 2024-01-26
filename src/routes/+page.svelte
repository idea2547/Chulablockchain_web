<script lang="ts">
	import AudioPlayer, { stopAll } from '$lib/components/Audioplayer.svelte';
	import { page } from '$app/stores'
	import { fade, blur } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import ProductCard from "$lib/productCard.svelte";
	import { Input } from '$lib/components';
	import {onMount,onDestroy} from 'svelte';

	export let form;
	export let data;

	$: console.log($page.url)

	const products : Product[] = [
		{
			id: "price_1NHMykIkcMoCTGo1Vt13jWdq",
			name: "test",
			price: 10
		},
		{
			id: "price_1McfbuGEQ8u28rQ5mEO9kZeB",
			name: "Sunglasses",
			price: 10
		},
		{
			id: "price_1McfcaGEQ8u28rQ56pMnyDz1",
			name: "Water Bottle",
			price: 15
		}
	]


	let audioTracks = [
	  'https://file.speecify.in.th/nqb4jv8y4duwyz6/8g8c8wgjnlrxkkf/audio_7mmxZiKvpg.wav',
	  'https://file.speecify.in.th/nqb4jv8y4duwyz6/7cenv1hzcr2nk93/audio_yKU8ikXIqd.wav',
	  'https://file.speecify.in.th/nqb4jv8y4duwyz6/agbrogh7295fqcr/audio_D0FeaExk18.wav',
	  'https://file.speecify.in.th/nqb4jv8y4duwyz6/7hhf33p9h1t9p7o/audio_1xCFdkfCEM.wav'
	]


	async function handleClick() {

	try {
		const response = await fetch('api/CheckSlip', {
		body: JSON.stringify("test"),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},	
		});

		if (response.ok) {
			const src = await response.json();
			console.log(src)
			result_audio = src;
			return src;
		} else {
			const { error } = await response.json();
			console.error('Error:', error);
			throw new Error(error);
		}
		} catch (error) {
		console.error('Error:', error);
		throw error;
		}
	}

	/* async function checkout() {
		await fetch("api/stripeCheckout", { // http://localhost:5173/api/stripeCheckout
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(
				{ items: get(cartItems) }
			)
		}).then((data) => {
			return data.json()
		}).then((data) => {
			window.location.replace(data.url);
		});
	} */

</script>

<!-- <div class="overscroll-auto ...">
	<div class="container h-full mx-auto flex-grow justify-center items-center">
		<div class="space-y-5 p-2">
			<h1 class="h1">
				<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Speecify</span>
			</h1>
			<h1 class="h1"><span class="gradient-heading">มาแปลงข้อความให้เป็นเสียงตัวละครต่างๆแบบในการ์ตูน เกมส์ ต่างๆ แบบสมจริงกัน!</span></h1>
			
			<p class="!text-xl">Text to speech ของเรารองรับภาษาไทย</p>	
			<button class="btn variant-filled-secondary"><a href="/createsound"><strong>คลิกปุ่มนี้เพื่อสร้างเสียงกัน!</strong></a></button>	
		</div>	
		<div class="space-y-20 p-2 relative">
			<p class="!text-xl absolute bottom-20 ">ฟังเสียงตัวอย่าง (Hutao)</p>
			{#each audioTracks as src}
				<AudioPlayer {src} />
			{/each}
			
		</div>
		
	</div>
</div>

 -->




<!-- <div class="container h-full mx-auto flex justify-center items-center">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
			<h1>SvelteKit 1.0 Store</h1>
		</div>
		{#each products as product}
			<ProductCard product={product}/>
		{/each}
		<div class="col-span-3">
			<button class="btn variant-filled-primary" on:click={() => checkout()}>Checkout with Stripe API</button>
		</div>
	</div>
</div>


 -->
 <style lang="postcss">
	.anim-float-avatar {
		animation: float-up 13s ease-in-out infinite;
	}
	.anim-float-progress {
		animation: float-down 15s ease-in-out infinite;
	}
	.anim-float-search {
		animation: float-up 14s ease-in-out infinite;
		animation-delay: 3s;
	}
	.anim-float-radio {
		animation: float-down 17s ease-in-out infinite;
	}
	.anim-float-card {
		animation: float-up 12s ease-in-out infinite;
	}
	.anim-float-light-switch {
		animation: float-down 18s ease-in-out infinite;
		animation-delay: 2s;
	}
	.anim-float-button {
		animation: float-up 15s ease-in-out infinite;
	}
	.anim-float-toggle {
		animation: float-down 13s ease-in-out infinite;
		animation-delay: 5s;
	}
	.anim-float-badge {
		animation: float-up 15s ease-in-out infinite;
	}
	/* prettier-ignore */
	@keyframes float-up {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
		100% { transform: translateY(0px); }
	}
	/* prettier-ignore */
	@keyframes float-down {
		0% { transform: translateY(0px); }
		50% { transform: translateY(20px); }
		100% { transform: translateY(0px); }
	}
</style>



<section id="home" class="pt-32 sm:pt-40 md:pt-28">
	<div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
		{#key $page.url}
		<div out:blur={{ duration: 400 }} in:blur={{ delay: 400, duration: 400 }} class="relative">
			<h1 class="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-left lg:text-7xl">
				CU Blockchain
				<span class="relative">
					<svg class="absolute inset-x-0 -bottom-1 w-full opacity-50" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 260 15.6">
						<style>
							.st0 {
								@apply fill-secondaryLight;
							}
						</style>
						<path class="st0" d="M206.8 7.3l-.1.3c.1-.2.2-.3.1-.3zM234.7 10h-.1c-.2.4-.1.3.1 0zM54.8 4.2l-.6-.4c.2.4.4.5.6.4zM17.1 5.1zM34.5 9.6l.1.3c0-.2 0-.3-.1-.3zM22.4 10.8c-.3-.1-.7-.1-1-.1.2.1.7.1 1 .1zM17.5 5c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zM52.7 9.8l.5.9c-.1-.3-.3-.6-.5-.9zM19.5 11.6c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zM120.9 11.4c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zM80.9 10.4h-.1s.1.1.2.1l-.1-.1zM92.6 10.4l-.2.2c.2-.1.2-.1.2-.2zM72.1 11.3c-.1.1-.3.2-.4.3l.4-.3z" />
						<path
							class="st0"
							d="M260 6c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4-.9.2-2.2.1-3.6 0s-2.9-.2-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1-1.6-.1-2.6.2-3.9.7-.3-.2-.7-.3-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5c-.7.5-1.3 1-2.5.9-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9-1.4.9-2.8.8-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3-1 .3-2.3.1-3.1-.2-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8C.9 8.3 0 9.4.5 10c-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4.1.5.1.8-.4 1.2 2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5-.2-.3-.1-.6.2-.8.4-.1.8.1 1.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6-.1.1-.3.3-.5.3 1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2L32.4 10c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2 1-1 2.2-1.9 4.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3.1-.4.5-1.4 1.7-1.3.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2c.4-.3 1.7-.8 2.6-1.2 2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9.5-.1.9-.3 1.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8.6 0 1.4-.2 2 0-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6 1.3-.6 4.1-1.1 5.6-.7l-.5.4c1.7.1 3-.5 4.3-.9 1.3-.4 2.6-.8 4.5-.4.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2 2 .4 3.4.1 4.8-.1 1.4-.3 2.8-.6 4.9-.2 2-.8 4.6-1.2 5.9-1.9 0 .9 0 1.7-.8 2.4 1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z"
						/>
						<path class="st0" d="M58.1 11.1c-1 0-1.9 0-2.3.2.2.2 2.3.6 2.3-.2zM208.2 13.3c-.1 0-.3.1-.4.1.1 0 .3 0 .4-.1zM216.3 12.9c-.1-.1-.2-.2-.4-.3 0 .3.1.5.4.3zM132.6 11.5zM178.5 13.7c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zM163 12.6c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zM130.2 12c.7-.4 1.6-.3 2.4-.5-.7.2-1.9-.3-2.4.5zM226.1 11.4l-.7.6.8-.4zM218.6 12c-.3-.1-1.7.3-1.3.6.4-.3.9-.5 1.3-.6zM189.6 11.4l-.3.6.7-.5z" />
					</svg>
					
<!-- 					<span class="relative bg-gradient-to-r from-primary to-secondaryLight bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight md:px-2">Blockchain</span> -->
				</span>
			
			</h1>				
			<br />
			<p class="text-center text-3xl font-bold text-blue-900 dark:text-white sm:text-3xl lg:text-left lg:text-3xl">
				ยินดีต้อนรับ! พวกเราคือชมรมจุฬา Blockchain
			</p>

			<div class="relative items-center gap-12 lg:flex">
				<div class="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left space-y-5">
					<p class="mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">ยกระดับคอนเทนต์ของคุณด้วยตัวช่วยแปลงข้อความเป็นเสียงพูดแบบสมจริง ไม่ว่าคุณจะเป็นคอนเทนต์ครีเอเตอร์ อยากมีตัวช่วยพากย์ตัวการ์ตูน นักพัฒนาวิดีโอเกม ครูที่อยากสร้างสื่อการสอนให้น่าสนใจ หรือเป็นอะไรก็ตาม Speecify ทำให้โอกาสในการออกแบบสร้างสรรค์เสียงให้น่าสนใจนั้นไม่มีที่สิ้นสุด</p>

					<p class="flex justify-center items-center mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">ใส่อีเมลเพื่อติดตามข่าวสาร</p>
					<form action="/register" class="mt-12">
						<div class="relative flex items-center rounded-full border border-primary/20 p-1 px-2 shadow-md dark:border-white/10 dark:bg-dark md:p-2 lg:pr-3">
							<div class="py-3 pl-4 lg:pl-5">
								<svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400" viewBox="0 0 20 20" fill="currentColor">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
							</div>
								<Input type="email" aria-label="email" id="email" label="email" noLabel={true} autocomplete="email" value={form?.data?.email} errors={form?.errors?.email} placeholder="ใส่อีเมล/ Email" class="w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none dark:text-white dark:placeholder-white" />
								{#if form?.userEmailExist}
									<div class="alert alert-error shadow-lg w-full max-w-lg">
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="stroke-current flex-shrink-0 h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												><path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
												/></svg
											>
											<span>อีเมลนี้ถูกใช้ไปแล้ว</span>
										</div>
									</div>
								{/if}	
							<div class="md:pr-1.5 lg:pr-0">
								<button type="submit" title="Start buying" class="relative ml-auto h-11 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-4">
									<span class="relative hidden w-max font-semibold text-white  md:block">ลงทะเบียน</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden">
										<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
									</svg>
								</button>
							</div>
						</div>
					</form>
					<div class="flex justify-center items-center">
						<button class="flex flex-col space-y-2 sm:flex-row md:w-max lg:space-y-0">
							<a href="http://speecify.in.th/createsoundplus" class="relative flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-125">
								<span class="relative text-sm font-semibold text-white text-center btn variant-filled-primary">สร้างเสียง</span>
							</a>
						</button>
					</div>

				</div>
				<div class="rounded-3xl mt-5 overflow-hidden sm:mt-6 sm:w-full lg:-mt-6 lg:w-6/12 anim-float-card">			
					<!-- <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@speecify/video/7253566090679291142" data-video-id="7253566090679291142" style="max-width: 320px;min-width: 20px; height: 550px;" > <section> <a target="_blank" title="@speecify" href="https://www.tiktok.com/@speecify?refer=embed">@speecify</a> แปลงข้อความเป็นเสียงพูดลองพากย์ ไอจังจากอนิเมะเกิดใหม่เป็นลูกโอชิ ด้วย Speecify.in.th <a title="oshinoko" target="_blank" href="https://www.tiktok.com/tag/oshinoko?refer=embed">#oshinoko</a> <a title="เกิดใหม่เป็นลูกโอชิ" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%82%E0%B8%AD%E0%B8%8A%E0%B8%B4?refer=embed">#เกิดใหม่เป็นลูกโอชิ</a> <a title="speecify" target="_blank" href="https://www.tiktok.com/tag/speecify?refer=embed">#speecify</a> <a title="tiktokสายความรู้" target="_blank" href="https://www.tiktok.com/tag/tiktok%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89?refer=embed">#tiktokสายความรู้</a> <a title="เสียงพากย์" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%9E%E0%B8%B2%E0%B8%81%E0%B8%A2%E0%B9%8C?refer=embed">#เสียงพากย์</a> <a title="เสียงพากย์ai" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%9E%E0%B8%B2%E0%B8%81%E0%B8%A2%E0%B9%8Cai?refer=embed">#เสียงพากย์ai</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Speecify" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Speecify-7253566133180058373?refer=embed">♬ เสียงต้นฉบับ  - Speecify</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script> -->
					<img class="w-full" src="./images/Logo2.png" alt="project illustration" height="300" width="300" />
				</div>
				
				
			</div>
		</div>
		{/key}
	</div>
</section>

<section id="videoplayer" class="pt-32">
	
</section>

<section id="testimonials" class="pt-32">
	<div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
		<div class="text-center">
			<h2 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">รีวิวจากผู้ใช้งานจริง</h2>
			<p class="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">A growing team doesn't need to mean growing pains. Privacy, and the right tool for every step of your journey - Jira Software friction - company size.</p>
		</div>
		<div class="mt-12 grid gap-8 md:grid-cols-2">
			<div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
				<div class="flex h-full flex-col justify-center space-y-6 md:space-y-8">
					<img class="mr-auto h-12 w-auto" src="images/clients/microsoft.svg" loading="lazy" alt="microsoft" />
					<p class="text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl">
						<span class="font-serif">"</span> เสียงที่ai พากย์ดีมาก แต่อยากได้เสียงที่หลากหลายกว่านี้ <br />
					</p>
					<div class="flex items-center gap-3">
						<img class="h-12 w-12 rounded-full" src="./images/avatars/avatar-2.webp" loading="lazy" alt="user avatar" width="200" height="200" />
						<div>
							<h3 class="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Rata</h3>
							<span class="text-sm text-gray-500 dark:text-gray-400">Product Designer</span>
						</div>
					</div>
				</div>
			</div>

			<div class="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
				<img class="h-12 w-auto" src="images/clients/airbnb.svg" loading="lazy" alt="airbnb" width="" height="" />
				<p class="text-gray-600 dark:text-gray-300"><span class="font-serif">"</span>Sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Provident, omnis ut, sapiente veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
				<div class="flex items-center gap-3 text-left">
					<img class="h-12 w-12 rounded-full" src="./images/avatars/avatar-3.webp" alt="user avatar" width="200" height="200" loading="lazy" />
					<div>
						<h3 class="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Janet Doe</h3>
						<span class="text-sm text-gray-500 dark:text-gray-400">UX Designer</span>
					</div>
				</div>
			</div>
			<div class="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
				<img class="h-12 w-auto" src="images/clients/ge.svg" loading="lazy" alt="ge" />
				<p class="text-gray-600 dark:text-gray-300"><span class="font-serif">"</span>Sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Provident, omnis ut, sapiente veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
				<div class="flex items-center gap-3 text-left">
					<img class="h-12 w-12 rounded-full" src="./images/avatars/avatar-4.webp" alt="user avatar" width="200" height="200" loading="lazy" />
					<div>
						<h3 class="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">John Doe</h3>
						<span class="text-sm text-gray-500 dark:text-gray-400">Product Designer</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<section id="features" class="relative mb-32 pt-40">
	<div aria-hidden="true" class="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
		<div class="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
		<div class="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
	</div>
	<div class="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
		<div class="text-center">
			<h2 class="text-4xl font-bold text-gray-800 dark:text-white xl:text-5xl">บริการของเราจะช่วยเหลือคุณได้อย่างไร!</h2>
			<p class="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">Speecify ของเรามุ่งมั่นที่จะเปลี่ยนวิธีการดึงดูดผู้ชมของคุณให้เข้าร่วมกับบุคคล ธุรกิจ และผู้สร้างเนื้อหานับไม่ถ้วนที่ได้ค้นพบคุณค่าอันยิ่งใหญ่ของบริการแปลงข้อความเป็นคำพูดของเรา ยกระดับเนื้อหาของคุณให้สูงขึ้นไปอีกขั้นและสร้างผลกระทบที่ยั่งยืนด้วยเสียงที่น่าดึงดูดใจ </p>
		</div>
		<div class="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
				<div class="space-y-12 text-center">
					<img src="https://cdn-icons-png.flaticon.com/512/584/584796.png" class="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
					<div class="space-y-6">
						<!-- {#each audioTracks as src}
							<AudioPlayer {src} />
						{/each} -->
						<AudioPlayer src={audioTracks[0]} />
						<h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">ช่วยให้เสียงพากย์ต่างๆที่มีคุณภาพระดับสูง</h3>
						<p class="text-gray-600 dark:text-gray-300">สัมผัสประสบการณ์การแปลงข้อความของคุณเป็นเสียงคุณภาพสูงที่เหมือนจริง รูปแบบเสียงของเราทำให้มั่นใจได้ว่าคำต่างๆจะออกเสียงได้เป็นธรรมชาติ และ เข้าถึงอารมณ์ บอกลาเสียงหุ่นยนต์และดึงดูดผู้ฟังของคุณด้วยเสียงระดับมืออาชีพที่สร้างความประทับใจไม่รู้ลืม</p>
						<a aria-label="read more" href="#" class="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="-transtransition-transform relative h-5 w-5 text-gray-600 duration-300 group-hover:translate-x-1 dark:text-white">
								<path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div class="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
				<div class="space-y-12 text-center">
					<img src="https://cdn-icons-png.flaticon.com/512/6106/6106288.png" class="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
					<div class="space-y-6">
						<AudioPlayer src={audioTracks[1]} />
						<h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">ช่วยในการสร้างคอนเทนต์อย่างมืออาชีพ</h3>
						<p class="text-gray-600 dark:text-gray-300">ด้วยบริการอ่านออกเสียงข้อความภาษาไทยของเรา คุณสามารถสร้างเสียงพากย์คุณภาพสูงได้อย่างง่ายดายเพื่อวัตถุประสงค์ต่างๆ ไม่ว่าคุณจะต้องการพากย์วิดีโอ สร้างเสียงพากย์สำหรับเนื้อหา YouTube ผลิตโฆษณา หรือพัฒนาสื่อการศึกษา บริการของเราให้เสียงภาษาไทยที่เป็นธรรมชาติและแท้จริง ซึ่งจะดึงดูดผู้ชมของคุณและเพิ่มมูลค่าการผลิตโดยรวม</p>
						<a aria-label="read more" href="#" class="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
								<path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div class="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
				<div class="space-y-12 text-center">
					<img src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png" class="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
					<div class="space-y-6">
						<AudioPlayer src={audioTracks[2]} />
						<h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">ช่วยประหยัดเวลาและค่าใช้จ่าย</h3>
						<p class="text-gray-600 dark:text-gray-300">บริการของเราช่วยให้คุณประหยัดเวลาและทรัพยากรอันมีค่า แทนที่ใช้เวลาหลายชั่วโมงในการบันทึกและตัดต่อเสียง คุณสามารถสร้างเสียงพูดภาษาไทยได้ทันทีด้วยเทคโนโลยีการอ่านออกเสียงข้อความของเรา สิ่งนี้ทำให้คุณสามารถเร่งกระบวนการสร้างเนื้อหาของคุณ ให้ทันกำหนดเวลา และจัดสรรงบประมาณได้อย่างมีประสิทธิภาพมากขึ้น</p>
						<a aria-label="read more" href="#" class="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
								<path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="solutions" class="pt-32">
	<div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
		<div class="text-center">
			<h2 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">For growing teams and organizations</h2>
			<p class="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">A growing team doesn't need to mean growing pains. Privacy, and the right tool for every step of your journey - Jira Software friction - company size.</p>

			<div role="tablist" aria-label="tabs" class="relative mx-auto mt-12 grid h-12 w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max">
				<div class="tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-[left] duration-500 dark:bg-gray-800" style="left: 4px"></div>
				<button role="tab" aria-selected="true" aria-controls="panel-0" tabindex="0" title="tab item" class="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
					<span class="m-auto block w-max text-sm font-medium tracking-wider">First Tab</span>
				</button>
				<button role="tab" aria-selected="false" aria-controls="panel-1" tabindex="-1" title="tab item" class="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
					<span class="m-auto block w-max text-sm font-medium tracking-wider">Second Tab</span>
				</button>
				<button role="tab" aria-selected="false" aria-controls="panel-2" tabindex="-1" title="tab item" class="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
					<span class="m-auto block w-max text-sm font-medium tracking-wider">Third Tab</span>
				</button>
			</div>
		</div>
		<div class="mt-20">
			<div class="gap-6 space-y-12 md:flex md:space-y-0">
				<div class="relative md:w-1/2">
					<div class="panel visible inset-0 flex scale-100 flex-col justify-center opacity-100 transition duration-500 md:absolute" id="panel-0">
						<div>
							<h3 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make work flow across teams while connecting back to company goals</h3>
							<p class="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
							<div class="mt-12 space-y-6">
								<div class="flex items-center gap-6">
									<div class="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
										<img class="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png" alt="icon illustration" loading="lazy" width="512" height="512" />
									</div>
									<div class="w-[calc(100%-7.5rem)]">
										<h4 class="text-lg font-semibold text-gray-800 dark:text-white">Together as one</h4>
										<p class="mt-1 text-gray-600 dark:text-gray-400">Accusantium nemo perspiciatis delectus atque autem!</p>
									</div>
								</div>

								<div class="flex items-center gap-6">
									<div class="z-1 flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
										<img class="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/584/584796.png" alt="icon illustration" loading="lazy" width="512" height="512" />
									</div>
									<div class="w-[calc(100%-7.5rem)]">
										<h4 class="text-lg font-semibold text-gray-800 dark:text-white">New ideas</h4>
										<p class="mt-1 text-gray-600 dark:text-gray-400">Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500" id="panel-1">
						<div>
							<h3 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make work flow across teams while connecting back to company goals</h3>
							<p class="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
							<div class="mt-12 space-y-6">
								<div class="flex items-center gap-6">
									<div class="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
										<img class="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/6106/6106288.png" alt="icon illustration" loading="lazy" width="512" height="512" />
									</div>
									<div class="w-[calc(100%-7.5rem)]">
										<h4 class="text-lg font-semibold text-gray-800 dark:text-white">Together as one</h4>
										<p class="mt-1 text-gray-600 dark:text-gray-400">Accusantium nemo perspiciatis delectus atque autem!</p>
									</div>
								</div>

								<div class="flex items-center gap-6">
									<div class="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
										<img class="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/2313/2313906.png" alt="icon illustration" loading="lazy" width="512" height="512" />
									</div>
									<div class="w-[calc(100%-7.5rem)]">
										<h4 class="text-lg font-semibold text-gray-800 dark:text-white">New ideas</h4>
										<p class="mt-1 text-gray-600 dark:text-gray-400">Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500" id="panel-2">
						<div>
							<h3 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make work flow across teams while connecting back to company goals</h3>
							<p class="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
							<div class="mt-12 space-y-6">
								<div class="flex items-center gap-6">
									<div class="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
										<img class="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/3340/3340200.png" alt="icon illustration" loading="lazy" width="512" height="512" />
									</div>
									<div class="w-[calc(100%-7.5rem)]">
										<h4 class="text-lg font-semibold text-gray-800 dark:text-white">Together as one</h4>
										<p class="mt-1 text-gray-600 dark:text-gray-400">Accusantium nemo perspiciatis delectus atque autem!</p>
									</div>
								</div>

								<div class="flex items-center gap-6">
									<div class="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
										<img class="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/5405/5405929.png" alt="icon illustration" loading="lazy" width="512" height="512" />
									</div>
									<div class="w-[calc(100%-7.5rem)]">
										<h4 class="text-lg font-semibold text-gray-800 dark:text-white">Growth</h4>
										<p class="mt-1 text-gray-600 dark:text-gray-400">Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
					<div class="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
						<div class="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
							<div data-target="panel-0" class="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
								<img src="./images/screenshots/tailus-home.webp" class="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" width="850" height="1780" />
							</div>
							<div data-target="panel-1" class="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10">
								<img src="./images/screenshots/tailus-home-dark.webp" class="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot dark-mode" width="850" height="1780" />
							</div>
							<div data-target="panel-2" class="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10">
								<img src="./images/screenshots/tailus-contact.webp" class="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus contact screenshot" width="850" height="1780" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="company" class="pt-16 md:pt-32">
	<div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
		<div class="items-center justify-center space-y-6 md:flex md:gap-6 md:space-y-0">
			<div class="md:w-1/2 lg:w-3/5">
				<img class="h-full rounded-3xl object-cover md:-ml-8" src="./../images/hero-stats-login.webp" alt="tailus components" loading="lazy" width="1865" height="1750" />
			</div>
			<div class="md:w-1/2">
				<h2 class="my-8 text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">อิสระในการปรับเสียงตามความต้องการ</h2>
				<p class="mb-4 text-gray-600 dark:text-gray-300">เรามีเสียงตัวละครให้คุณเลือกใช้และสามารถปรับระดับความต่ำและสูงของเสียงผ่านเว็บไซต์เราได้เลย</p>
			<!-- 	<p class="text-gray-600 dark:text-gray-300">Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias sapiente maxime repellendus impedit commodi blanditiis debitis rerum, quisquam aspernatur quod aliquid molestiae eveniet suscipit, natus dolore? Vero, eum voluptatem?</p> -->
			</div>
		</div>
	</div>
</section>


<section class="relative before:absolute before:inset-0 before:h-px before:w-96 before:bg-gradient-to-r before:from-yellow-300 before:via-pink-400 before:to-transparent after:absolute after:inset-0 after:ml-auto after:mt-auto after:h-px after:w-96 after:bg-gradient-to-l after:from-yellow-300 after:via-pink-400 after:to-transparent">
	<div class="border-y border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-darker">
		<div class="relative mx-auto px-6 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0">
			<div class="items-end justify-between md:flex">
				<div class="h-max py-16 md:w-6/12 xl:w-5/12">
					<div class="text-center md:text-left">
						<h2 class="text-3xl font-bold text-gray-800 dark:text-white md:w-max md:text-4xl xl:text-5xl">
							One step to improve <br />
							your workflow
						</h2>
						<p class="mb-8 mt-6 text-gray-600 dark:text-gray-300">Praesentium, atque exercitationem dolorum, iste libero eaque animi illum magnam velit iusto quidem omnis quas! Ad expedita quaerat.</p>
						<form action="" class="mt-12">
							<div class="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3">
								<div class="py-3 pl-4 lg:pl-5">
									<svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400" viewBox="0 0 20 20" fill="currentColor">
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
								</div>
								<input autocomplete="email" aria-label="your email" placeholder="Your mail address" class="w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none dark:placeholder-white" type="email" />
								<div class="md:pr-1.5 lg:pr-0">
									<button type="button" title="Start buying" class="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6">
										<span class="relative hidden w-max font-semibold text-white dark:text-gray-900 md:block"> Get Started </span>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative z-1 mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden">
											<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
										</svg>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>

				<div class="md:w-[42%] lg:w-1/2">
					<img src="./../images/cta-cards.webp" alt="tailus stat cards components" loading="lazy" width="1299" height="678" />
				</div>
			</div>
		</div>
	</div>
</section>



<section id="pricing" class="overflow-x-clip pt-32">
	<div class="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
		<div class="relative z-10 text-center md:mx-auto md:w-5/6 lg:w-4/6">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">A pricing for every need</h2>
			<p class="mt-6 text-gray-700 dark:text-gray-300">Saepe nulla ab nobis itaque corporis fuga illo doloribus sequi esse aspernatur impedit nihil quisquam, voluptates placeat architecto adipisci id cum enim.</p>
		</div>
		<div class="relative mt-20">
			<div aria-hidden="true" class="absolute inset-0 -bottom-20 mx-auto mt-auto h-[50rem] w-[68rem] rounded-full bg-secondaryLight/50 blur-3xl dark:bg-secondary/40 md:m-auto"></div>
			<div class="m-auto items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-1">
				<div class="relative z-10 -mx-2 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 dark:border-gray-700/60 dark:bg-gray-800 dark:shadow-none md:mx-0 md:w-6/12 lg:w-5/12">
					<div class="space-y-6 p-8 sm:p-12">
						<div class="flex items-center justify-center gap-4">
							<div class="flex h-16 w-16 rounded-full border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
								<img src="https://tailus.io/sources/blocks/comparator/preview/images/team.webp" class="m-auto h-8 w-auto" alt="organization icon" width="512" height="512" />
							</div>
							<div>
								<h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Teams</h3>
								<p class="mt-1 text-gray-600 dark:text-gray-400">For product teams</p>
							</div>
						</div>
						<div class="relative flex justify-around">
							<div class="flex items-end">
								<span class="leading-0 text-8xl font-bold text-gray-800 dark:text-white">35</span>
								<div class="pb-2">
									<span class="block text-2xl font-bold text-gray-700 dark:text-white">%</span>
									<span class="block text-xl font-bold text-primary dark:text-primaryLight">Off</span>
								</div>
							</div>
						</div>
						<ul role="list" class="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300">
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>First premium advantage</span>
							</li>
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>Second advantage weekly</span>
							</li>
							<li class="space-x-2">
								<span class="font-semibold text-gray-500">&check;</span>
								<span>Third advantage donate to project</span>
							</li>
						</ul>
						<p class="mt-6 flex items-center justify-center space-x-4 text-center text-lg text-gray-600 dark:text-gray-300">
							<span>Call us at</span>
							<a href="tel:+24300" class="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6" viewBox="0 0 16 16">
									<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
								</svg>
								<span class="font-semibold">+1 000 000</span>
							</a>
							<span>or</span>
						</p>
						<a href="./pages/contact.html" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
							<span class="relative text-base font-semibold text-white dark:text-dark">Send us an Email</span>
						</a>
					</div>
				</div>

				<div class="relative mx-4 rounded-3xl rounded-t-none border border-gray-700 bg-gray-800 shadow-2xl shadow-gray-600/10 dark:border-gray-100 dark:bg-white dark:shadow-none md:mx-0 md:w-6/12 md:rounded-l-none md:rounded-tl-none md:rounded-tr-3xl lg:w-7/12">
					<div class="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-9 lg:p-16 lg:pl-[4.375rem]">
						<div class="flex items-center gap-4">
							<div class="rounded-full bg-gradient-to-br from-primaryLight to-yellow-500 dark:from-primary dark:to-yellow-400">
								<div class="flex h-16 w-16 scale-[0.96] rounded-full bg-gray-900 dark:bg-white">
									<img src="https://tailus.io/sources/blocks/comparator/preview/images/organization.webp" class="m-auto h-8 w-auto" alt="organization icon" width="512" height="512" />
								</div>
							</div>
							<div>
								<h3 class="text-2xl font-semibold text-white dark:text-gray-800">Organizations</h3>
								<p class="mt-1 text-gray-400 dark:text-gray-600">For teams with 100+ employees</p>
							</div>
						</div>

						<p class="my-8 text-white dark:text-gray-700">Voluptatum iure rerum qui Voluptates dignissimos quibusdam reiciendis soluta tempore illum possimus esse.</p>

						<div class="mb-8 grid grid-cols-2 rounded-3xl border border-gray-700 text-white dark:border-gray-200 dark:text-gray-600 [&>*]:border-gray-700 [&>*]:p-4 [&>*]:dark:border-gray-200">
							<div class="flex justify-center gap-2 border-b">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 opacity-60">
									<path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
								</svg>
								Shine
							</div>
							<div class="flex justify-center gap-2 border-b border-l">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 opacity-60">
									<path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd" />
								</svg>
								Feature
							</div>
							<div class="flex justify-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 opacity-60">
									<path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd" />
									<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
								</svg>
								Boost
							</div>
							<div class="flex justify-center gap-2 border-l">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 opacity-60">
									<path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd" />
									<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
								</svg>
								Build
							</div>
						</div>

						<a href="./pages/contact.html" class="block rounded-2xl border border-gray-700 bg-gray-700/50 p-6 text-center dark:border-primary/20 dark:bg-primary/5 md:-mx-6 md:-mb-6 lg:-mx-12 lg:-mb-12">
							<span class="text-xl font-semibold text-primaryLight dark:text-primary">Contact sales</span>
						</a>
					</div>
				</div>
			</div>
			<div class="mt-12 text-center">
				<span class="text-sm font-semibold tracking-wider dark:text-white">TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES</span>

				<div class="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 lg:gap-24">
					<img class="h-8 w-auto lg:h-10 lg:w-auto" src="./../images/clients/airbnb.svg" loading="lazy" alt="airbnb" width="" height="" />
					<img class="h-8 w-auto lg:h-10 lg:w-auto" src="./../images/clients/coty.svg" loading="lazy" alt="coty" width="" height="" />
					<img class="h-8 w-auto lg:h-10 lg:w-auto" src="./../images/clients/ge.svg" loading="lazy" alt="ge" width="" height="" />
					<img class="h-8 w-auto lg:h-10 lg:w-auto" src="./../images/clients/lilly.png" loading="lazy" alt="lilly" width="" height="" />
					<img class="h-8 w-auto lg:h-10 lg:w-auto" src="./../images/clients/microsoft.svg" loading="lazy" alt="microsoft" width="" height="" />
				</div>
			</div>
		</div>
	</div>
</section>

<section id="faqs" class="my-32">
	<div class="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
		<h2 class="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Q&A</h2>

		<div class="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
			<div>
				<dl class="faq mx-auto max-w-2xl">
					<dt class="text-lg">
						<button type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-0" data-active="false">
							<span class="font-medium text-gray-900 dark:text-white">ค่าใช้จ่ายในการใช้งาน</span>
							<span class="ml-6 flex h-7 items-center">
								<svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
								</svg>
							</span>
						</button>
					</dt>
					<dd class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-0">
						<p class="pb-6 text-base text-gray-600 dark:text-gray-400">ไม่ต้องเป็นห่วง! เรามีโทเคนแจกจำนวน 500 โทเคนให้ไปทดลองใช้ก่อนเลย</p>
					</dd>
				</dl>
			</div>
			<div>
				<dl class="faq mx-auto max-w-2xl">
					<dt class="text-lg">
						<button type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-1" data-active="false">
							<span class="font-medium text-gray-900 dark:text-white">What included in the pack ?</span>
							<span class="ml-6 flex h-7 items-center">
								<svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
								</svg>
							</span>
						</button>
					</dt>
					<dd class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-1">
						<p class="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
					</dd>
				</dl>
			</div>
			<div>
				<dl class="faq mx-auto max-w-2xl">
					<dt class="text-lg">
						<button type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-2" data-active="false">
							<span class="font-medium text-gray-900 dark:text-white">What included in the pack ?</span>
							<span class="ml-6 flex h-7 items-center">
								<svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
								</svg>
							</span>
						</button>
					</dt>
					<dd class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-2">
						<p class="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
					</dd>
				</dl>
			</div>
			<div>
				<dl class="faq mx-auto max-w-2xl">
					<dt class="text-lg">
						<button type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-4" data-active="false">
							<span class="font-medium text-gray-900 dark:text-white">Are updates included in this pack ?</span>
							<span class="ml-6 flex h-7 items-center">
								<svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
								</svg>
							</span>
						</button>
					</dt>
					<dd class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-4">
						<p class="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
					</dd>
				</dl>
			</div>
			<div>
				<dl class="faq mx-auto max-w-2xl">
					<dt class="text-lg">
						<button type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-5" data-active="false">
							<span class="font-medium text-gray-900 dark:text-white">What included in the pack ?</span>
							<span class="ml-6 flex h-7 items-center">
								<svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
								</svg>
							</span>
						</button>
					</dt>
					<dd class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-5">
						<p class="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</section>

<footer class="border-t border-gray-100 pt-32 pb-8 dark:border-gray-800">
	<div>
		<div class="m-auto space-y-8 px-4 text-gray-600 dark:text-gray-400 sm:px-12 xl:max-w-6xl xl:px-0">
			<div class="grid grid-cols-8 gap-6 md:gap-0">
				<div class="col-span-8 md:col-span-2 lg:col-span-3">
					<div class="flex h-full items-center justify-between gap-6 border-b border-white py-6 dark:border-gray-800 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
						<div>
							<a href="/index.html" aria-label="ampire logo" class="flex items-center">
								<!-- <svg class="h-7 w-auto" viewBox="0 0 1206 270" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_4_24)">
										<path class="fill-[#24221B] dark:fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M184.589 48.5615L259.174 177.176C271.689 198.757 264.34 226.397 242.76 238.912C221.862 251.03 195.284 244.523 182.258 224.504L168.033 245.393C189.368 269.831 225.685 276.557 254.799 259.673C287.846 240.509 299.1 198.183 279.936 165.136L204.374 34.8366C201.937 30.6351 199.126 26.7859 196.008 23.3066L184.589 48.5615Z" />
										<path class="fill-[#24221B] dark:fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M184.19 92.696L108.622 222.992C96.1058 244.572 68.4656 251.92 46.8855 239.405C25.3055 226.889 17.9575 199.249 30.4733 177.668L106.042 47.3721C118.558 25.792 146.198 18.444 167.778 30.9599C189.358 43.4757 196.706 71.116 184.19 92.696ZM85.2807 35.3313C104.447 2.28524 146.773 -8.96694 179.819 10.1989C212.865 29.3647 224.117 71.6908 204.951 104.737L129.383 235.033C110.217 268.079 67.8908 279.331 34.8447 260.166C1.79866 241 -9.45348 198.674 9.71234 165.628L85.2807 35.3313Z" />
										<path class="fill-[#24221B] dark:fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M108.622 222.992L184.19 92.696C196.706 71.116 189.358 43.4757 167.778 30.9599C146.198 18.444 118.558 25.792 106.042 47.3721L30.4733 177.668C17.9575 199.248 25.3054 226.889 46.8855 239.405C68.4656 251.92 96.1058 244.572 108.622 222.992ZM179.819 10.1989C146.773 -8.96694 104.447 2.28524 85.2807 35.3313L9.71233 165.628C-9.4535 198.674 1.79865 241 34.8447 260.166C67.8907 279.331 110.217 268.079 129.383 235.033L204.951 104.737C224.117 71.6908 212.865 29.3647 179.819 10.1989Z" />
										<path
											class="fill-[#24221B] dark:fill-white"
											d="M499.74 73H526.78V203H499.61L498.57 184.15C494.757 190.823 489.6 196.197 483.1 200.27C476.6 204.343 468.93 206.38 460.09 206.38C450.557 206.38 441.587 204.603 433.18 201.05C424.773 197.41 417.363 192.383 410.95 185.97C404.623 179.557 399.683 172.19 396.13 163.87C392.577 155.463 390.8 146.45 390.8 136.83C390.8 127.557 392.533 118.847 396 110.7C399.467 102.467 404.277 95.2733 410.43 89.12C416.583 82.9667 423.69 78.1567 431.75 74.69C439.897 71.1367 448.607 69.36 457.88 69.36C467.327 69.36 475.647 71.5267 482.84 75.86C490.12 80.1067 496.143 85.5667 500.91 92.24L499.74 73ZM459.44 180.25C467.067 180.25 473.74 178.387 479.46 174.66C485.18 170.847 489.6 165.733 492.72 159.32C495.927 152.907 497.53 145.8 497.53 138C497.53 130.113 495.927 122.963 492.72 116.55C489.513 110.137 485.05 105.067 479.33 101.34C473.697 97.5267 467.067 95.62 459.44 95.62C451.9 95.62 445.01 97.5267 438.77 101.34C432.53 105.153 427.59 110.267 423.95 116.68C420.31 123.093 418.49 130.2 418.49 138C418.49 145.887 420.353 153.037 424.08 159.45C427.893 165.777 432.877 170.847 439.03 174.66C445.27 178.387 452.073 180.25 459.44 180.25ZM552.721 203V73H579.761V86.78C584.268 81.4067 589.771 77.16 596.271 74.04C602.858 70.92 609.964 69.36 617.591 69.36C626.864 69.36 635.401 71.6133 643.201 76.12C651.001 80.54 657.198 86.4333 661.791 93.8C666.384 86.4333 672.494 80.54 680.121 76.12C687.834 71.6133 696.328 69.36 705.601 69.36C715.221 69.36 723.974 71.7 731.861 76.38C739.748 81.06 746.031 87.3433 750.711 95.23C755.391 103.117 757.731 111.87 757.731 121.49V203H730.691V128.38C730.691 122.66 729.304 117.417 726.531 112.65C723.758 107.883 720.031 104.027 715.351 101.08C710.671 98.1333 705.471 96.66 699.751 96.66C694.031 96.66 688.831 98.0467 684.151 100.82C679.471 103.593 675.744 107.363 672.971 112.13C670.198 116.897 668.811 122.313 668.811 128.38V203H641.771V128.38C641.771 122.313 640.384 116.897 637.611 112.13C634.838 107.363 631.068 103.593 626.301 100.82C621.621 98.0467 616.421 96.66 610.701 96.66C605.068 96.66 599.868 98.1333 595.101 101.08C590.421 104.027 586.694 107.883 583.921 112.65C581.148 117.417 579.761 122.66 579.761 128.38V203H552.721ZM810.816 268H783.776V73H810.816V92.11C815.149 85.4367 820.696 80.02 827.456 75.86C834.216 71.7 842.189 69.62 851.376 69.62C860.822 69.62 869.662 71.3967 877.896 74.95C886.216 78.5033 893.496 83.4433 899.736 89.77C905.976 96.01 910.872 103.247 914.426 111.48C917.979 119.713 919.756 128.553 919.756 138C919.756 147.447 917.979 156.33 914.426 164.65C910.872 172.97 905.976 180.293 899.736 186.62C893.496 192.86 886.216 197.757 877.896 201.31C869.662 204.863 860.822 206.64 851.376 206.64C842.189 206.64 834.216 204.56 827.456 200.4C820.696 196.153 815.149 190.737 810.816 184.15V268ZM851.116 95.75C843.576 95.75 836.946 97.6567 831.226 101.47C825.506 105.283 821.042 110.397 817.836 116.81C814.629 123.137 813.026 130.2 813.026 138C813.026 145.8 814.629 152.907 817.836 159.32C821.042 165.733 825.506 170.847 831.226 174.66C836.946 178.473 843.576 180.38 851.116 180.38C858.569 180.38 865.416 178.517 871.656 174.79C877.896 170.977 882.879 165.863 886.606 159.45C890.332 153.037 892.196 145.887 892.196 138C892.196 130.287 890.332 123.223 886.606 116.81C882.966 110.397 878.026 105.283 871.786 101.47C865.546 97.6567 858.656 95.75 851.116 95.75ZM938.405 73H965.445V203H938.405V73ZM952.185 54.15C948.025 54.15 944.558 52.8067 941.785 50.12C939.011 47.4333 937.625 44.0533 937.625 39.98C937.625 35.9933 939.011 32.6567 941.785 29.97C944.558 27.1967 947.981 25.81 952.055 25.81C956.041 25.81 959.421 27.1967 962.195 29.97C964.968 32.6567 966.355 35.9933 966.355 39.98C966.355 44.0533 964.968 47.4333 962.195 50.12C959.508 52.8067 956.171 54.15 952.185 54.15ZM995.534 203V73H1022.57V86.78C1027.08 81.4067 1032.63 77.16 1039.21 74.04C1045.8 70.92 1052.91 69.36 1060.53 69.36C1065.39 69.36 1070.2 70.01 1074.96 71.31L1064.17 98.61C1060.79 97.31 1057.41 96.66 1054.03 96.66C1048.31 96.66 1043.07 98.09 1038.3 100.95C1033.54 103.723 1029.72 107.493 1026.86 112.26C1024 117.027 1022.57 122.313 1022.57 128.12V203H995.534ZM1141.09 206.38C1129.13 206.38 1118.21 203.303 1108.33 197.15C1098.54 190.997 1090.7 182.763 1084.8 172.45C1079 162.05 1076.09 150.567 1076.09 138C1076.09 128.467 1077.78 119.583 1081.16 111.35C1084.54 103.03 1089.18 95.75 1095.07 89.51C1101.05 83.1833 1107.99 78.2433 1115.87 74.69C1123.76 71.1367 1132.17 69.36 1141.09 69.36C1151.06 69.36 1160.2 71.44 1168.52 75.6C1176.84 79.6733 1183.95 85.35 1189.84 92.63C1195.74 99.8233 1200.07 108.143 1202.84 117.59C1205.62 126.95 1206.44 136.917 1205.31 147.49H1105.08C1106.21 153.47 1108.38 158.887 1111.58 163.74C1114.88 168.507 1119.04 172.277 1124.06 175.05C1129.18 177.823 1134.85 179.253 1141.09 179.34C1147.68 179.34 1153.66 177.693 1159.03 174.4C1164.49 171.107 1168.96 166.557 1172.42 160.75L1199.85 167.12C1194.65 178.647 1186.81 188.093 1176.32 195.46C1165.84 202.74 1154.09 206.38 1141.09 206.38ZM1104.17 126.82H1178.01C1177.15 120.58 1174.94 114.947 1171.38 109.92C1167.92 104.807 1163.54 100.777 1158.25 97.83C1153.05 94.7967 1147.33 93.28 1141.09 93.28C1134.94 93.28 1129.22 94.7533 1123.93 97.7C1118.73 100.647 1114.4 104.677 1110.93 109.79C1107.55 114.817 1105.3 120.493 1104.17 126.82Z"
										/>
									</g>
									<defs>
										<clipPath id="clip0_4_24">
											<rect width="1206" height="270" fill="white" />
										</clipPath>
									</defs>
								</svg> -->
							</a>
							<a href="https://astralrc.com" class="mt-2 inline-block text-sm">By AstralRC</a>
						</div>

						<div class="flex gap-6">
							<a href="#" target="blank" aria-label="github" class="hover:text-primary dark:hover:text-primaryLight">
								<span class="sr-only">Github</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
								</svg>
							</a>
							<a href="#" target="blank" aria-label="twitter" class="hover:text-primary dark:hover:text-primaryLight">
								<span class="sr-only">Twitter</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
									<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
								</svg>
							</a>
							<a href="#" target="blank" aria-label="medium" class="hover:text-primary dark:hover:text-primaryLight">
								<span class="sr-only">Medium</span>

								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
									<path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div class="col-span-8 md:col-span-6 lg:col-span-5">
					<div class="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
						<div>
							<h2 class="text-base font-medium text-gray-800 dark:text-gray-200">Company</h2>
							<ul class="mt-4 list-inside space-y-4">
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">About</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Customers</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Enterprise</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Partners</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Jobs</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 class="text-base font-medium text-gray-800 dark:text-gray-200">Products</h2>
							<ul class="mt-4 list-inside space-y-4">
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">About</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Customers</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Enterprise</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Partners</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Jobs</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 class="text-base font-medium text-gray-800 dark:text-gray-200">Resources</h2>
							<ul class="mt-4 list-inside space-y-4">
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">About</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Customers</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Enterprise</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Partners</a>
								</li>
								<li>
									<a href="#" class="text-sm duration-100 hover:text-primary dark:hover:text-white">Jobs</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="flex justify-between text-sm md:pl-16">
						<span>&copy; AstralRC 2023 - Present</span>
						<span>All right reserved</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

