export const toDoItems = [
  {
    id: 1,
    name: "Brainstorming",
    description: "Brainstorming brings team members' diverse experience into play.",
    priority: "Low",
    status: "todo",
  },
  {
    id: 2,
    name: "Research",
    description: "User research helps you to create an optimal product for users.",
    priority: "High",
    status: "todo",
  },
  {
    id: 3,
    name: "Wireframes",
    description: "Low fidelity wireframes include the most basic content and visuals.",
    priority: "Low",
    status: "todo",
  },
  {
    id: 4,
    name: "Onboarding Illustrations ",
    description: "",
    priority: "Low",
    image1: 'oboarding',
    status: "inprogress",
  },
  {
    id: 5,
    name: "Moodboard",
    description: "",
    priority: "Low",
    image1: 'moodboard1',
    image2: 'moodboard2',
    status: "inprogress",
  },
  {
    id: 6,
    name: "Mobile App Design",
    description: "",
    priority: "Completed",
    image1: 'app-design',
    status: "closed",
  },
  {
    id: 7,
    name: "Design System",
    description: "It just needs to adapt the UI from what you did before ",
    priority: "Completed",
    status: "closed",
  },
]

export type Project = {
  name: string;
  color: string;
  active?: boolean;
}

export const myProjects: Project[] = [
  {
    name: 'Mobile App',
    color: 'green',
    active: true
  },
  {
    name: 'Website Redesign',
    color: 'orange',
    active: false
  },
  {
    name: 'Design System',
    color: 'indigo',
    active: false
  },
  {
    name: 'Wireframes',
    color: 'blue',
    active: false
  },
]