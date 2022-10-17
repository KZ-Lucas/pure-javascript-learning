import SearchInput from "./modules/SearchInput.js";
import Suggestion from "./modules/Suggestion.js";
import { fetchTodo } from "./services/api.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    suggestion.setState({
      items: this.state.fetchedLanguages,
    });
  };

  const searchInput = new SearchInput({
    $target,
    initialState: "",
    onChange: async (keyword) => {
      const todo = await fetchTodo(keyword.length);

      this.setState({
        fetchedLanguages: this.state.fetchedLanguages.concat(todo),
      });
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: {
      items: [],
    },
  });
}
