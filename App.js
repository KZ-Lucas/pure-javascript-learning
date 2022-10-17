import SearchInput from "./modules/SearchInput";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    // TODO: 구현 예정
  };

  const searchInput = new SearchInput({
    $target,
    initialState: "",
  });
}
