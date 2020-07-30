import React, { useState, useEffect} from 'react';
import { fetchTopics } from './api';
import './App.css';
import Dashboard from './components/Dashboard';
import TopicPost from './components/TopicPost';
import TopicsList from './components/TopicsList';

function App() {

  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then(topics => setTopics(topics))
  })

  const renderTopicsList = () => {
    if (topics && topics.length !== 0) {
       return (
        <TopicsList
          topics={topics}
          onClickTopic={onClickTopicCard}
          selectedTopicId={selectedTopicId}
        />
        )
    }
  }

  const renderTopicPost = () => {
    if (selectedTopicId) {
      return (
        <TopicPost selectedTopicId={selectedTopicId}/>
      )
    }
  }


  const onClickTopicCard = (selectedTopicId) => () => {
    setSelectedTopicId(selectedTopicId)
  }

  return (
    <Dashboard>
        {renderTopicsList()}
        {renderTopicPost()}
    </Dashboard>
  );
}

export default App;
