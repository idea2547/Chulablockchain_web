import PocketBase from "pocketbase"

const adminClient = new PocketBase(import.meta.env.VITE_PB_URL);

await adminClient.admins.authWithPassword(import.meta.env.VITE_AUTH_ADMIN_NAME, import.meta.env.VITE_AUTH_ADMIN_PASS, {
  // This will trigger auto refresh or auto reauthentication in case
  // the token has expired or is going to expire in the next 30 minutes.
  autoRefreshThreshold: 30 * 60
})

console.log(adminClient.authStore.isValid);
console.log("pass")
export default adminClient;