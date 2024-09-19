// projects.component.ts
import { Component, OnInit } from '@angular/core';
import { url } from 'node:inspector';

interface Project {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Project One',
      description: 'Description of Project One.',
      image: 'assets/Kabuto.jpg'
    },
    {
      name: 'Project Two',
      description: 'Description of Project Two.',
      image: 'assets/Sicoe.jpg'
    },
    {
      name: 'Project tree',
      description: 'Description of Project Two.',
      image: 'assets/Sicoe.jpg'
    },
    {
      name: 'Project tree',
      description: 'Description of Project Two.',
      image: 'assets/Sicoe.jpg'
    },
    {
      name: 'Project tree',
      description: 'Description of Project Two.',
      image: 'assets/Sicoe.jpg'
    },
    {
      name: 'Project tree',
      description: 'Description of Project Two.',
      image: 'assets/Sicoe.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
