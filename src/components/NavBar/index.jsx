import React from 'react';
import { Info, InfoGroup, InfoList, InfoItem } from './styles';

function NavBar() {
  return (
    <>
      <Info>
        <InfoGroup>
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
        </InfoGroup>
      </Info>

    </>
  );
}

export default NavBar;
