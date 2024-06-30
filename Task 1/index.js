document.addEventListener('DOMContentLoaded', function() {
    // Function to update current time in UTC
    function updateUTCTime() {
        const now = new Date();
        const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
        const formattedTime = now.toLocaleDateString('en-US', options);
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = formattedTime;
        document.querySelector('[data-testid="currentDay"]').textContent = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now);
    }

    // Update time initially
    updateUTCTime();

    // Update time every second
    setInterval(updateUTCTime, 1000);
});