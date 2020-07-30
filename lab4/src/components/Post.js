import React from 'react';
import styled from 'styled-components';

function Post(props) {
    return (
        <div className={`${props.className} post`}>
            <div className="body">
                {props.body && props.body.map(paragraph => (
                    <div className="paragraph">
                        {paragraph}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default styled(Post) `
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  .paragraph {
      margin: 20px 0;
  }
`
