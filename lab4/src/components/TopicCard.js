import React from 'react';
import styled from 'styled-components';

function TopicCard(props) {
    return (
        <div className={`${props.className} ${props.isSelected ? 'selected' : ''} user row`} onClick={props.onClick}>
            <span className="number">{props.number}.</span>
            <span className="user-name">{props.name}</span>
        </div>
    );
}



export default styled(TopicCard) `
    display: flex;
    align-items: center;
    padding: 10px 10px;
    margin: 0;
    cursor: pointer;
    transition: 0.3s;
    padding-left: 20px;

    &.selected {
        background-color: gainsboro;
    }

    &:hover:not(.selected) {
        background-color: ghostwhite;
    }

    span.number {
        margin-right: 5px;
    }

`
