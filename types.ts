export interface MediumItem {
  date: string
  excerpt: string
  link: string
  thumb: string
  title: string
}

export interface GithubItem {
  description: string
  lang: string
  link: string
  title: string
  updated: string
}

export interface TwitterItem {
  content: string
  date: string
  id: string
  link: string
  thumbs: string[]
}

export interface MeetupItem {
  title: string
  group: string
  time: string
  thumb: string
  link: string
}
