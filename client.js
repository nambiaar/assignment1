'use strict';

const Twitter = require('twitter');
const http = require('http');
const url = require("url");

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 1337 });

const client = new Twitter({
  consumer_key: 'QtrMMDF7yenbQ1fus6DSpPOh9',
  consumer_secret: 'iCGkutEca52yIWxckiZPu7WQEgXbYAKU6nRGq2cnL4OzJsDoR5',
  access_token_key: '52824394-uIfJepi7wF4S2ttrzj2Rgp3OUKvPTRKOi3USTQpkd',
  access_token_secret: 'ZTk0hWSM5IpmBHUIzFsLtvLv1BQts8LxyvHbzAThVrgqx'
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
		var handle = 'nodejs';

		if (request.params.name) {
			handle = encodeURIComponent(request.params.name);
		}
		var params = {screen_name: handle, count: 2};

		var i, tweet = [];

		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if(error) throw error;

			for (i = 0; i < tweets.length; i++) {
				tweet[i]= tweets[i].text;
			}

			reply(tweet);
		});
	}
});

server.start((err) => {

	if (err) {
		throw err;
	}
	console.log('Server running at:', server.info.uri);
});
