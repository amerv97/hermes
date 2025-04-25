//moreinfo






// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[moreinfo] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[moreinfo] Processed input words:", inputWords);

// STEP 2: Training phrases (for documentation/reference)
var trainingPhrases = [
  "who are you",
  "what this page",
  "tell me more about you",
  "what is your business",
  "what do you sell",
  "What is efg",
  "Tell me about HSB",
  "Who are EFG",
  "Are you EFG Herms",
  "What is the Herms",
  "Who are you in the world of economics",
  "Are you an investment company",
  "Are you an economic system",
  "about us",
  "us"
];

// STEP 3: Define UNIQUE keywords (avoiding overlap)
var keywords = [
  "who", "are", "you", "efg", "herms", "hsb", "business",
  "economics", "sell", "about", "company", "system", "page"
];

// STEP 4: Match keywords from user input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[moreinfo] Matched keywords:", matchedKeywords);

// STEP 5: Apply keyword threshold logic
if (matchedKeywords.length >= 2) {
  console.log("✅ [moreinfo] Match found.");
  attributeApi.set('matchedCase', 'moreinfo');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [moreinfo] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [moreinfo] No match but previous case exists, skipping overwrite.");
  }
}

