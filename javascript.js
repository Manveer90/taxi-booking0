function bookTaxi(city) {
    // Customize the WhatsApp link for each city
    const phoneNumber = "+919876786889"; // Replace with your business WhatsApp number
    const message = `Hello! I want to book a taxi in ${city}. Please assist me with the booking.`;
    
    // Encode the message to be URL-safe
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp API link
    const whatsappLink = `https://wa.me/${+919876786889}?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');
}
