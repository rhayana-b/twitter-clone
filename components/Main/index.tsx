import React from 'react';
import ProfilePage from '../ProfilePage';
import { 
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  MessageIcon 
} from './styles';

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
      
      <ProfilePage />
      
      <BottomMenu>
        <HomeIcon className="active"/>
        <SearchIcon />
        <BellIcon />
        <MessageIcon />
      </BottomMenu>     
   </Container>
  )
}

export default Main;