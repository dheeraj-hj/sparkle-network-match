
export interface Profile {
  id: string;
  name: string;
  title: string;
  company: string;
  photo: string;
  bio: string;
  skills: string[];
  userIntent: 'contributor' | 'seeker' | 'browsing';
  helpOffered?: string[];
  lookingFor?: string[];
  sparkeSummary: string;
  location: string;
  experience: number;
  industry: string;
}

export const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Senior Data Scientist",
    company: "Google",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b1e38f02?w=400&h=400&fit=crop&crop=face",
    bio: "Passionate about AI/ML and helping others break into tech. 8+ years experience in machine learning and data science.",
    skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis", "Mentorship"],
    userIntent: "contributor",
    helpOffered: ["Mentorship", "Career Guidance", "Technical Reviews"],
    sparkeSummary: "AI/ML expert with 8+ years at Google, passionate about mentoring aspiring data scientists and reviewing technical approaches.",
    location: "San Francisco, CA",
    experience: 8,
    industry: "Technology"
  },
  {
    id: "2",
    name: "Marcus Johnson",
    title: "Frontend Developer",
    company: "Stripe",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "React enthusiast looking for senior mentorship and networking opportunities in fintech.",
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    userIntent: "seeker",
    lookingFor: ["Mentorship", "Career Advancement", "Networking"],
    sparkeSummary: "Rising frontend developer at Stripe seeking senior mentorship to advance into tech lead roles, with strong React/TypeScript foundation.",
    location: "New York, NY",
    experience: 3,
    industry: "Fintech"
  },
  {
    id: "3",
    name: "Dr. Elena Rodriguez",
    title: "Product Manager",
    company: "Microsoft",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Healthcare tech PM with medical background. Love connecting healthcare professionals with tech opportunities.",
    skills: ["Product Management", "Healthcare", "Agile", "Stakeholder Management"],
    userIntent: "contributor",
    helpOffered: ["Referrals", "Industry Insights", "Career Guidance"],
    sparkeSummary: "Healthcare-tech bridge builder at Microsoft, connects medical professionals with technology opportunities and provides industry insights.",
    location: "Seattle, WA",
    experience: 6,
    industry: "Healthcare Technology"
  },
  {
    id: "4",
    name: "Ahmed Hassan",
    title: "DevOps Engineer",
    company: "Amazon",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Cloud infrastructure specialist seeking collaboration on open-source projects and mentorship in system architecture.",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    userIntent: "seeker",
    lookingFor: ["Collaboration", "Mentorship", "Open Source Projects"],
    sparkeSummary: "AWS DevOps engineer seeking architecture mentorship and open-source collaborations, expert in cloud infrastructure and automation.",
    location: "Austin, TX",
    experience: 5,
    industry: "Cloud Computing"
  },
  {
    id: "5",
    name: "Jennifer Kim",
    title: "UX Design Director",
    company: "Airbnb",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    bio: "Design leader passionate about inclusive design and mentoring junior designers. Always open to portfolio reviews.",
    skills: ["UX Design", "Design Systems", "User Research", "Leadership", "Figma"],
    userIntent: "contributor",
    helpOffered: ["Portfolio Reviews", "Mentorship", "Design Feedback"],
    sparkeSummary: "Airbnb design director championing inclusive design, offering portfolio reviews and mentorship to aspiring UX professionals.",
    location: "San Francisco, CA",
    experience: 10,
    industry: "Technology"
  },
  {
    id: "6",
    name: "David Park",
    title: "Software Engineer",
    company: "Netflix",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Backend engineer working on distributed systems. Looking for opportunities to transition into machine learning roles.",
    skills: ["Java", "Spring Boot", "Microservices", "Kafka", "Redis"],
    userIntent: "seeker",
    lookingFor: ["Career Transition", "ML Mentorship", "Job Referrals"],
    sparkeSummary: "Netflix backend engineer with distributed systems expertise, seeking transition guidance into machine learning and AI roles.",
    location: "Los Angeles, CA",
    experience: 4,
    industry: "Entertainment Technology"
  },
  {
    id: "7",
    name: "Priya Patel",
    title: "Cybersecurity Consultant",
    company: "Deloitte",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b1e38f02?w=400&h=400&fit=crop&crop=face",
    bio: "Cybersecurity expert helping organizations secure their digital assets. Open to mentoring newcomers to cybersecurity.",
    skills: ["Cybersecurity", "Penetration Testing", "Risk Assessment", "Compliance"],
    userIntent: "contributor",
    helpOffered: ["Mentorship", "Security Audits", "Career Guidance"],
    sparkeSummary: "Deloitte cybersecurity consultant with expertise in penetration testing, mentors newcomers and provides security guidance to organizations.",
    location: "Chicago, IL",
    experience: 7,
    industry: "Cybersecurity"
  },
  {
    id: "8",
    name: "Carlos Mendez",
    title: "Mobile Developer",
    company: "Uber",
    photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    bio: "iOS developer interested in cross-platform development. Looking for React Native mentorship and collaborative projects.",
    skills: ["iOS", "Swift", "Objective-C", "Mobile Architecture"],
    userIntent: "seeker",
    lookingFor: ["React Native Mentorship", "Cross-platform Development", "Collaboration"],
    sparkeSummary: "Uber iOS developer expanding into cross-platform development, seeking React Native mentorship and collaborative mobile projects.",
    location: "San Francisco, CA",
    experience: 6,
    industry: "Transportation Technology"
  }
];

export const getProfilesByIntent = (intent: string) => {
  return mockProfiles.filter(profile => 
    intent === 'all' || profile.userIntent === intent
  );
};

export const searchProfiles = (query: string, profiles: Profile[] = mockProfiles) => {
  const lowercaseQuery = query.toLowerCase();
  return profiles.filter(profile => 
    profile.name.toLowerCase().includes(lowercaseQuery) ||
    profile.title.toLowerCase().includes(lowercaseQuery) ||
    profile.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery)) ||
    profile.sparkeSummary.toLowerCase().includes(lowercaseQuery) ||
    profile.bio.toLowerCase().includes(lowercaseQuery) ||
    (profile.helpOffered && profile.helpOffered.some(help => help.toLowerCase().includes(lowercaseQuery))) ||
    (profile.lookingFor && profile.lookingFor.some(looking => looking.toLowerCase().includes(lowercaseQuery)))
  );
};
