<script>
	import { Input } from '$lib/components';
	export let form;
</script>

<style>
	.red {
	  color: red;
	}
  
	.yellow {
	  color: rgb(255, 238, 0);
	}
  </style>

<div class="flex flex-col items-center h-full w-full pt-32 sm:pt-40 md:pt-28">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		ลงทะเบียน
	</h2>
	<p class="text-center mt-1">
		หรือ <a href="/login" class="text-primary font-medium hover:cursor-pointer hover:underline yellow"
			>เข้าสู่ระบบ</a
		> หากคุณมีบัญชีอยู่แล้ว
	</p>
	<!-- <h1>ขณะนี้ยังไม่เปิดให้ลงทะเบียนเนื่องจากเป็นช่วง Beta test <br> แต่คุณสามารถลงทะเบียนสำหรับ Beta test ได้ที่<a href="/" class="text-primary font-medium hover:cursor-pointer hover:underline yellow">หน้าหลัก</a> </h1> -->
	<form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
		<Input id="name" label="Name/ชื่อ" value={form?.data?.name} errors={form?.errors?.name} />
		<Input
			type="email"
			id="email"
			label="Email/อีเมล"
			value={form?.data?.email}
			errors={form?.errors?.email}
		/>
		<Input type="password" id="password" label="Password/รหัสผ่าน" errors={form?.errors?.password} />
		<Input
			type="password"
			id="passwordConfirm"
			label="Confirm Password/ยืนยันรหัสผ่าน"
			errors={form?.errors?.passwordConfirm}
		/>
		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn variant-filled-secondary btn-primary w-full">ลงทะเบียน</button>
		</div>
		{#if form?.userNameExist}
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
					<span>ชื่อนี้ถูกใช้ไปแล้ว</span>
				</div>
			</div>
		{:else if form?.userEmailExist}
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
		{#if form?.userPasswordPass}
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
					<span>รหัสผ่านต้องมีความยาว 8 ตัวอักษรหรือตัวเลขขึ้นไป</span>
				</div>
			</div>
		{/if}
	</form>
</div>
