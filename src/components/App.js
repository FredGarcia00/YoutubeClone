import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';

// const KEY = 'AIzaSyB_ZZR8ho1bO1owyp5CtzbDn8BSwsRLDA0';
const KEY = 'AIzaSyAD1r3669Nonbb6ftx_Ke7QYdQ0001GdyU';



class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit('jinjer');
    }

    onTermSubmit = async term => {
        // console.log(term);
        const response = await Youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
       this.setState({selectedVideo: video})
    }
    render() {
        return(
    <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                <VideoDetail 
                video={this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default App;