import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  skills = [
    { name: 'JavaScript', icon: 'code' },
    { name: 'TypeScript', icon: 'file-code' },
    { name: 'Angular', icon: 'layout-dashboard' },
    { name: 'React.js', icon: 'atom' },
    { name: 'Node.js', icon: 'server' },
    { name: 'Express.js', icon: 'settings' },
    { name: 'MongoDB', icon: 'database' },
    { name: 'HTML5', icon: 'file-text' },
    { name: 'CSS3', icon: 'brush' },
    { name: 'Bootstrap', icon: 'box' },
    { name: 'Tailwind CSS', icon: 'wind' },
    { name: 'Git', icon: 'git-branch' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Postman', icon: 'send' },
    { name: 'VS Code', icon: 'terminal' },
    { name: 'Render', icon: 'monitor' },
    { name: 'Vercel', icon: 'cloud' },
    { name: 'JWT Auth', icon: 'lock' },
    { name: 'REST APIs', icon: 'link' },
    { name: 'MVC Architecture', icon: 'columns' }
  ];
}


