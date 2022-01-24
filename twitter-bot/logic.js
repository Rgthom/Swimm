const Twit = require("twit");
const config = require("./config");
const pools = require("./pools");

var T = new Twit(config);

console.log("Starting the twitter search...");

const swimTweet = [];
//T.get("statuses/user_timeline", params, gotData);

function getTweets() {
  T.get("statuses/user_timeline", pools, function (err, data, response) {
    data.forEach((tweet) => {
      swimTweet.push(tweet.full_text);
    });
    console.log("this is here", swimTweet[0]);
  });
}

async function getAllTweets() {
  for (let i = 0; i < pools.length; i++) {
    await getTweets(pools[i]);
    {
      console.log(swimTweet);
    }
  }
}
getAllTweets();
/* function gotData(err, data, response) {
  data.forEach((tweet) => {
    swimTweet.push(tweet.full_text);
  });

  console.log(swimTweet);
}

*/

console.log("Closing the twitter search...");
