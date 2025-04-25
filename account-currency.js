//account-currency





// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[account-currency] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[account-currency] Processed input words:", inputWords);

// STEP 2: Reference training phrases
var trainingPhrases = [
  "can i choose my account currency",
  "is it possible to open an account in gbp",
  "is it possible to open eur account",
  "is it possible to open an account in british pounds",
  "is it a condition for trading in the egyptian market to open an account in egyptian pounds",
  "how do i choose my account currency",
  "is it possible to open an account in euros",
  "should you trade in dollar shares you must have us dollars in your account",
  "can i define my account currency"
];

// STEP 3: Define unique keywords
var keywords = [ "currency", "gbp", "eur", "euro", "dollar", "usd", "pounds",
  "define", "choose", "open", "egyptian", "market"
];

// STEP 4: Match keywords from user input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[account-currency] Matched keywords:", matchedKeywords);

// STEP 5: Apply match threshold logic
if (matchedKeywords.length >= 1) {
  console.log("✅ [account-currency] Match found.");
  attributeApi.set('matchedCase', 'account-currency');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [account-currency] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [account-currency] No match but previous case exists, skipping overwrite.");
  }
}
