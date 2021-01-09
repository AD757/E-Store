
export interface User {
  id: string,
  displayName: string,
  email: string,
  createdAt: {
    seconds: number,
    nanoseconds: number,
  }
}

export interface SectionModel {
  title: string,
  imageUrl: string,
  size?: string,
  id: number,
  linkUrl: string,
}

export interface ShopItem {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
}

export interface ShopData {
  id: number,
  title: string,
  routeName: string,
  items: ShopItem[]
}

export interface CartItem extends ShopItem {
  quantity: number,
}