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

import PhoneCall from '../../assets/icons/PhoneCall';
import Email from '../../assets/icons/Email';
import Pin from '../../assets/icons/Pin';
import Blogging from '../../assets/icons/Blogging';
import Shield from '../../assets/icons/Shield';
import CreditCard from '../../assets/icons/CreditCard';
import DeliveryTruck from '../../assets/icons/DeliveryTruck';
import User from '../../assets/icons/User';

function NavBar() {
  return (
    <>
      <Info>
        <Group content='space-between'>
          <InfoList>
            <InfoItem>
              <PhoneCall />
              <small>(+800) 123 456 7890</small>
            </InfoItem>
            <InfoItem>
              <Email />
              <small>manager@shop.com</small>
            </InfoItem>
          </InfoList>
          <InfoList>
            <InfoItem>
              <Pin />
              <small>Location store</small>
            </InfoItem>
            <InfoItem>
              <Blogging />
              <small>Blog</small>
            </InfoItem>
            <InfoItem>
              <Shield />
              <small>Guarantee</small>
            </InfoItem>
            <InfoItem>
              <CreditCard />
              <small>Payment</small>
            </InfoItem>
            <InfoItem>
              <DeliveryTruck />
              <small>Delivery</small>
            </InfoItem>
            <InfoItem>
              <User />
              <small>Register or Sign in</small>
            </InfoItem>

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
          <small>
            7 days a week from
            8:00 am to 5:00 pm
          </small>
        </Group>
      </Search>

    </>
  );
}

export default NavBar;
