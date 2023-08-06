export interface ILink {
  id: number;
  link_short: string;
  link_long: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateLinkDto {
  link_long: string;
}