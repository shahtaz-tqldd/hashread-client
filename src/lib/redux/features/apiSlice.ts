import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const BaseURL = process.env.BASE_URL || ""

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
    credentials: "include" as const,
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
