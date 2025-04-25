//wallet-sale







// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[wallet-sale] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[wallet-sale] Processed input words:", inputWords);

// STEP 2: Define training phrases and keywords
var phrases = [
  "sell a part of wallet",
  "sell my wallet",
  "how can i sell my portfolio",
  "how can i sell my wallet",
  "sell my cash"
];

// xtended keywords (including common variants)
var keywords = ["sell", "wallet", "portfolio", "portofolio", "cash", "part"];

// STEP 3: Fuzzy keyword match
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.some(function(word) {
    return word.includes(keyword) || keyword.includes(word);
  });
});

console.log("[wallet-sale] Matched keywords:", matchedKeywords);

// STEP 4: Set threshold and update attribute
if (matchedKeywords.length >= 2) {
  attributeApi.set('matchedCase', 'wallet-sale');
  console.log("✅ [wallet-sale] Case matched.");
} else {
  if (!attributeApi.get('matchedCase') || attributeApi.get('matchedCase') === 'none') {
    attributeApi.set('matchedCase', 'none');
    console.log("❌ [wallet-sale] No match.");
  }
}



