const Twit = require("twit");
const config = require("./config");

var T = new Twit(config);

console.log("Starting the twitter search...");

let params = {
  screen_name: "SerpsSwimClub",
  count: 10,
  exclude_replies: true,
  include_rts: false,
  tweet_mode: "extended",
};
// T.get('search/tweets', params, gotData);



T.get("statuses/user_timeline", params, gotData);

const swimTweet = [];

function gotData(err, data, response) {
  data.forEach((tweet) => {
    swimTweet.push(tweet.full_text);
  });

  console.log(swimTweet);
}



console.log("Closing the twitter search...")





