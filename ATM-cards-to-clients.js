// ATM-cards-to-clients

// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[ATM-cards-to-clients] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[ATM-cards-to-clients] Processed input words:", inputWords);

// STEP 2: Reference training phrases
var trainingPhrases = [
  "Does EFG Hermes issue ATM cards to clients",
  "Is there an ATM card",
  "Is the ATM card free for customers",
  "Does the company provide ATM cards",
  "Do you provide the ATM card for free",
  "Are there fees for issuing a debit card",
  "I want an ATM card"
];

// STEP 3: Define unique keywords (specific to card services)
var keywords = [
  "atm", "card", "cards", "debit", "fees", "issue", "issuing", "customers", "clients"
];

// STEP 4: Match keywords from user input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[ATM-cards-to-clients] Matched keywords:", matchedKeywords);

// STEP 5: Apply threshold logic
if (matchedKeywords.length >= 2) {
  console.log("✅ [ATM-cards-to-clients] Match found.");
  attributeApi.set('matchedCase', 'ATM-cards-to-clients');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [ATM-cards-to-clients] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [ATM-cards-to-clients] No match but previous case exists, skipping overwrite.");
  }
}
