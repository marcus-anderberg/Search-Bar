import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = { images: [] }

  onSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID e311ef393325c717a87de8f962753252791a8546733ace8328f48ff4f15f9805"
      }
    }).then((response) => {
        console.log(response.data.results);
        this.setState({
            images: response.data.results
        });
        
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}
export default App;
