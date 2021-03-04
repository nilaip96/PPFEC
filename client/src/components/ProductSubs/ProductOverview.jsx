import React from 'react';
import styled from 'styled-components';

import Styles from './StylesComponent.jsx';
import Selectors from './Selectors.jsx';

const Wrapper = styled.div`
  flex-basis 35%;
  display: flex;
  margin-top: 2vh;
  flex-direction: column;
  justify-content: space-between;
  margin: 3.5vh 0 3.5vh 2vw;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: #424242;
  &:hover {
    color: #80ccc4;
    cursor: pointer;
  };
`;

const RatingsAnchor = styled.a`
  font-size: .85rem;
  font-weight: 300;
  color: #424242;
  margin-left: .5vw;
  &:hover {
    color: #80ccc4;
    cursor: pointer;
  };
`;

const Category = styled.p`
  margin-top: 2vh;
  font-weight: 300;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 700;
  margin-top: -1rem;
`;

const Price = styled.p`
  margin-bottom: 1vh;
  font-weight: 300;
`;

const PurchaseLikeButtons = styled.div`
  width: 95%;
  display: flex;
  margin-top: 2.75vh;
  flex-direction: row;
`;

const AddToCart = styled.button`
  flex-basis: 82.5%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  height: 7vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  color: #424242;
`;

const Plus = styled.div`
  font-size: 2rem;
  font-weight: 300;
  &:hover {
    color: #80ccc4;
  };
`;

const Like = styled.button`
  flex-basis: 17.5%;
  height: ${AddToCart.height};
  margin-left: 1.5vw;
  font-weight: bold;
  font-size: 2.1vh;
  background: none;
  border: 1px solid #424242;
  color: #424242;
  &:hover { color: #80ccc4; };
`;

const ProductOverview = ({
  details, styles, skus, getStyleID,
}) => (
  <Wrapper>
    <RatingWrapper>
      <Rating>★★★★☆</Rating>
      <RatingsAnchor href="RATINGS">Read all reviews</RatingsAnchor>
    </RatingWrapper>
    <div className="productInfo">
      <Category>{details.category.toUpperCase()}</Category>
      <Name>{details.name}</Name>
      <Price>{`$${Math.round(details.default_price)}`}</Price>
    </div>
    <Styles styles={styles} getStyleID={getStyleID} />
    <Selectors skus={skus} />
    <PurchaseLikeButtons>
      <AddToCart>
        <div>ADD TO BAG</div>
        <Plus>+</Plus>
      </AddToCart>
      <Like>☆</Like>
    </PurchaseLikeButtons>
  </Wrapper>
);

export default ProductOverview;
