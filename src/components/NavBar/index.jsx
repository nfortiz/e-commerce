import React from 'react';
import {
  Info,
  Group,
  InfoList,
  InfoItem,
  Search,
  NavSearch,
  SearchInput,
  SearchButton } from './styles';

function NavBar() {
  return (
    <>
      <Info>
        <Group content='space-between'>
          <InfoList>
            <InfoItem><small>(+800) 123 456 7890</small></InfoItem>
            <InfoItem><small>manager@shop.com</small></InfoItem>
          </InfoList>
          <InfoList>
            <InfoItem><small>Location store</small></InfoItem>
            <InfoItem><small>Blog</small></InfoItem>
            <InfoItem><small>Guarantee</small></InfoItem>
            <InfoItem><small>Payment</small></InfoItem>
            <InfoItem><small>Delivery</small></InfoItem>
            <InfoItem><small>Register or Sign in</small></InfoItem>

          </InfoList>
        </Group>
      </Info>
      <Search>
        <Group content='space-between'>
          <h1>YOUSHOP</h1>
          <small>
            Description of your
            online store
          </small>
          <NavSearch>
            <SearchInput
              placeholder='Search'
            />
            <SearchButton>B</SearchButton>
          </NavSearch>
        </Group>
      </Search>

    </>
  );
}

export default NavBar;
