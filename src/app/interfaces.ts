export interface hypeItem {
  title: string;
  info: string;
  link?: string;
  logo?: string;
}

export interface portfolioItem {
  type?: string;
  title: string;
  info: string;
  link?: string;
  image?: string;
  canvas?: Object;
  code?: Function;
  wrapperId?: string;
}
