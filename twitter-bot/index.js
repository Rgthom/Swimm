const Twit = require('twit');
const config = require('./config');


var T = new Twit(config)

console.log('Starting the twitter bot...');



let params = {
    screen_name: 'Brockwell_Lido',
    count : 50,
    start_time: '2021-12-17T16:30:10.000Z'
};


T.get('statuses/user_timeline', params, gotData);


function gotData(err, data, response){
    console.log(data);
}

console.log('end');
