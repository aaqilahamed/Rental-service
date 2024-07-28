document.addEventListener('DOMContentLoaded', function() {
    // Mock data for available services
    const services = [
      { id: 1, name: 'Basic Tune-Up', price: 25 },
      { id: 2, name: 'Full Tune-Up', price: 50 },
      { id: 3, name: 'Flat Tire Repair', price: 15 }
    ];
  
    // Populate service list
    const serviceList = document.getElementById('service-list');
    services.forEach(service => {
      const option = document.createElement('option');
      option.text = `${service.name} - $${service.price}`;
      option.value = service.id;
      serviceList.appendChild(option);
    });
  
    // Handle form submission
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const selectedServiceId = parseInt(document.getElementById('service').value);
      const selectedService = services.find(service => service.id === selectedServiceId);
      if (selectedService) {
        // Mocking status update
        const statusMessage = document.getElementById('status-message');
        statusMessage.textContent = `Service "${selectedService.name}" booked successfully!`;
      }
    });
  });
  