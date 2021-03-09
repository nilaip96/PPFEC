import React from 'react';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';
import Modal from './Modal.jsx';
import AddReviewForm from './AddReviewForm.jsx';

const ReviewsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-basis: 65%;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  padding: 2vw;
`;

const ButtonWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: baseline;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  max-height: 500px;
  overflow-y: scroll;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  };
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ReviewButton = styled.button`
  font-family: 'Lato', sans-serif;
  background-color: #FFFFFF;
  border: 1px solid #424242;
  height: 6vh;
  width: 20vw;
  font-size: 15px;
  color: #424242;
  font-weight: 1000;
  &:hover {
    cursor: pointer;
    color: #80CCC4;
    border: 1px solid #80CCC4;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
  &:focus {
    outline: none;
    box-shadow: none;
  };
`;

const ReviewSortWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const SelectTag = styled.select`
  width: 120px;
  height: 100%;
  font-size: 20px;
  padding-left: 3px;
  text-decoration: underline;
  border: 0px;
  outline: 0px;
  font-weight: 600;
  font-family: 'Lato',sans-serif;
`;

const ReviewsList = (props) => {
  // conditionlal rendering MORE VIEW button
  let moreReviewBtn;
  if (props.reviews.length !== props.fullreviewsArr.length) {
    moreReviewBtn = (
      <ReviewButton
        onClick={props.loadMoreReviews}
      >
        MORE REVIEWS
      </ReviewButton>
    );
  }

  const { reviewsMeta } = props;
  // get totalReviewCount
  let totalReviewCount = 0;
  Object.entries(reviewsMeta.ratings).forEach((rating) => {
    totalReviewCount += Number(rating[1]);
  });

  return (
    <ReviewsWrapper>
      <ReviewSortWrapper>
        <h2>
          {totalReviewCount}
          {' '}
          reviews, sorted by
        </h2>
        <SelectTag onChange={(e) => { props.sortSelected(e); }}>
          <option defaultValue="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </SelectTag>
      </ReviewSortWrapper>
      <ListWrapper>
        {props.reviews.map(((review) => (
          <ReviewTile
            key={review.review_id}
            review={review}
            loadReview={props.loadFirstTwoReviews}
          />
        )))}
      </ListWrapper>
      <ButtonWrapper>
        {moreReviewBtn}
        <ReviewButton onClick={() => props.addReviewToggle()}>ADD A REVIEW</ReviewButton>
        {props.addReviewShow && (
          <Modal content={(
            <AddReviewForm
              toggle={props.addReviewToggle}
              productId={Number(reviewsMeta.product_id)}
              characteristics={reviewsMeta.characteristics}
              loadReview={props.loadFirstTwoReviews}
            />
)}
          />
        )}
      </ButtonWrapper>
    </ReviewsWrapper>
  );
};

export default ReviewsList;