<script>
    // You can add script logic here if needed
</script>

<div class="space-y-5 pt-32 sm:pt-40 md:pt-0">
    <div class="flex flex-col items-center h-full w-full pt-12 sm:pt-40 md:pt-28">
        <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
            ตารางงาน event
        </h2>
        <div class="calendar-container">
            <iframe src="https://calendar.google.com/calendar/embed?src=vc0chhjjgroi1sqak2rarfb6go%40group.calendar.google.com&ctz=Asia%2FBangkok" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>
</div>

<style>
    .calendar-container {
        position: relative;
        width: 100%;
        padding-top: 56.25%; /* Aspect Ratio 16:9 */
        overflow: hidden;
    }

    .calendar-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>
