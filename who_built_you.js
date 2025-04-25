// who-built-you

// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[who-built-you] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[who-built-you] Processed input words:", inputWords);

// STEP 2: Training phrases reference
var trainingPhrases = [
  "Who Built you",
  "who are Programmers",
  "who are developer",
  "what about chatbot developers",
  "who is your developer",
  "who is your maker",
  "Who trained you",
  "Who taught you",
  "who learned you"
];

// STEP 3: Define unique keywords (avoiding any conflict)
var keywords = [
  "built", "developer", "developers", "programmers", "maker", "trained", "taught", "learned", "creator", "engineer", "coder"
];

// STEP 4: Match keywords from input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[who-built-you] Matched keywords:", matchedKeywords);

// STEP 5: Threshold logic
if (matchedKeywords.length >= 2) {
  console.log("✅ [who-built-you] Match found.");
  attributeApi.set('matchedCase', 'who-built-you');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [who-built-you] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [who-built-you] No match but previous case exists, skipping overwrite.");
  }
}
