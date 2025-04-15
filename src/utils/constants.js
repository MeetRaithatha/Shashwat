import {
  FaProjectDiagram,
  FaLeaf,
  FaBookOpen,
  FaCalculator,
  FaBlog,
  FaInfoCircle,
} from 'react-icons/fa';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { title: 'Our Projects', link: '/projects', icon: <FaProjectDiagram /> },
  { title: 'Sustainability', link: '/sustainability', icon: <FaLeaf /> },
  { title: 'Case Studies', link: '/case-studies', icon: <FaBookOpen /> },
  { title: 'Carbon Calculator', link: '/carbon-calculator', icon: <FaCalculator /> },
  { title: 'Blog', link: '/blog', icon: <FaBlog /> },
  { title: 'About Us', link: '/about', icon: <FaInfoCircle /> },
];


export const PROJECT_TYPES = [
  {
    name: "Green Buildings",
    description: "Innovative structures designed for minimal environmental impact and maximum efficiency",
    link: "/green-buildings",
    icon: "leaf"
  },
  {
    name: "Sustainable Communities",
    description: "Holistic developments that prioritize nature conservation and community wellbeing",
    link: "/sustainable-communities",
    icon: "community"
  },
  {
    name: "Urban Renewal",
    description: "Transforming urban spaces with green infrastructure and sustainable design",
    link: "/urban-renewal",
    icon: "city"
  },
  {
    name: "Eco-Restoration",
    description: "Projects focused on restoring natural habitats and biodiversity",
    link: "/eco-restoration",
    icon: "forest"
  }
];

export const CASE_STUDIES = [
  {
    id: 1,
    title: "The Green Canopy Tower",
    location: "Portland, OR",
    type: "Green Building",
    completion: "2022",
    features: [
      "LEED Platinum Certified",
      "Net-zero energy consumption",
      "Living green walls",
      "Rainwater harvesting"
    ],
    impact: {
      energySaved: "75%",
      co2Reduction: "320 tons/year",
      waterSaved: "1.2 million gallons/year"
    },
    image: "/api/placeholder/800/500",
    link: "/case-studies/green-canopy"
  },
  {
    id: 2,
    title: "Harmony Village",
    location: "Boulder, CO",
    type: "Sustainable Community",
    completion: "2021",
    features: [
      "100% renewable energy",
      "Community gardens",
      "EV charging stations",
      "Wildlife corridors"
    ],
    impact: {
      energySaved: "90%",
      co2Reduction: "540 tons/year",
      waterSaved: "2.5 million gallons/year"
    },
    image: "/api/placeholder/800/500",
    link: "/case-studies/harmony-village"
  },
  {
    id: 3,
    title: "Urban Oasis Project",
    location: "Chicago, IL",
    type: "Urban Renewal",
    completion: "2023",
    features: [
      "Brownfield redevelopment",
      "Urban farming spaces",
      "Green roofs throughout",
      "Pedestrian-first design"
    ],
    impact: {
      energySaved: "65%",
      co2Reduction: "280 tons/year",
      waterSaved: "800,000 gallons/year"
    },
    image: "/api/placeholder/800/500",
    link: "/case-studies/urban-oasis"
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Sustainable Urban Development",
    excerpt: "Exploring innovative approaches to creating greener cities that prioritize both people and the environment.",
    date: "2023-05-15",
    author: "Dr. Emily Green",
    category: "Urban Planning",
    image: "/api/placeholder/400/250",
    link: "/blog/sustainable-urban-future"
  },
  {
    id: 2,
    title: "Biophilic Design: Bringing Nature Indoors",
    excerpt: "How incorporating natural elements improves wellbeing and sustainability in built environments.",
    date: "2023-04-22",
    author: "Michael Stone",
    category: "Design",
    image: "/api/placeholder/400/250",
    link: "/blog/biophilic-design"
  },
  {
    id: 3,
    title: "Circular Economy in Construction",
    excerpt: "Reducing waste and maximizing resource efficiency through circular principles in building projects.",
    date: "2023-03-10",
    author: "Elena Rodriguez",
    category: "Sustainability",
    image: "/api/placeholder/400/250",
    link: "/blog/circular-economy"
  }
];

export const SUSTAINABILITY_METRICS = {
  totalProjects: 42,
  co2Reduced: "15,200 tons",
  energySaved: "78 million kWh",
  waterSaved: "320 million gallons",
  materialsRecycled: "85%",
  greenSpacesCreated: "1,240 acres"
};

export const FOOTER_LINKS = [
  {
    title: "Projects",
    links: [
      { text: "Green Buildings", url: "/projects" },
      { text: "Sustainable Communities", url: "/projects" },
      { text: "Urban Renewal", url: "/projects" },
      { text: "All Projects", url: "/projects" }
    ]
  },
  {
    title: "Sustainability",
    links: [
      { text: "Our Approach", url: "/sustainability" },
      { text: "Impact Reports", url: "/sustainability" },
      { text: "Certifications", url: "/sustainability" },
      { text: "Research", url: "/sustainabilty" }
    ]
  },
  {
    title: "Organization",
    links: [
      { text: "About Us", url: "/about" },
      { text: "Careers", url: "/about" },
      { text: "Partners", url: "/about" },
      { text: "Contact", url: "/about" }
    ]
  }
];

export const SOCIAL_MEDIA_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com', icon: Facebook },
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'YouTube', url: 'https://youtube.com', icon: Youtube },
];
