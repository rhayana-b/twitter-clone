import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  EditButton,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Rhayana B</h1>
        <h2>@rhayana.b</h2>

        <p>
          Developer at <a href="https://www.guidance.dev">@Guidance</a>
        </p>

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
          <span>
            <strong>90 </strong>Seguindo 
          </span>
          <span>
            <strong>150 </strong>Seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;