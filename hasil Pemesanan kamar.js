const form = document.getElementById('bookingForm');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

    // Ambil nilai dari form
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const roomType = document.getElementById('roomType').value;
      const checkIn = document.getElementById('checkIn').value;
      const checkOut = document.getElementById('checkOut').value;

      // Isi data ke konfirmasi
      document.getElementById('confirmName').textContent = name;
      document.getElementById('confirmEmail').textContent = email;
      document.getElementById('confirmPhone').textContent = phone;
      document.getElementById('confirmRoom').textContent = roomType;
      document.getElementById('confirmCheckIn').textContent = checkIn;
      document.getElementById('confirmCheckOut').textContent = checkOut;

      // Tampilkan konfirmasi dan sembunyikan form
      form.classList.add('hidden');
      confirmation.classList.remove('hidden');
    });

    document.getElementById('editButton').addEventListener('click', function () {
      // Tampilkan kembali form dan sembunyikan konfirmasi
      form.classList.remove('hidden');
      confirmation.classList.add('hidden');
    });