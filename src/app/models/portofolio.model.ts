export interface Portfolio {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  description: string;
  date: Date;
  content: string;
  tags: string[];
  downloadUrl?: string;
}
