// transfers-in-another-currency

// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[transfers-in-another-currency] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[transfers-in-another-currency] Processed input words:", inputWords);

// STEP 2: Training phrases reference
var trainingPhrases = [
  "Can I perform cash transfers in a currency other than my account currency",
  "I have a dollar account. Can I make a transfer in Egyptian pounds",
  "Are transfers allowed in a currency other than the currency of my account",
  "Can I trade in the Egyptian market in a currency other than the Egyptian pound",
  "Are transfers in any currency other than the account currency",
  "I deposited in the Egyptian currency",
  "am I allowed to trade on dollar stocks"
];

// STEP 3: Unique keywords (no conflicts with other cases)
var keywords = [
  "currency", "other", "than", "account", "transfer", "transfers", "egyptian", "dollar", "pound", "allowed"
];

// STEP 4: Match keywords from input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[transfers-in-another-currency] Matched keywords:", matchedKeywords);

// STEP 5: Match logic
if (matchedKeywords.length >= 2) {
  console.log("✅ [transfers-in-another-currency] Match found.");
  attributeApi.set('matchedCase', 'transfers-in-another-currency');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [transfers-in-another-currency] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [transfers-in-another-currency] No match but previous case exists, skipping overwrite.");
  }
}
