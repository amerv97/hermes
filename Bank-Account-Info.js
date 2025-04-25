// Bank-Account-Info

// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[Bank-Account-Info] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[Bank-Account-Info] Processed input words:", inputWords);

// STEP 2: Reference training phrases
var trainingPhrases = [
  "How to add information in the bank account",
  "I want to edit my information on the online bank account",
  "I want to know my bank account info",
  "What are the steps to write information in the online bank account",
  "info",
  "information"
];

// STEP 3: Define unique contextual keywords (carefully avoiding broad "account" conflicts)
var keywords = [
  "information", "info", "edit", "add", "write", "online", "bank", "details", "update"
];

// STEP 4: Conditional keyword for “account”
if (input.includes("account") && (
    input.includes("information") ||
    input.includes("info") ||
    input.includes("edit") ||
    input.includes("add") ||
    input.includes("write") ||
    input.includes("online") ||
    input.includes("update")
)) {
  keywords.push("account");
}

// STEP 5: Match keywords from user input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[Bank-Account-Info] Matched keywords:", matchedKeywords);

// STEP 6: Apply threshold logic
if (matchedKeywords.length >= 2) {
  console.log("✅ [Bank-Account-Info] Match found.");
  attributeApi.set('matchedCase', 'Bank-Account-Info');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [Bank-Account-Info] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [Bank-Account-Info] No match but previous case exists, skipping overwrite.");
  }
}
