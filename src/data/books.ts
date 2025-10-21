export interface Book {
  title: string;
  description: string;
  image: string;
  principle?: number;
}

export const books: Book[] = [
  {
    title: "Ande and the Natural Laws",
    description: "Discover the invisible rules of Nanny's garden and learn about Natural Law's harmony.",
    image: "/lovable-uploads/d5bd7a5a-ac60-4983-9bc1-563b78ad6ea3.png",
    principle: 1
  },
  {
    title: "The Light of Virtue",
    description: "Join Ande and her friends as they explore the importance of honesty and integrity.",
    image: "/lovable-uploads/09fd82db-db21-4c4e-832e-f2cc02165d3c.png",
    principle: 2
  },
  {
    title: "The Bridge of Equals",
    description: "A heartwarming story about fairness, equality, and understanding differences.",
    image: "/lovable-uploads/a5c6107b-66bb-4b43-8e6c-55130511310d.png",
    principle: 6
  },
  {
    title: "Votes for All Citizens",
    description: "Learn about civic participation and the importance of democratic processes.",
    image: "/lovable-uploads/770029b5-5789-4cd1-a6f7-0733c9a14428.png",
    principle: 10
  },
  {
    title: "The Fair Shares Fiasco",
    description: "A humorous tale about learning the principles of fair distribution and cooperation.",
    image: "/lovable-uploads/03157f08-cf0d-4db2-a945-6bfe3d873629.png",
    principle: 7
  },
  {
    title: "The Magic Mirror in the Garden",
    description: "An enchanting journey of self-discovery and understanding personal worth.",
    image: "/lovable-uploads/dcba9f8b-145b-499c-8f04-7ce00130899f.png"
  }
];
