// transfer-money-back-to-my-bank-account

// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[transfer-money-back-to-my-bank-account] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[transfer-money-back-to-my-bank-account] Processed input words:", inputWords);

// STEP 2: Training phrases reference
var trainingPhrases = [
  "How can I transfer money back to my bank account",
  "Is it allowed to transfer money back to my account",
  "I want to transfer cash to my account",
  "Is it possible to transfer money to my account through Hermes One",
  "I want to transfer money back to my bank account",
  "What is the maximum amount to transfer to my account"
];

// STEP 3: Unique keywords
var keywords = [
  "back", "bank", "cash", "hermes", "maximum", "amount", "transfer"
];

// STEP 4: Match keywords from input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[transfer-money-back-to-my-bank-account] Matched keywords:", matchedKeywords);

// STEP 5: Match logic
if (
  (matchedKeywords.includes("back") || matchedKeywords.includes("hermes")) &&
  (matchedKeywords.includes("bank") || matchedKeywords.includes("cash") || matchedKeywords.includes("amount"))
) {
  console.log("✅ [transfer-money-back-to-my-bank-account] Match found.");
  attributeApi.set('matchedCase', 'transfer-money-back-to-my-bank-account');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [transfer-money-back-to-my-bank-account] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [transfer-money-back-to-my-bank-account] No match but previous case exists, skipping overwrite.");
  }
}
