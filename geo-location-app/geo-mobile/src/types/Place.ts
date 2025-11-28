export type Place = {
  _id: string;
  title: string;
  description: string;
  laboratory: string;
  latitude: number;
  longitude: number;
  photo?: string | null;
  createdAt?: string;
};