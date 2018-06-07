import React, {Component} from 'react';
import {ReactiveBase, DataSearch} from "@appbaseio/reactivesearch"
import Results from "./components/Results"
import Header from "./components/Header"

import theme from "./theme"
import './App.css';

class App extends Component {
    state = {
      currentTopics: []
    };

    setTopics = (currentTopics) => {
        this.setState( {
            currentTopics: currentTopics || []
        })
    };

    toggleTopic = (topic) => {
        const {currentTopics} = this.state;
        const nextState = currentTopics.includes(topic)
            ? currentTopics.filter(item => item !== topic)
            : currentTopics.concat(topic);
            this.setState({
                currentTopics: nextState
            })
    };

    render() {
        return (
            <section className="container">
                <ReactiveBase
                    app="gitxplore-app"
                    credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
                    type="gitxplore-latest"
                    theme={theme}>
                    {/* Adding the DataSearch here*/}
                    <div className="flex row-reverse app-container">
                        <Header currentTopics={this.state.currentTopics} setTopics={this.setTopics} />
                        <div className="results-container">
                            <DataSearch
                                componentId="repo"
                                filterLabel="Search"
                                 // Matches column names from ElasticSearch or mongoose name.raw implies to the unindexed version of the name. Can be used for sorting etc
                                dataField={['name', 'description', 'name.raw', 'fullname', 'owner', 'topics']}
                                placeholder="Search Repos"
                                autosuggest={false}
                                iconPosition="left"
                                className="data-search-container results-container"
                                innerClass={{
                                    input: 'search-input',
                                }}
                            />
                            <Results currentTopics={this.state.currentTopics} toggleTopic={this.toggleTopic}/>
                        </div>
                    </div>
                </ReactiveBase>
            </section>
        );
    }
}

export default App;
