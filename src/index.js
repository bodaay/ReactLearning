import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyBF0ZO7Ut3T_GqemzqZmbBiGLj5vw9_Lbk';





class App extends Component{
    constructor (props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        YTSearch({key:API_KEY,term: 'surfboards'},(videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); //we can as well write it as: this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
            Hi!
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect={ (selectedVideo) => this.setState({selectedVideo})}
            videos={this.state.videos} />
            </div>
            );
    }
}




ReactDom.render(<App />,document.querySelector(".container"));