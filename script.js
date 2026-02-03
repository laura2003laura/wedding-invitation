function openPage2() {
    const page1 = document.querySelector('.page-1');
    const page2 = document.querySelector('.page-2');

    page1.classList.add('hide');
    page2.classList.add('show');
}

// Օրացույցի ստեղծում
function generateCalendar() {
    const calendar = document.querySelector('.calendar');
    const daysInMonth = 30; // Սեպտեմբեր
    const specialDay = 6;

    for (let i = 1; i <= daysInMonth; i++) {
        const dayEl = document.createElement('div');
        dayEl.classList.add('day');
        dayEl.textContent = i;
        if (i === specialDay) dayEl.classList.add('special');
        calendar.appendChild(dayEl);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generateCalendar();
});
// Հարսանիքի ամսաթիվը
const weddingDate = new Date("September 6, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

// Հաշվարկը թարմացրեք ամեն վայրկյան
setInterval(updateCountdown, 1000);

// Վերագործարկեք մեկ անգամ, որպեսզի չսպասենք 1 վայրկյան
updateCountdown();
