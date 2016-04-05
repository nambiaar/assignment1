import React, {Component} from 'react';
import Twitter from 'twitter';

class TwitterFeed extends Component {
	
	constructor() {
	super();
	this.state = {tweets: []};
	}
	
	static getStores() {
	    
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

		var i;

		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if(error) throw error;

			for (i = 0; i < tweets.length; i++) {
				this.state.tweets[i] += tweets[i].text + '\n';
			}
		});

  	}


	render() {
		return (
 <ul>
        {this.props.todos.map((todo) => {
          return (
            <li key={todo.id}>{todo.text}</li>
          );
        })}
      </ul>

			<ul className="list-group">

				<ul class="list-group">
				    <li class="list-group-item">Cras justo odio</li>
				    <li class="list-group-item">Dapibus ac facilisis in</li>
				    <li class="list-group-item">Morbi leo risus</li>
				    <li class="list-group-item">Porta ac consectetur ac</li>
				    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
			</ul>
		);
	}
}

export default TwitterFeed
