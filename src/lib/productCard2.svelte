<script lang="ts">
    import { get } from "svelte/store";
    export let product : Product = {id: "", name:"", price: 0};

    async function checkout() {
        console.log(JSON.stringify(
				{ items: product.id }
			))
		await fetch("api/stripeCheckout", { // http://localhost:5173/api/stripeCheckout
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(
				{ items: product.id }
			)
		}).then((data) => {
			return data.json()
            console.log(data)
		});
	}

</script>


<div class="card">
    <header class="card-header"><h2>{product.name}</h2></header>

    <div class="card-body px-4">
        ราคา: {product.price} บาท
    </div>
    <footer class="card-footer">
        <button class="btn variant-filled-primary space-y-5" on:click={checkout}>ซื้อ {product.name}</button>
		<form action="/api/stripeCheckout" method="POST">
			<section>
			  <button type="submit" role="link">
				Checkout
			  </button>
			</section>
			<style jsx>
			  {`
				section {
				  background: #ffffff;
				  display: flex;
				  flex-direction: column;
				  width: 400px;
				  height: 112px;
				  border-radius: 6px;
				  justify-content: space-between;
				}
				button {
				  height: 36px;
				  background: #556cd6;
				  border-radius: 4px;
				  color: white;
				  border: 0;
				  font-weight: 600;
				  cursor: pointer;
				  transition: all 0.2s ease;
				  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
				}
				button:hover {
				  opacity: 0.8;
				}
			  `}
			</style>
		  </form>
    </footer>
</div>