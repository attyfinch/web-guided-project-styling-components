import React from 'react';
import styled, { keyframes } from 'styled-components';

/* .friend {
  width: 60%;
  display: flex;
  justify-content: space-between;
} */

const kf = keyframes`
50% {
  transform: scale(1.5);
}

100% {
  transform: sclae(1);
  opacity: 1;
}
`

const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;
  color: ${theme => theme.theme.white};
  background-color: ${pr => pr.theme.primaryColor};
  transition: all .2s ease-in-out;
  &:hover {
    transition: all .2s ease-in-out;
    background-color: ${color => color.theme.secondaryColor};
  }

  &::before {
    content: "${pr => pr.bestie ? '🤗' : '🍤'}"
  }

  transform: scale(1);
  opacity: 0;
  animation: ${kf} 0.3s ease-in-out forwards;
`

export default function Friend({ info, action, bestie }) {
  return (
    <StyledFriend bestie={bestie}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
