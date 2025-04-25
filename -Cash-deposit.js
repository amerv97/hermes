// withdrawal-fees/transfers/-Cash-deposit

// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[withdrawal-fees/transfers/-Cash-deposit] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[withdrawal-fees/transfers/-Cash-deposit] Processed input words:", inputWords);

// STEP 2: Reference training phrases
var trainingPhrases = [
  "Are there any withdrawal fees",
  "Do you charge fees for money transfers",
  "What about Cash deposit fee",
  "Is the withdrawal free",
  "Is the deposit process free or has a fee",
  "Are bank transfers free of charge",
  "What are the fees for bank transfers",
  "Is there a fee for the deposit process",
  "What about Bank transfer fees",
  "what are the bank transfer fees",
  "is there a transfer fee",
  "what about withdrawal fees"
];

// STEP 3: Define unique keywords (ensuring no overlaps)
var keywords = [
  "fee", "fees", "withdrawal", "deposit", "transfer", "charge", "free", "cash", "bankcharge", "cost"
];

// STEP 4: Match keywords from user input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[withdrawal-fees/transfers/-Cash-deposit] Matched keywords:", matchedKeywords);

// STEP 5: Apply threshold logic
if (matchedKeywords.length >= 2) {
  console.log("✅ [withdrawal-fees/transfers/-Cash-deposit] Match found.");
  attributeApi.set('matchedCase', 'withdrawal-fees/transfers/-Cash-deposit');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [withdrawal-fees/transfers/-Cash-deposit] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [withdrawal-fees/transfers/-Cash-deposit] No match but previous case exists, skipping overwrite.");
  }
}
