document.addEventListener('DOMContentLoaded', function() {
    function updateLocalTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        const formattedTime = now.toLocaleDateString('en-US', options);
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = formattedTime;
        document.querySelector('[data-testid="currentDay"]').textContent = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now);
    }

    updateLocalTime();

    setInterval(updateLocalTime, 1000);
});
