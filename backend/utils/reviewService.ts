import { MyAxiosResponse, UserState, Review } from 'common/types'
import nookies from 'nookies'
import axios from 'axios'

export const getCommunityReviews = async(user: UserState): Promise<Array<Review> | undefined> => {
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  }
  try {
    const reviewsRes = await axios.get(
      'http://localhost:8080/review/all',
      config,
    )
    return reviewsRes.data;
  } catch (error) {
    console.log(error);
    return undefined
  }
}

export const getReview = async(user: UserState, id: string): Promise<Review | undefined> => {
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  }
  try {
    const reviewRes = await axios.get(
      `http://localhost:8080/review/${id}`,
      config,
    )
    if ('_id' in reviewRes.data === false)
      return undefined;
    return reviewRes.data;
  } catch (error) {
    console.log(error);
    return undefined
  }
}

export default {getCommunityReviews: getCommunityReviews, getReview: getReview}
