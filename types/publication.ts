export interface Publication {
  title: string;
  authors: string[];
  venue: {
    name: string;
    date: string;
    loc: string;
    url: string;
  };
  published: false;
}
