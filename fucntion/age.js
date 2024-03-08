// Replace age with the actual age value
const age = 25;

// Regular ticket fare
let ticketFare = 800;

// Ticket fare calculation based on age
if (age < 10) {
    // Children (age < 10): free
    ticketFare = 0;
} else if (age >= 60) {
    // Senior citizens (age >= 60) gets a 15% discount
    ticketFare *= 0.85;
} else {
    // Regular ticket fare for others
    // Students get a 50% discount
    // Applying the discount for both students and regular cases
    ticketFare *= 0.5;
}

console.log("Ticket Fare: " + ticketFare + " tk");
