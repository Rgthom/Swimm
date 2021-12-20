const Twit = require('twit');
const config = require('./config');


var T = new Twit(config)

console.log('Starting the twitter bot...');



let params = {
   screen_name: 'coaching_ptp',
//    screen_name: 'WestReservoir',

    count : 2,
    exclude_replies : true,
    include_rts: false,
    tweet_mode: 'extended'
};



 // T.get('search/tweets', params, gotData);

  T.get('statuses/user_timeline', params, gotData);


/* function gotData(err, data, response){
    var tweets = data.find(function(post) {
        if(post.hasOwnProperty(`text`))
            return true;
    });
    console.log(tweets.text); 
}
*/


function gotData(err, data, response){

    data.forEach(tweet => {
            console.log(tweet);
        }
    );

console.log('end')};
