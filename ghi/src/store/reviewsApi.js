import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reviewsApi = createApi({
    reducerPath: 'reviews',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SAMPLE_SERVICE_API_HOST,
    }),
    endpoints: builder => ({
        getReviews: builder.query({
            query: () => 'api/reviews/'
        })
    })
})

export const { useGetReviewsQuery } = reviewsApi
