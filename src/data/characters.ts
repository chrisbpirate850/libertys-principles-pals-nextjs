
export interface Character {
  id: string;
  name: string;
  role: string;
  image: string;
  personality: string[];
  principle?: {
    number: number;
    name: string;
  };
  description: string;
  funFact?: string;
  group: "main" | "garden";
  color?: string; // Optional accent color for each character
}

export const characters: Character[] = [
  {
    id: "ande",
    name: "Ande",
    role: "Curiosity & Courage",
    image: "/lovable-uploads/043401b5-a89a-4442-bc20-2334739836e3.png", // Ande's image - correct (little girl with yellow boots)
    personality: ["Curious", "Thoughtful", "Brave"],
    principle: {
      number: 1,
      name: "Natural Law",
    },
    description: "Ande is the curious leader who asks big questions and writes everything in her garden journal. She's always eager to learn about the principles of liberty through her adventures in Nanny's garden.",
    funFact: "Carries her garden journal everywhere she goes!",
    group: "main",
    color: "#9b87f5" // Soft purple
  },
  {
    id: "sam",
    name: "Sam",
    role: "Play & Discovery",
    image: "/lovable-uploads/ef86cf32-0823-47c3-bdc4-8d733825a5c6.png", // Sam's updated image
    personality: ["Playful", "Adventurous", "Energetic"],
    principle: {
      number: 2, 
      name: "The Importance of Virtue",
    },
    description: "Sam is Ande's adventurous younger brother who learns by doing (and sometimes by goofing up). His playful spirit and energy bring the garden's lessons to life.",
    funFact: "Never goes anywhere without his trusty baseball cap!",
    group: "main",
    color: "#FEC6A1" // Soft orange
  },
  {
    id: "nanny-dolores",
    name: "Nanny Dolores",
    role: "Nurturing Wisdom",
    image: "/lovable-uploads/b29fe8e5-40c6-4abb-9b41-13534cae5b30.png", // Updated to Nanny's new image (woman with garden hat and floral apron)
    personality: ["Wise", "Patient", "Nurturing"],
    principle: {
      number: 3,
      name: "Choosing Virtuous Leaders",
    },
    description: "Nanny Dolores is the wise mentor who teaches the timeless truths of liberty through nature. Her garden is a magical place where principles of freedom grow alongside flowers and vegetables.",
    funFact: "Her garden has been growing for over 40 years!",
    group: "main",
    color: "#FEF7CD" // Soft yellow
  },
  {
    id: "scout",
    name: "Scout",
    role: "Explorer & Guide",
    image: "/lovable-uploads/4238bc5d-2f97-4698-b57c-50a199122095.png", // Scout's updated image
    personality: ["Adventurous", "Resourceful", "Helpful"],
    description: "Scout is the garden's trusted rabbit guide who knows all the hidden paths and secret spots. With his explorer vest and trusty notebook, he's always ready to lead Ande and Sam on exciting journeys through the garden.",
    funFact: "Has mapped every inch of Nanny's garden!",
    group: "garden",
    color: "#D3E4FD" // Soft blue
  },
  {
    id: "buzz",
    name: "Buzz",
    role: "Builder & Planner",
    image: "/lovable-uploads/3a576694-39ba-4fbb-9d92-a3bfb8954e67.png", // Buzz's updated image
    personality: ["Organized", "Industrious", "Friendly"],
    description: "Buzz is the garden's busy worker bee, always equipped with his tool belt and clipboard. He helps build and maintain the garden, teaching Ande and Sam about teamwork and cooperation.",
    funFact: "Can recite the entire garden blueprint from memory!",
    group: "garden",
    color: "#FDE1D3" // Soft peach
  },
  {
    id: "flora",
    name: "Flora",
    role: "Creative Spirit",
    image: "/lovable-uploads/bf163772-5369-470a-ae15-8b887370c6f5.png", // Flora's updated image
    personality: ["Artistic", "Free-spirited", "Joyful"],
    description: "Flora is the garden's colorful butterfly who brings beauty and creativity wherever she goes. Her rainbow wings inspire Ande and Sam to express themselves and see the world in vibrant colors.",
    funFact: "Can create amazing patterns with her wing colors!",
    group: "garden",
    color: "#FFDEE2" // Soft pink
  },
  {
    id: "terra",
    name: "Terra",
    role: "Wisdom & Patience",
    image: "/lovable-uploads/36800237-6605-494e-adc5-ed9701d73dde.png", // Terra's updated image
    personality: ["Wise", "Patient", "Thoughtful"],
    description: "Terra is the garden's wise old turtle who teaches Ande and Sam about patience and deep thinking. With her spectacles and gentle manner, she helps the children understand complex principles through simple stories.",
    funFact: "Has read every book in Nanny's library twice!",
    group: "garden",
    color: "#F2FCE2" // Soft green
  }
]
