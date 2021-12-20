const Twit = require('twit');
const config = require('./config');


var T = new Twit(config)

console.log('Starting the twitter bot...');



let params = {
    screen_name: 'coaching_ptp',


    count : 2,
    exclude_replies : true,
    include_rts: false,
    tweet_mode: 'extended'
};



 // T.get('search/tweets', params, gotData);

  T.get('statuses/user_timeline', params, gotData);

const swimTweet = ['Example'];

function gotData(err, data, response){

    data.forEach(tweet => { 
        swimTweet.push(tweet.full_text);
        }
        
    );

console.log(swimTweet[0])};

console.log('This search has finished')