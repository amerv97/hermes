// act-on-behalf





// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[act-on-behalf] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[act-on-behalf] Processed input words:", inputWords);

// STEP 2: Reference training phrases
var trainingPhrases = [
  "is it ok to give someone power of attorney to act on my behalf if so what are the requirements",
  "can i make a power of attorney for someone",
  "what is required for a power of attorney for someone",
  "is it ok to give someone power of attorney to act on my behalf",
  "can my brother act on behalf"
];

// STEP 3: Define unique keywords
var keywords = [
  "power", "attorney", "behalf", "requirements", "represent", "authorized", "delegate",
  "authorization", "act", "authority", "proxy", "permission"
];

// STEP 4: Match keywords from user input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[act-on-behalf] Matched keywords:", matchedKeywords);

// STEP 5: Apply threshold logic
if (matchedKeywords.length >= 2) {
  console.log("✅ [act-on-behalf] Match found.");
  attributeApi.set('matchedCase', 'act-on-behalf');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [act-on-behalf] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [act-on-behalf] No match but previous case exists, skipping overwrite.");
  }
}
