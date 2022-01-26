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
  T.get("statuses/user_timeline", pools, function (err, data, response) {
    //.log(data[4].full_text);
    data.forEach((tweet) => {
      swimTweet.push(tweet.full_text);
    });
    console.log(swimTweet);
  });
}

getTweets();

/*

function gotData(err, data, response) {
  data.forEach((tweet) => {
    swimTweet.push(tweet.full_text);
  });

  console.log(swimTweet);
}


console.log("Closing the twitter search...");
