(function() {
  function openModal() {
    const modal = document.getElementById('orderModal');
    const formContainer = document.getElementById('formContainer');
    const successMessage = document.getElementById('successMessage');

    if (modal) {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';

      // Reset form and show it, hide success message
      formContainer.style.display = 'block';
      successMessage.style.display = 'none';
      document.getElementById('orderForm').reset();
      validateInputs(); // Disable submit button initially
    } else {
      console.error('Modal element not found');
    }
  }

  function closeModal() {
    const modal = document.getElementById('orderModal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  function validateInputs() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const submitBtn = document.getElementById('submitBtn');

    if (nameInput && phoneInput && submitBtn) {
      const isValid = nameInput.value.trim() !== '' && phoneInput.value.trim() !== '';
      submitBtn.disabled = !isValid;
    }
  }

  function setupEventListeners() {
    const openModalBtn = document.getElementById('openModalBtn');
    const openModalBtn_2 = document.getElementById('openModalBtn_2');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const form = document.getElementById('orderForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    if (openModalBtn ) {
      openModalBtn.addEventListener('click', openModal);
    }
    if (openModalBtn_2 ) {
      openModalBtn_2.addEventListener('click', openModal);
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
    }

    if (nameInput && phoneInput) {
      nameInput.addEventListener('input', validateInputs);
      phoneInput.addEventListener('input', validateInputs);
    }

    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formContainer = document.getElementById('formContainer');
        const successMessage = document.getElementById('successMessage');

        // Hide form and show success message
        formContainer.style.display = 'none';
        successMessage.style.display = 'block';

        // Log form data (you can send it to a server here)
        console.log('Form submitted');
        console.log('Name:', nameInput.value);
        console.log('Phone:', phoneInput.value);

        // Close modal after a delay (optional)
        setTimeout(closeModal, 3000); // Close after 3 seconds
      });
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
      const modal = document.getElementById('orderModal');
      if (event.target == modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', setupEventListeners);

  window.openModal = openModal;
  window.closeModal = closeModal;
})();
