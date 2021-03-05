import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        {/* <EditButton>Editar perfil</EditButton> */}
        <h1>Rhayana B</h1>
        <h2>@rhayana.b</h2>

        <p>Developer at <a href="https://www.guidance.dev">@Guidance</a></p>

        <ul>
          <li>
            <LocationIcon />
            Uberlândia, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de abril de 1993
          </li>
        </ul>

        <Followage>
          <span>seguindo 
            <strong>94</strong>
          </span>
          <span>
            <strong>150 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  )
}

export default ProfilePage;