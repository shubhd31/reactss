export interface Post {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export interface ListResponse<A> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: A[];
}
