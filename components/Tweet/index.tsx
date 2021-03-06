import React from 'react';

import { Container, Retweeted, RetweetIcon, Body, Avatar, Content, Header, Dot, TextContent, ImageContent, IconButtons, Status, ReplyButton, RetweetButton, LikeButton  } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>PrograMaria</strong>
            <span>@programaria</span>
            <Dot />
            <time>3 de fev</time>
          </Header>
          <TextContent>
            Lugar de mulher é onde ela quiser... inclusive na #programação!
          </TextContent>
          <ImageContent />
          
          <IconButtons>
            <Status>
              <ReplyButton />
              5
            </Status>
            <Status>
              <RetweetButton />
              18
            </Status>
            <Status>
              <LikeButton />
              12
            </Status>
          </IconButtons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;