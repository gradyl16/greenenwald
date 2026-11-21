export interface Publication {
  title: string;
  authors: string[];
  /** Path or URL of the paper PDF, if one is available. */
  pdf?: string;
  venue: {
    name: string;
    date: string;
    loc: string;
    url: string;
  };
  published: boolean;
  award?: {
    title: string;
  };
}
