// Apps-download-&-Using-mobile/tablet




// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[Apps-download-&-Using-mobile/tablet] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[Apps-download-&-Using-mobile/tablet] Processed input words:", inputWords);

// STEP 2: Reference training phrases
var trainingPhrases = [
  "How do I download EFG Hermes Mobile apps",
  "I want to download EFG Hermes Mobile apps",
  "Can I manage my account or trade from my smartphone or tablet",
  "How do I download EFG Hermes Application",
  "Can I trade over the phone",
  "How can I download the application for the company",
  "APP",
  "how to download your applications",
  "what's your apps",
  "your applications please",
  "can we trade through phone",
  "can we trade through tablet",
  "trading through mobile"
];

// STEP 3: Define unique keywords (no overlap with other cases)
var keywords = [
  "app", "apps", "application", "download", "mobile", 
  "tablet", "smartphone", "phone", "install", 
];

// STEP 4: Match keywords from user input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[Apps-download-&-Using-mobile/tablet] Matched keywords:", matchedKeywords);

// STEP 5: Apply threshold logic
if (matchedKeywords.length >= 1) {
  console.log("✅ [Apps-download-&-Using-mobile/tablet] Match found.");
  attributeApi.set('matchedCase', 'Apps-download-&-Using-mobile/tablet');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [Apps-download-&-Using-mobile/tablet] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [Apps-download-&-Using-mobile/tablet] No match but previous case exists, skipping overwrite.");
  }
}
