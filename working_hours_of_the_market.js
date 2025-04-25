// working-hours-of-the-markets

// STEP 1: Get and normalize input
var input = attributeApi.get('lastReceivedTextMessage') || '';
console.log("[working-hours-of-the-markets] Raw input:", input);

input = input.toLowerCase().replace(/[^\w\s]/gi, '');
var inputWords = input.split(/\s+/);
console.log("[working-hours-of-the-markets] Processed input words:", inputWords);

// STEP 2: Reference training phrases
var trainingPhrases = [
  "starting of market hours",
  "working hour trading",
  "start time of trading",
  "session of trading guide",
  "duration of trading",
  "duration working markets",
  "duration trading",
  "What are the market hours?",
  "When do you open and when do you close",
  "Which time trading session opens",
  "Can I trade at any time",
  "Do I have a time frame to trade",
  "What's the time frame I'm allowed to trade"
];

// STEP 3: Define unique keywords
var keywords = [
  "market", "hours", "session", "opening", "closing", "duration", "frame", "timeframe", "tradingtime", "workhours"
];

// STEP 4: Match keywords from user input
var matchedKeywords = keywords.filter(function(keyword) {
  return inputWords.includes(keyword);
});
console.log("[working-hours-of-the-markets] Matched keywords:", matchedKeywords);

// STEP 5: Apply threshold logic
if (matchedKeywords.length >= 2) {
  console.log("✅ [working-hours-of-the-markets] Match found.");
  attributeApi.set('matchedCase', 'working-hours-of-the-markets');
} else {
  if (!attributeApi.get('matchedCase')) {
    console.log("❌ [working-hours-of-the-markets] No match.");
    attributeApi.set('matchedCase', 'none');
  } else {
    console.log("ℹ️ [working-hours-of-the-markets] No match but previous case exists, skipping overwrite.");
  }
}
