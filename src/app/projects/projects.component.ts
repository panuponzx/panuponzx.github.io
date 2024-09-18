// projects.component.ts
import { Component, OnInit } from '@angular/core';

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
      image: 'assets/project1.jpg'
    },
    {
      name: 'Project Two',
      description: 'Description of Project Two.',
      image: 'assets/project2.jpg'
    },
    // เพิ่มโปรเจ็กต์อื่น ๆ ตามต้องการ
  ];

  constructor() { }

  ngOnInit(): void { }
}
