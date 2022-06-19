const express = require('express');
const Twit = require("twit");
const twit = new Twit(require("./config.js"));
const programmingSearchRecent = {
    q: "#photography",
    count: 25,
    result_type: "recent"
};
const programmingSearchPopular = {
    q: "#photography",
    count: 25,
    result_type: "popular"
};
const bitcoinSearchRecent = {
    q: "#naturephotography",
    count: 25,
    result_type: "recent"
};
const bitcoinSearchPopular = {
    q: "#naturephotography",
    count: 25,
    result_type: "popular"
};
const app = express();
const path = require('path');
const router = express.Router();
const port = 80;
var retweets = 0;


const retweetLatest = async () => {
    try {
        twit.get("search/tweets", programmingSearchRecent, (error, data) => {
            if (error) {
                console.log(error.message);
            } else {
                for(extweet in data.statuses) {
                    tweet = data.statuses[extweet];
                    retweetId = tweet.id_str;
                    twit.post("statuses/retweet/" + retweetId, {}, (error, response) => {
                        if (error) {
                            console.log(error.message);
                        } else if (response) {
                            retweets += 1;
                            console.log("Success! Retweeted!");
                        }
                    });
                }
            }
        });
        twit.get("search/tweets", programmingSearchPopular, (error, data) => {
            if (error) {
                console.log(error.message);
            } else {
                for(extweet in data.statuses) {
                    tweet = data.statuses[extweet];
                    retweetId = tweet.id_str;
                    twit.post("statuses/retweet/" + retweetId, {}, (error, response) => {
                        if (error) {
                            console.log(error.message);
                        } else if (response) {
                            retweets += 1;
                            console.log("Success! Retweeted!");
                        }
                    });
                }
            }
        });
        twit.get("search/tweets", bitcoinSearchRecent, (error, data) => {
            if (error) {
                console.log(error.message);
            } else {
                for(extweet in data.statuses) {
                    tweet = data.statuses[extweet];
                    retweetId = tweet.id_str;
                    twit.post("statuses/retweet/" + retweetId, {}, (error, response) => {
                        if (error) {
                            console.log(error.message);
                        } else if (response) {
                            retweets += 1;
                            console.log("Success! Retweeted!");
                        }
                    });
                }
            }
        });
        twit.get("search/tweets", bitcoinSearchPopular, (error, data) => {
            if (error) {
                console.log(error.message);
            } else {
                for(extweet in data.statuses) {
                    tweet = data.statuses[extweet];
                    retweetId = tweet.id_str;
                    twit.post("statuses/retweet/" + retweetId, {}, (error, response) => {
                        if (error) {
                            console.log(error.message);
                        } else if (response) {
                            retweets += 1;
                            console.log("Success! Retweeted!");
                        }
                    });
                }
            }
        });
    } catch (error) {
        console.log(error)
    }
};

retweetLatest();

// Trying not to spam sorry Twitter!
setInterval(retweetLatest, 1000 * 60 * 30);

router.get('/',function(req,res){
  res.set('Cache-Control', 'public, max-age=3153600000');
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/api/',function(req,res){
  res.send(String(retweets));
});

app.use('/', router);

app.listen(port);