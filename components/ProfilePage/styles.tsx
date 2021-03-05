import styled, { css } from 'styled-components';
import { Cake, LocationOn} from '../../styles/Icons';

export const Container = styled.div``;
export const Banner = styled.div``;
export const Avatar = styled.div``;
export const ProfileData = styled.div``;
export const Followage = styled.div``;

const iconsCSS = css`
  width: 20px;
  height: 20px;

  fill: var(--gray);
`;

export const LocationIcon = styled.div(LocationOn)`${iconsCSS}`;
export const CakeIcon = styled.div(Cake)`${iconsCSS}`;