//account-locked




// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[account-locked] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[account-locked] Processed input words:", inputWords);

// STEP 2: Define training phrases
var trainingPhrases = [
  "my account has been closed",
  "the account has been locked i want to recover it",
  "how can i recover my account again",
  "my account was locked",
  "i want to unlock my account",
  "my account is closed",
  "my account got closed",
  "my account is now closed",
  "my account is locked",
  "my account got locked",
  "how to recover my account",
  "my account is closed how to recover it",
  "how to unlock my account",
  "is there a way to unlock my account",
  "steps to unlock my account",
  "steps to recover my account",
  "steps to unlock my closed account",
  "steps to recover my closed account",
  "steps to unlock my locked account",
  "my account was closed",
  "i want to recover my account"
];

// STEP 3: Define unique keywords (carefully chosen to avoid overlap)
var keywords = ["locked", "recover", "closed", "unlock", "steps"];

// STEP 4: Perform keyword matching
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[account-locked] Matched keywords:", matchedKeywords);

// STEP 5: Determine match using keyword count
if (matchedKeywords.length >= 2) { // Threshold is 2 for now
  console.log("✅ [account-locked] Match found.");
  attributeApi.set('matchedCase', 'account-locked');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [account-locked] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [account-locked] No match but previous case exists, skipping overwrite.");
  }
}


