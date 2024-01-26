<script lang="ts">
	import { drawerStore } from "@skeletonlabs/skeleton";

    function drawerClose(): void {
        drawerStore.close();
    }
</script>



<nav class='list-nav p-4'>
    <ul>
        <li><a href="/" on:click={drawerClose}>หน้าหลัก</a></li>
        <li><a href="/createsound" on:click={drawerClose}>สร้างเสียง</a></li>
        <li><a href="/createsound/Historys" on:click={drawerClose}>ประวัติการสร้างเสียง</a></li>
<!--         <li><a href="/คำถาม" on:click={drawerClose}>Q&A</a></li>
        <li><a href="/3" on:click={drawerClose}>เกี่ยวกับ</a></li>     -->
    </ul>
</nav>