import React from 'react';
import styled from 'styled-components';
import PostBody from './TopicPostBody';
import PostHeader from './TopicPostHeader';
import { useTopicPostHook } from '../hooks';

export function TopicPost(props) {

    let topicPost = useTopicPostHook(props.selectedTopicId);
    let title = topicPost ? topicPost.title : null;
    let author = topicPost ? topicPost.postedBy : null;
    let content = topicPost ? topicPost.body : null;

    return (
        <div className={`${props.className} user-posts`}>
            <PostHeader title={title} author={author} />
            <PostBody content={content} />
        </div>
    );
}


export default styled(TopicPost) `
  display: flex;
  flex-direction: column;
  margin: 20px;
  position: relative;
  padding-left: 420px;
`