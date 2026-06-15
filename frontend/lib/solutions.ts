export interface Solution {
  id: number;
  name: string;
  category: string;
  partner: string;
  description: string;
  tags: string[];
  likes: number;
  image: string;
}

export const solutions: Solution[] = [
  {
    id: 1,
    name: "WisdomNext AI",
    category: "Generative AI",
    partner: "TCS",
    description: "Enterprise AI knowledge assistant.",
    tags: ["LLM", "RAG", "Azure OpenAI"],
    likes: 22600,
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "KosMos Expanse",
    category: "Knowledge Platform",
    partner: "TCS",
    description: "Enterprise knowledge discovery engine.",
    tags: ["Search", "Knowledge"],
    likes: 20300,
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Roboverse",
    category: "Automation",
    partner: "TCS",
    description: "Robotic automation ecosystem.",
    tags: ["IoT", "Automation"],
    likes: 17500,
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    name: "AvaPresence",
    category: "Collaboration",
    partner: "TCS",
    description: "Immersive collaboration experience.",
    tags: ["VR", "Metaverse"],
    likes: 19100,
    image: "https://placehold.co/600x400",
  },
];