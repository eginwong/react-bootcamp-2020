import { useState, useEffect } from 'react';
import { fetchTopicPost } from '../api';

export const useTopicPostHook = (selectedTopicId) => {
    const [topicPost, setTopicPost] = useState(null);

    useEffect(() => {
        if(selectedTopicId) {
            fetchTopicPost(selectedTopicId)
            .then(topicPost => setTopicPost(topicPost))
        }
    }, [selectedTopicId]);
    return topicPost;
}