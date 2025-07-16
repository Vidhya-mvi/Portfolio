import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
 projects = [
  {
    title: 'Collaborative TODO App',
    description: 'A full-stack collaborative TODO application featuring user authentication, email-based task sharing via Nodemailer, and a soft delete system for task recovery. Built using the MERN stack, the app allows users to securely manage and collaborate on tasks with real-time updates and clean UI workflows.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Nodemailer'],
    live: '',
    github: 'https://github.com/Vidhya-mvi/TODO.git'
  },
  {
    title: 'Full-Stack Blog Platform',
    description: 'A dynamic blog platform enabling users to register, log in, and manage posts with full CRUD functionality. Features include secure authentication, clean UI, and an Express + MongoDB backend for persistent storage. Designed for scalability and maintainability using MVC structure.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '',
    github: 'https://github.com/Vidhya-mvi/nodeReactBlog.git'
  },
  {
    title: 'React Blog UI',
    description: 'A single-page responsive blog UI built with React, showcasing modular architecture and React Router integration. Includes reusable components for post lists and detail views, along with smooth navigation and mobile-first design principles.',
    techStack: ['React', 'React Router', 'CSS'],
    live: '',
    github: 'https://github.com/Vidhya-mvi/ReactBlog.git'
  },
  {
    title: 'File Upload Manager',
    description: 'A backend-focused file upload and management system using Node.js, Express, and Multer. Users can upload, view, and delete files through a simple and intuitive EJS-rendered UI. Built with secure routing and server-side validation.',
    techStack: ['Node.js', 'Express', 'Multer', 'EJS'],
    live: '',
    github: 'https://github.com/Vidhya-mvi/NODE.JS.git'
  },
  {
    title: 'Employee Management App',
    description: 'A front-end web application for managing employee records with full CRUD support. Built with vanilla JavaScript and modular file architecture, the app interacts with a dummy API and includes form validation and DOM-based dynamic rendering.',
    techStack: ['JavaScript', 'Fetch API', 'DOM Manipulation'],
    live: '',
    github: 'https://github.com/Vidhya-mvi/javascript.git'
  },
  {
    title: 'Bootstrap Practice Website',
    description: 'A multi-page responsive website created using Bootstrap to demonstrate knowledge of layout design, cards, grid systems, and mobile-first development. Built with clean HTML and CSS, focusing on structure, accessibility, and responsiveness.',
    techStack: ['Bootstrap', 'HTML', 'CSS'],
    live: 'https://vidhya-mvi.github.io/bootstrap/',
    github: 'https://github.com/Vidhya-mvi/bootstrap.git'
  }
];

}
