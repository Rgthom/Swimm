const Twit = require("twit");
const config = require("./config");
//const pools = require("./pools");

var T = new Twit(config);

(pools = {
  screen_name: "SerpsSwimClub",
  count: 2,
  exclude_replies: true,
  include_rts: false,
  tweet_mode: "extended",
}),
  console.log("Starting the twitter search...");

const swimTweet = [];
//T.get("statuses/user_timeline", params, gotData);

function getTweets() {
  return new Promise((resolve, reject) => {
    let pools = {
      screen_name: "SerpsSwimClub",
      count: 2,
      exclude_replies: true,
      include_rts: false,
      tweet_mode: "extended",
    };
    T.get("statuses/user_timeline", pools, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

async function displayTweets() {
  try {
    const data = await getTweets();
    tweets = data;
    console.log("we got the tweets");
    console.log(tweets[0].full_text);
  } catch (error) {
    console.log(error);
  }
}

displayTweets();

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

console.log("Closing the twitter search...");
