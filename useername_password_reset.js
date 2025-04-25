// Username/Password-Reset

// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[Username/Password-Reset] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[Username/Password-Reset] Processed input words:", inputWords);

// STEP 2: Training phrases reference
var trainingPhrases = [
  "What the procedure to reset a username and password",
  "How can I change my password",
  "What are the steps to reset the password",
  "I want steps to change the username and password",
  "How can I change the username",
  "i want to change the username",
  "how can reset my password on website",
  "Reset",
  "Password Reset",
  "Reset password"
];

// STEP 3: Unique keywords (no conflicts with other cases)
var keywords = [
  "username", "password", "reset", "change", "steps", "procedure", "recovery", "credentials", "forgot", "login"
];

// STEP 4: Match keywords from input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[Username/Password-Reset] Matched keywords:", matchedKeywords);

// STEP 5: Match logic
if (matchedKeywords.length >= 2) {
  console.log("✅ [Username/Password-Reset] Match found.");
  attributeApi.set('matchedCase', 'Username/Password-Reset');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [Username/Password-Reset] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [Username/Password-Reset] No match but previous case exists, skipping overwrite.");
  }
}
