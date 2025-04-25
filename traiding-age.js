// trading-age

// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[trading-age] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[trading-age] Processed input words:", inputWords);

// STEP 2: Training phrases reference
var trainingPhrases = [
  "i want my children to have an account is it allowed",
  "can my kid own an account",
  "can my kids have accounts",
  "what is the minimum age for trading with you",
  "is there an age limit to be able to trade with you",
  "how old does my child has to be to own an account",
  "how old do my child have to be to own an account",
  "How old do I have to be to trade with you",
  "Are there accounts for young people",
  "Are there accounts for children",
  "can my child trade with you",
  "what is the appropriate age to have an account",
  "are children allowed to have accounts",
  "are underage allowed to have an account",
  "can minor children have a trading account",
  "can my little son have an account"
];

// STEP 3: Unique keywords
var keywords = [
  "child", "children", "kid", "minor", "son", "young", "underage",
  "age", "old", "limit", "minimum", "appropriate"
];

// STEP 4: Match keywords from input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[trading-age] Matched keywords:", matchedKeywords);

// STEP 5: Match logic
if (
  (matchedKeywords.includes("age") || matchedKeywords.includes("limit") || matchedKeywords.includes("minimum")) &&
  (matchedKeywords.includes("child") || matchedKeywords.includes("children") || matchedKeywords.includes("kid") || matchedKeywords.includes("minor") || matchedKeywords.includes("underage") || matchedKeywords.includes("young") || matchedKeywords.includes("son"))
) {
  console.log("✅ [trading-age] Match found.");
  attributeApi.set('matchedCase', 'trading-age');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [trading-age] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [trading-age] No match but previous case exists, skipping overwrite.");
  }
}
