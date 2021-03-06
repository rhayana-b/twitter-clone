import styled, { css } from 'styled-components';

import { Repeat, Favorite, MessageRounded } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;

export const RetweetIcon = styled(Repeat)`
  width: 16px;
  height: 16px;

  margin-left: 35px;
  margin-right: 9px;

  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);

  left: 0;
  top: 0;
  position: absolute;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span, time {
    color: var(--gray);
  }

  > strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const TextContent = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: var(--outline);
  border-radius: 14px;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const IconButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%; 

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    color: var(--gray);
    > svg path {
      fill: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);
    > svg path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);
    > svg {
      fill: var(--like);
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;

export const ReplyButton = styled(MessageRounded)`
  ${iconCSS}
`;

export const RetweetButton = styled(Repeat)`
  ${iconCSS}
`;

export const LikeButton = styled(Favorite)`
  ${iconCSS}
`;
