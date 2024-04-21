import React from "react";
import SearchBar from "./components/SearchBar";
import 'semantic-ui-css/semantic.min.css'
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";



class App extends React.Component{
 constructor(props){
  super(props)
  this.state = {videos: []}
 }

 onSearchSubmit = async (term) => {
 const response = await youtube.get('/search', {
    params: {
      q: term,
      part: "snippet",
      maxResults: 5,
      type: 'video',
      key: 'AIzaSyCyzjatpKmQMcC9Pxgh8X1LkhBmgzsTMyo'
    }
  })

  this.setState({videos: response.data.items});
 }

  render(){
    return(
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}


export default App;