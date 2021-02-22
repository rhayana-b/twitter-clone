import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return  (
   <Container>
      <Header>
        <button>
            <BackIcon />
        </button>

        <ProfileInfo>
            <strong>Name</strong>
            <span>xxx tweets</span>
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