import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin: 50px 10px;
`;
const List = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;
const Copyright = styled.span`
  color: ${props => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">about</Link>
      </ListItem>
      <ListItem>
        <Link href="#">help</Link>
      </ListItem>
      <ListItem>
        <Link href="#">press</Link>
      </ListItem>
      <ListItem>
        <Link href="#">api</Link>
      </ListItem>
      <ListItem>
        <Link href="#">jobs</Link>
      </ListItem>
      <ListItem>
        <Link href="#">privacy</Link>
      </ListItem>
      <ListItem>
        <Link href="#">terms</Link>
      </ListItem>
      <ListItem>
        <Link href="#">locations</Link>
      </ListItem>
      <ListItem>
        <Link href="#"> top accounts</Link>
      </ListItem>
      <ListItem>
        <Link href="#">hashtags</Link>
      </ListItem>
      <ListItem>
        <Link href="#">language</Link>
      </ListItem>
    </List>
    <Copyright>
      &copy; {new Date().getFullYear()} Instaclone from Jiwon
    </Copyright>
  </Footer>
);
