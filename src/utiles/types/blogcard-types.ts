// types.ts
export interface Blog {
  title: string;
  author: {
    name: string;
    photo: {
      url: string;
      public_id: string;
    };
  };
  date?: string;
  time: string;
  content: string;
  img: string;
  _id: number;
}
