<script lang="ts">
    import { get } from "svelte/store";
    import { cartItems, addToCart, removeFromCart } from "../cart";
    export let product : Product = {id: "", name:"", price: 0};
    let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
    // id: "1"
    let cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
    let cartProduct = cart[cartItemIndex];
    cartItems.subscribe((newCartValue) => {
        cart = newCartValue;
        cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
        cartProduct = cart[cartItemIndex];
        console.log(cart);
    });

    async function checkout() {
        console.log(String(product.id));
		await fetch("api/stripeCheckout", { // http://localhost:5173/api/stripeCheckout
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ 
                items: [
                    { id: product.id, quantity: "1" }
                ]
            }),
		}).then((data) => {
			return data.json()
		}).then((data) => {
			window.location.replace(data.url);
            
		});
	}
    

    /* async function checkout() {
        console.log(JSON.stringify(
				{ items: product.id }
			))
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
            console.log(data)
		});
	} */
</script>


<div class="card relative z-1 rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
					
    <div class="space-y-6 p-8 sm:p-12 text-center">
        <div class="flex items-center justify-center gap-4">
            <div>
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">{product.name}</h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">สำหรับสร้างทำคอนเทนต์คลิปต่างๆขนาดเล็ก</p>
            </div>
        </div>
        <div class="relative flex justify-around">
            <div class="flex items-end">
                <span class="leading-0 text-8xl font-bold text-gray-800 dark:text-white">99</span>
                <div class="pb-2">
                    <span class="block text-2xl font-bold text-gray-700 dark:text-white">บาท</span>
                    <span class="block text-xl font-bold text-primary dark:text-primaryLight">Off</span>
                </div>
            </div>
        </div>
        <ul role="list" class="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300">
            <li class="space-x-2">
                <span class="font-semibold text-gray-500">&check;</span>
                <span>รับไปเลย 5000 โทเคน</span>
            </li>
            <li class="space-x-2">
                <span class="font-semibold text-gray-500">&check;</span>
                <span>-</span>
            </li>
            <li class="space-x-2">
                <span class="font-semibold text-gray-500">&check;</span>
                <span>Third advantage donate to project</span>
            </li>
        </ul>
        <a href="./pages/contact.html" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
            <span class="relative text-base font-semibold text-white dark:text-dark">คลิปเพื่อซื้อเลย!</span>
        </a>
    </div>
</div>
<div class="card">
    <header class="card-header"><h2>{product.name}</h2></header>
    {#if cartProduct !== undefined}
        <div class="card-body px-4">
            Quantity: <strong><!-- {cartProduct.quantity} --></strong>
        </div>
    {/if}
    <div class="card-body px-4">
        Price: {product.price} บาท
    </div>
    <footer class="card-footer">
        <button class="btn variant-filled-primary space-y-5" on:click={() => checkout()}>ซื้อ {product.name}</button>
    </footer>
</div>