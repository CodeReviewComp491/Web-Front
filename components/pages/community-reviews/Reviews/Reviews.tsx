import React from 'react'
import { Menu } from 'antd'
import { RightOutlined } from '@ant-design/icons'

//css
import * as Styled from 'components/pages/community-reviews/Reviews/styles'

//components
import Review from 'components/pages/community-reviews/Review/Review'

//common
import { Review as ReviewType } from 'common/types'

interface Props {
  reviews: Array<ReviewType>
  searchKey: string
}

const Reviews = ({ reviews, searchKey }: Props): JSX.Element => {
  const displayMenu = (): JSX.Element => {
    return (
      <Menu>
        <Menu.Item key="0">
          <a href="https://www.antgroup.com">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="https://www.aliyun.com">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    )
  }

  const displayReviews = (): JSX.Element => {
    return (
      <>
        {reviews.map((review, index) => {
          if (searchKey !== '') {
            if (review.name.search(searchKey) !== -1) {
              return (
                <Styled.ReviewWrapper key={index}>
                  <Review review={review} />
                </Styled.ReviewWrapper>
              )
            }
          } else {
            return (
              <Styled.ReviewWrapper key={index}>
                <Review review={review} />
              </Styled.ReviewWrapper>
            )
          }
        })}
      </>
    )
  }

  return (
    <Styled.Reviews>
      <Styled.ReviewsNavbar>
        <Styled.ReviewsNavbarContent>
          <Styled.NavbarTitle>Reviews</Styled.NavbarTitle>
          <Styled.NavbarFilter overlay={displayMenu()} trigger={['click']}>
            <Styled.NavbarFilterContent>
              <Styled.NavbarFilterTitle>Filters</Styled.NavbarFilterTitle>
              <RightOutlined style={{ fontSize: '20px' }} />
            </Styled.NavbarFilterContent>
          </Styled.NavbarFilter>
        </Styled.ReviewsNavbarContent>
      </Styled.ReviewsNavbar>
      <Styled.ReviewsContent>
        {displayReviews()}
      </Styled.ReviewsContent>
    </Styled.Reviews>
  )
}

export default Reviews
