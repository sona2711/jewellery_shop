export type CardInfo = {
  name: string;
  slug?: string;
  image: string;
  description?: string;
  gender?: string;
  to: string
}  

export type ItemCardProps = {
  cardInfo: CardInfo;
  width: number
};
