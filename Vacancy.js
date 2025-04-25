// Vacancy

// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[Vacancy] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[Vacancy] Processed input words:", inputWords);

// STEP 2: Reference training phrases
var trainingPhrases = [
  "want to work",
  "I need job opportunity",
  "Do have job vacancy",
  "i wish to join your team",
  "I need to work with you",
  "any career opportunity",
  "can I send my CV",
  "Where can I send my resume",
  "vac",
  "looking for vac",
  "want vac"
];

// STEP 3: Define unique keywords (no conflict with others)
var keywords = [
  "job", "vacancy", "vac", "career", "resume", "cv", "opportunity", "join", "team", "work", "hiring", "employment"
];

// STEP 4: Match keywords from input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[Vacancy] Matched keywords:", matchedKeywords);

// STEP 5: Apply threshold logic
if (matchedKeywords.length >= 2) {
  console.log("✅ [Vacancy] Match found.");
  attributeApi.set('matchedCase', 'Vacancy');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [Vacancy] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [Vacancy] No match but previous case exists, skipping overwrite.");
  }
}
