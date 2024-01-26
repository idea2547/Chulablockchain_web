<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="min-h-screen flex flex-col justify-between">
    <div class="flex-grow">
        <Accordion class="container h-full mx-auto justify-center items-center">
            <AccordionItem open>
                <svelte:fragment slot="lead">(icon)</svelte:fragment>
                <svelte:fragment slot="summary">สร้างเสียงฟรีไหม?</svelte:fragment>
                <svelte:fragment slot="content">พวกเราให้เหรียญคุณไปเลย 100 ฟรี! ในการลองใช้งาน</svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="lead">(icon)</svelte:fragment>
                <svelte:fragment slot="summary">สร้างเสียงฟรีไหม?</svelte:fragment>
                <svelte:fragment slot="content">พวกเราให้เหรียญคุณไปเลย 100 ฟรี! ในการลองใช้งาน</svelte:fragment>
            </AccordionItem>
            <!-- ... -->
        </Accordion>
    </div>
    
    <!-- Content below the accordion -->
</div>