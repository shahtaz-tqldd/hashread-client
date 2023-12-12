export interface Reply {
  comment: string;
  author: {
    photo: {
      url: string;
    };
    name: string;
  };
  time: string;
}

export interface Comment {
  comment: string;
  author: {
    photo: {
      url: string;
    };
    name: string;
  };
  replies?: Reply[];
  time: string;
}