const Twit = require("twit");
const config = require("./config");
const params = require("./params");

var T = new Twit(config);

console.log("Starting the twitter search...");

const swimTweet = [];
//T.get("statuses/user_timeline", params, gotData);

function getTweets() {
  T.get("statuses/user_timeline", params, function (err, data, response) {
    data.forEach((tweet) => {
      swimTweet.push(tweet.full_text);
    });
    console.log(swimTweet);
  });
}
getTweets();

/* function gotData(err, data, response) {
  data.forEach((tweet) => {
    swimTweet.push(tweet.full_text);
  });

  console.log(swimTweet);
}

*/

console.log("Closing the twitter search...");
