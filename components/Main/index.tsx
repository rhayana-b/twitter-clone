import React from 'react';
import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return  (
   <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Rhayana B.</strong>
          <span>100 Tweets</span>
        </ProfileInfo>
      </Header>
      
      {/* <ProfilePage />
      
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <MessageIcon />
      </BottomMenu>      */}
   </Container>
  )
}

export default Main;