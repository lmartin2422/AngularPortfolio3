import { Injectable } from '@angular/core';  // allows dependency injection into components
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({ 
  providedIn: 'root'
})
export class ProjectsService {  //COMPLETE THIS WITH REAL VALUES
  
  projects: Project[] = [
    { id: 0, name: 'Movie Trailers and Reviews App', pictures: ["../../assets/MovieTrailerReview/review_screenshot.png"], project_link: "https://github.com/lmartin2422/ReactProject", summary:"Built a full-stack application that uses a REST API to GET and POST Movie data. Used Spring Boot to gather dependencies to help build the API and store the data.  Stored the data in MongoDB. Used REACT and JavaScript to display a frontend of movie posters.  This application allows a user to see a movie trailer and write a review of that movie.  The reviews can be seen by other viewers that visit the application.", description:" ", tags: [Tag.JAVA, Tag.JAVASCRIPT, Tag.HTML]},
    { id: 1, name: 'Trucking App/RateVision.ai', pictures:["../../assets/Cowan Wireframe 2.jpg"], project_link: "https://github.com/lmartin2422/Trucking_App", summary: 'A complex project making an interface for a Trucking company that will allow truck drivers to view available loads and book them.', description: 'Recreated the homepage I designed and developed during my internship at Cowan Logistics. This recreation is a mock version using Figma. The fully functional version I developed during my internship looks exactly the same and was created using Angular, Typescript, HTML, and Css.',  tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.NODEJS, Tag.JAVASCRIPT]},
    { id: 2, name: 'Robotic Process Automation', pictures:["../../assets/morgan.jpeg", "../../assets/poly.png"], project_link: "https://github.com/lmartin2422/Notepad_website", summary: 'Using UiPath software to perform automations. Pics coming soon!', description: '',  tags: [Tag.UIPATH, Tag.VBNET]},
    { id: 3, name: 'Notepad App', pictures:["../../assets/signup_page.png", "../../assets/email_exists.png","../../assets/login_page.png", "../../assets/login_successful.png"], project_link: "https://github.com/lmartin2422/Notepad_website", summary: 'Personal Note Storage application using Python & Flask that allows a user to signup, login, write/delete notes, signout, and stores some info in a database. Other technologies used are HTML, CSS, and SQL.', description: 'Click the edges of the frame to see more pics!',  tags: [Tag.PYTHON, Tag.HTML, Tag.FLASK]},
    { id: 4, name: 'Chrome Extension', pictures:["../../assets/morgan.jpeg", "../../assets/poly.png"], project_link: "//www.github.com/lmartin2422", summary: 'Test Description', description: '',  tags: [Tag.JAVASCRIPT, Tag.HTML]},
    { id: 5, name: 'Rest API', pictures:["../../assets/morgan.jpeg", "../../assets/poly.png"], project_link: "//www.github.com/lmartin2422", summary: 'Test Description', description: '',  tags: [Tag.JAVASCRIPT,Tag.EXPRESSJS, Tag.NODEJS ]},
    { id: 6, name: 'Student Database Backend', pictures:["../../assets/morgan.jpeg", "../../assets/poly.png"], project_link: "//www.github.com/lmartin2422", summary: 'Test Description', description: '',  tags: [Tag.JAVA, Tag.SPRINGBOOT]},
];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project { // will iterate through the projects and supply the project which matchs the id as a parameter
    let project = this.projects.find(project => project.id === id);

    if(project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;

  }

  GetProjectByFilter(filterTags: Tag[]) {  // for the filter used in portfolio.html
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if(project.tags.includes(filterTag) == false) {
          foundAll = false;
        }  
      });

      if (foundAll) {
        filteredProjects.push(project); 
      }
    });

    return filteredProjects;
  }
}