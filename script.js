document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const bookingList = document.getElementById('bookingList');
    const place = document.getElementById('place');
    const buttons = document.getElementsByClassName('bookBtn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            const card = buttons[i].parentElement;
            const destination = card.children[1].textContent;
            place.value = destination;
            document.getElementById('booking').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const destination = place.value;
        const date = document.getElementById('date').value;
        const people = document.getElementById('people').value;
        const newBooking = document.createElement('div');
        newBooking.className = 'booking-card';
        newBooking.innerHTML = `
            <h2>Booking Confirmed!</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Destination:</b> ${destination}</p>
            <p><b>Travel Date:</b> ${date}</p>
            <p><b>People:</b> ${people}</p>
            <button class="cancelBtn">Cancel Booking</button>
        `;
        if (bookingList.children.length == 1 &&
            bookingList.firstElementChild.textContent == "No bookings yet!") {
            bookingList.innerHTML = "";

        }
        bookingList.appendChild(newBooking);
        const cancelButton = newBooking.children[6];
        cancelButton.addEventListener('click', () => {
            bookingList.removeChild(newBooking);
            if (bookingList.children.length == 0) {
                bookingList.innerHTML = "<p>No bookings yet!</p>";
            }
        });
        bookingForm.reset();
        alert("Your trip has been booked successfully!");
    });
});