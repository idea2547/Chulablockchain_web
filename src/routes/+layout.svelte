<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	
	import '../app.css';
	import "./app.js";
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/navigation.svelte';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { setInitialClassState } from '@skeletonlabs/skeleton';
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	import { modeOsPrefers, modeUserPrefers, modeCurrent } from '@skeletonlabs/skeleton';
	import { Modal, Toast } from '@skeletonlabs/skeleton';

	

	import ModalExampleList from '$lib/modals/examples/ModalExampleList.svelte';

	if (typeof document !== 'undefined') {
		document.documentElement.classList.add('dark');

		
	}

	const modalComponentRegistry: Record<string, ModalComponent> = {
			exampleList: { ref: ModalExampleList }

		};

	export let data;

	

	/* function drawerOpen(): void {
		drawerStore.open();
	} */

	async function roll() {
		const response = await fetch('/roll');
		let number = await response.json();
		console.log(number)
	}
</script>



<!-- <div class="">
	<slot />
</div>
 -->
<!-- <Drawer>
	<Navigation/>
</Drawer> -->

<!-- svelte-ignore a11y-missing-attribute -->
<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10">
	<svelte:fragment slot="header">
		<!-- <AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<strong class="text-xl uppercase">Speecify</strong>	
				<p class="p-5 text-xl">โทเคนคงเหลือ: {data?.Token} |</p>
				<form action="/Token">
					<section>
					  <button class="btn variant-filled-secondary" type="submit" role="link">
						ซื้อโทเคนเพิ่ม
					  </button>
					</section>
				</form>
			</svelte:fragment>
			
			
	

			<svelte:fragment slot="trail">

				

				
				{#if data.user}
					<form action="/logout" method="POST">
						<button class="btn variant-filled-secondary" ><strong>ออกจากระบบ</strong></button>	
					</form>
				{:else}
					<button class="btn variant-filled-secondary"><a href="/login"><strong>เข้าสู่ระบบ</strong></a></button>	
				{/if}
								
			</svelte:fragment>
		</AppBar> -->
		<AppBar>
			<svelte:fragment slot="lead">
			<nav id="navbar" class="fixed h-14 top-0 inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80">
				<div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
					<div class="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
						<div class="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
							<a href="/" aria-label="ampire logo" class="nav-link flex items-center space-x-2">			
								
														
							</a>
		
							<button aria-label="humburger" id="hamburger" class="relative -mr-6 p-6 lg:hidden">
								<div aria-hidden="true" id="line" class="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
								<div aria-hidden="true" id="line2" class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
							</button>
						</div>
						
						<div aria-hidden="true" id="layer" class="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-darker/70 lg:hidden"></div>
						<div id="navlinks" class="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:lg:bg-transparent">
							<div class="text-gray-600 dark:text-gray-300 lg:pr-4">
								<ul class="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
									<li>
										<a href="/" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
											<span>หน้าหลัก</span>
										</a>
									</li>
									<li>
										<a href="https://speecify.in.th/createsound" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4" target="_blank">
											<span>สตูดิโอสร้างเสียง</span>
										  </a>
									</li>
									<li>
										<a href="https://speecify.in.th/createsoundplus" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4" target="_blank">
											<span>สตูดิโอสร้างเสียง 
												<span class="inline-flex items-center justify-center ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">PRO</span>
											</span>
										  </a>
									</li>
									
									<li>
										<a href="/#features" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
											<span>ฟีเจอร์</span>
										</a>
									</li>
									<!-- <li>
										<a href="#testimonials" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
											<span>Testimonials</span>
										</a>
									</li> -->
									<li>
										<a href="/pricing" class="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
											<span>ราคา</span>
										</a>
									</li>
								</ul>
							</div>

							{#if data.user}
								<form action="/logout" method="POST">
									<button class="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
										<a class="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
											<span class="relative text-sm font-semibold text-white dark:text-gray-900 lg:text-primary lg:dark:text-white">ออกจากระบบ</span>
										</a>
									</button>
								</form>
							{:else}
								<button class="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
									<a href="/login" class="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
										<span class="relative text-sm font-semibold text-white dark:text-gray-900 lg:text-primary lg:dark:text-white">เข้าสู่ระบบ</span>
									</a>
								</button>
							{/if}
							<button class="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
								<a href="https://www.facebook.com/profile.php?id=100093644403544" class="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
									<span class="relative text-sm font-semibold text-white btn variant-filled-primary">ติดต่อเรา</span>
								</a>
								
							</button>
		
							<!-- <button aria-label="switch theme" class="switcher group relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
								<svg xmlns="http://www.w3.org/2000/svg" class="transistion relative m-auto hidden h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" class="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden" viewBox="0 0 20 20" fill="currentColor">
									<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
								</svg>
							</button> -->
						</div>
						<!-- <div class="fixed top-3 right-14 z-20 sm:right-24 lg:hidden">
							<button aria-label="switche theme" class="switcher group relative flex h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
								<svg xmlns="http://www.w3.org/2000/svg" class="transistion relative m-auto hidden h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" class="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden" viewBox="0 0 20 20" fill="currentColor">
									<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
								</svg>
							</button>
						</div> -->
					</div>
				</div>
			</nav>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<div class="space-y-20 relative h-7">
			</div>
			
								
			</svelte:fragment>
	</AppBar>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">
		<Navigation/>

	</svelte:fragment> -->
	<div class="container mx-auto">
		
		<!-- https://github.com/sveltejs/kit/issues/7213 render Modal Before +page.svelte -->
		<slot>
			<Modal components={modalComponentRegistry} />
		</slot>
	</div>
	
</AppShell>


	
