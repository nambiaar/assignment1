import alt from './alt';

import Twitter from 'twitter';

class TwitterFeedActions {
  	updateTodo(id, text) {

		const client = new Twitter({
		  consumer_key: 'QtrMMDF7yenbQ1fus6DSpPOh9',
		  consumer_secret: 'iCGkutEca52yIWxckiZPu7WQEgXbYAKU6nRGq2cnL4OzJsDoR5',
		  access_token_key: '52824394-uIfJepi7wF4S2ttrzj2Rgp3OUKvPTRKOi3USTQpkd',
		  access_token_secret: 'ZTk0hWSM5IpmBHUIzFsLtvLv1BQts8LxyvHbzAThVrgqx'
		});

		var handle = 'nodejs';

		if (request.params.name) {
			handle = encodeURIComponent(request.params.name);
		}
		var params = {screen_name: handle, count: 10};

		var i, tweet = [];

		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if(error) throw error;

			for (i = 0; i < tweets.length; i++) {
				tweet[i] += tweets[i].text + '\n';
			}
		});


		return { tweets }
	}
}

export default alt.createActions(TwitterFeedActions);
