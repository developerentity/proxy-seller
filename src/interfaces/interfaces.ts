export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IUsersInitialState {
  users: Array<IUser>;
}

export interface IAlbumsInitialState {
  albums: Array<IAlbum>;
}

export interface IPostsInitialState {
  posts: Array<IPost>;
}
