export interface Location {
  name: string
  lat: number
  long: number
}

export interface Performer {
  bookingUrl?: string
  categories: string[]
  creator: string
  description?: string
  id: string
  location?: Location
  name: string
  priceFrom?: number
  tagLine?: string
  thumbnail?: string
  youtubeVideoCode?: string
}
