import type { Project, SkillGroup } from '../types/portfolio'

export const skills: SkillGroup[] = [
  { label: 'Programming Languages', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'C#'] },
  { label: 'Frontend', items: ['React', 'Tailwind CSS', 'Responsive Design', 'Framer Motion'] },
  { label: 'Database', items: ['SQL Server', 'MySQL', 'Database Design', 'Database Management'] },
  { label: 'Tools & Technologies', items: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Canva', 'Figma'] },
  { label: 'Currently Learning', items: ['Node.js', 'Express.js', 'Cyber Security', 'AWS'] },
]

export const projects: Project[] = [
  { title: 'Mini Market Management System', category: 'Desktop application', description: 'A desktop system for inventory, billing, sellers, products, categories, and complete CRUD workflows.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85', stack: ['C#', 'SQL Server', 'Windows Forms'], accent: 'cyan' },
  { title: 'Sunrise Hotel Website', category: 'Responsive website', description: 'A modern hotel website with a clean interface, considered layouts, and responsive behaviour across devices.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85', stack: ['HTML', 'CSS', 'JavaScript'], accent: 'violet' },
  { title: 'Personal Portfolio Website', category: 'Frontend experience', description: 'A premium, modern portfolio created to showcase selected work, technical capabilities, and continuous growth.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85', stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'], accent: 'orange' },
]
