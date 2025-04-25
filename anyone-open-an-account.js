// anyone-open-an-account




// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[anyone-open-an-account] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[anyone-open-an-account] Processed input words:", inputWords);

// STEP 2: Reference training phrases
var trainingPhrases = [
  "can anyone open an account with efg hermes",
  "is there a minimum amount required to open the account",
  "what are the conditions for opening an account",
  "what is the minimum amount to start opening a new account",
  "can all people open a trading account",
  "can i open an account",
  "are there restrictions to open an account"
];

// STEP 3: Define **unique keywords**
var keywords = [
  "open", "minimum", "amount", "required", "conditions", "restrictions",
  "eligibility", "start", "qualify", "accessible", "who", "everyone", "anyone"
];

// STEP 4: Match keywords from input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[anyone-open-an-account] Matched keywords:", matchedKeywords);

// STEP 5: Apply threshold logic
if (matchedKeywords.length >= 2) {
  console.log("✅ [anyone-open-an-account] Match found.");
  attributeApi.set('matchedCase', 'anyone-open-an-account');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [anyone-open-an-account] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [anyone-open-an-account] No match but existing case already set.");
  }
}
