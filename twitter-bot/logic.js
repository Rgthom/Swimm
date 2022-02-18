const Twit = require("twit");
const config = require("./config");
const handles = require("./handles");

const T = new Twit(config);

console.log("Starting the twitter search...");

// const swimTweet = [];
//T.get("statuses/user_timeline", params, gotData);

/**
 * Retrieves tweets from the specified Twitter handle
 *
 * @param {string} handle A single Twitter handle
 * @returns {Twit.Response} An array containing the tweets from the
 * specified handle
 */
async function getTweets(handle) {
  const params = {
    screen_name: handle,
    count: 2,
    exclude_replies: true,
    include_rts: false,
    tweet_mode: "extended",
  };

  const request = await T.get("statuses/user_timeline", params);
  const handleTweets = request.data;

  return handleTweets;
}

/**
 * Logs the tweets from every Twitter handle in handles.js
 */
async function displayTweets() {
  // Run all requests in parallell
  const promises = handles.map(getTweets);
  const tweetsByHandle = await Promise.all(promises);

  console.log("We got the tweets");

  // Log all tweets prefixed by the handle each came from
  tweetsByHandle.forEach((handleTweets, i) => {
    handleTweets.forEach((tweet) => {
      console.log(`\x1b[30m\x1b[42m@${handles[i]}:\x1b[0m ${tweet.full_text}`);
    });
  });
}

displayTweets().catch(console.log);

console.log("Closing the twitter search...");

/*

function getTweets() {
  T.get("statuses/user_timeline", pools, function (err, data, response) {
    //.log(data[4].full_text);
    data.forEach((tweet) => {
      swimTweet.push(tweet.full_text);
    });
    console.log(typeof data);
  });
}

getTweets();

/*

/*

function gotData(err, data, response) {
  data.forEach((tweet) => {
    swimTweet.push(tweet.full_text);
  });

  console.log(swimTweet);
}

*/
