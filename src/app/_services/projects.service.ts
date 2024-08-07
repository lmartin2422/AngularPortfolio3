import { Injectable } from '@angular/core';  // allows dependency injection into components
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({ 
  providedIn: 'root'
})
export class ProjectsService {  //COMPLETE THIS WITH REAL VALUES
  
  projects: Project[] = [
    { id: 0, name: 'Movie Trailers and Reviews App', pictures: ["../../assets/MovieTrailerReview/review_screenshot.png", "../../assets/MovieTrailerReview/trailer.png", "../../assets/MovieTrailerReview/home_carousel_movies.png", "../../assets/MovieTrailerReview/postmanGetRequest.png", "../../assets/MovieTrailerReview/dbDataInBrowser.png"], project_link: "https://github.com/lmartin2422/ReactProject", summary:"Watch trailers of some of the latest movie releases and leave a review! ", description:"Built a full-stack application that uses a REST API to GET and POST Movie data. Used Spring Boot to gather dependencies to help build the API and store the data.  Stored the data in MongoDB. Used REACT and JavaScript to display a frontend of movie posters.  This application allows a user to see a movie trailer and write a review of that movie.  The reviews can be seen by other viewers that visit the application.", tags: [Tag.JAVA, Tag.JAVASCRIPT, Tag.REACT, Tag.SPRINGBOOT ,Tag.HTML]},
    { id: 1, name: 'Trucking App/RateVision.ai', pictures:["../../assets/Cowan Wireframe 2.jpg"], project_link: "https://github.com/lmartin2422/Trucking_App", summary: 'A complex project making an interface for a Trucking company that will allow truck drivers to view available loads and book them.', description: 'Recreated the homepage I designed and developed during my internship at Cowan Logistics. This recreation is a mock version using Figma. The fully functional version I developed during my internship looks exactly the same and was created using Angular, Typescript, HTML, and Css.',  tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.NODEJS, Tag.JAVASCRIPT]},
    { id: 2, name: 'Robotic Process Automation', pictures:["../../assets/Coffee Shop Sale Automation.png"], project_link: "https://github.com/lmartin2422/RPA_practice", summary: 'Using UiPath software to perform data extractions and automations.', description: 'Each day, ACMEs Sales department receives reports from coffee shops in Excel format. I used automation to extract the data from each report, merge it into an Excel spreadsheet, and create a pivot table and chart based on the merged data.',  tags: [Tag.UIPATH, Tag.VBNET]},
    { id: 3, name: 'Notepad App', pictures:["../../assets/signup_page.png", "../../assets/email_exists.png","../../assets/login_page.png", "../../assets/login_successful.png"], project_link: "https://github.com/lmartin2422/Notepad_website", summary: 'Personal Note Storage application using Python & Flask that allows a user to signup, login, write/delete notes, signout, and stores some info in a database. Other technologies used are HTML, CSS, and SQL.', description: 'Click the edges of the frame to see more pics!',  tags: [Tag.PYTHON, Tag.HTML, Tag.FLASK]},
    { id: 4, name: 'Sales Lead Tracker Chrome Extension', pictures:["../../assets/salestrack.png "], project_link: "https://github.com/lmartin2422/ChromeExtension", summary: 'Created a chrome extension to store Sales Leads', description: 'Developed a chrome extension that allows a salesperson to save and delete a website that is a sales lead.  The website for the sales lead is saved by clicking the “Save” button.  It then displays all the previously saved sales leads which are hyperlinks.  The sales person can also “Delete” the leads by clicking the “Delete” button.',  tags: [Tag.JAVASCRIPT, Tag.HTML]},
    { id: 5, name: 'Rest API', pictures:["../../assets/restAPI.png "], project_link: "https://github.com/lmartin2422/REST_API", summary: 'CRUD Operations and HTTP Methods & Requests', description: 'REST APIs are very popular so I decided to make one!',  tags: [Tag.JAVASCRIPT,Tag.EXPRESSJS, Tag.NODEJS ]},
    { id: 6, name: 'Student Database Backend', pictures:[" "], project_link: "https://github.com/lmartin2422/spring_boot", summary: 'Created a database of Student Identification data', description: 'Developed an application that receives and stores students’ information into a database. The database consists of the following columns of data: Id, Name, Email Address, DOB, and Age. ',  tags: [Tag.JAVA, Tag.SPRINGBOOT]},
    { id: 7, name: 'Home/Office Network Set Up', pictures:["../../assets/Cisco Packet Tracer/small_office_ntwk.png", "../../assets/Cisco Packet Tracer/Home_network.png", "../../assets/Cisco Packet Tracer/home_ntwk_laptops.png"], project_link: "https://github.com/lmartin2422/Cyber.git", summary: 'Building a simulation of networks', description: 'Using Cisco Packet Tracer, I built a home network and an office network in a simulated environment. This project demonstrates my knowledge of network devices, IP configuration, and network set ups.', tags: [Tag.CYBER ] },
    { id: 8, name: 'Powerful Home SIEM Lab Environment', pictures: ["../../assets/SIEMLab/rules.png", "../../assets/SIEMLab/nmap_event.png", "../../assets/SIEMLab/netcatSIEM.png", "../../assets/SIEMLab/pingSIEM.png", "../../assets/SIEMLab/telnetSIEM.png", "../../assets/SIEMLab/timestampsCharts.png", "../../assets/SIEMLab/tracerouteSIEM.png"], project_link: "https://github.com/lmartin2422/Cyber/tree/main/SIEM%20Lab", summary: 'Configured a home SIEM lab with Elastic Defend', description: ' ', tags: [Tag.CYBER]},

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
