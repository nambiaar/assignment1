import alt from './alt';
import TwitterFeedActions from './TwitterFeedActions';

class TwitterFeedStore {
  constructor() {
    this.bindListeners({
      updateTodo: TwitterFeedActions.updateTodo
    });

    this.state = {
      todos: []
    };
  }

  updateTodo(todo) {
    this.setState({ todos: todo });
  }
}

export default alt.createStore(TwitterFeedStore, 'TwitterFeedStore');
