export interface User {
  id: string
  avatar: string
  email: string
  name: string
  jobtitle: string
  username: string
  location: string
  role: string
  posts: string
  coverImg: string
  followers: string
  description: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any
}
