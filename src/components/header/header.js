import React, {Component} from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.View`
  background-color: ${({theme}) => theme.bgColor};
  padding: ${({theme}) => theme.defaultPadding};
`;

const Heading = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.fontSize.large};
`;

export const Header = ({title}) => (
  <HeaderWrapper>
    <Heading>{title}</Heading>
  </HeaderWrapper>
);
