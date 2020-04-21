export default class DetailController {
  /* @ngInject */
  constructor(ProjectsService, $state) {
    this.state = $state;
    this._projectsService = ProjectsService;
  }

  $onInit() {
    const currentProjectSlug = this.state.params.slug;

    this._projectsService.getProjects().then((projects) => {
      this.currentProject = projects.find(p => p.slug == currentProjectSlug);
      this.nextProjectTitle = this.getNextProj(this.currentProject, projects);
      this.prevProjectTitle = this.getPrevProj(this.currentProject, projects);
    })
  }

  getNextProj(currentProject, projects) {
    const currentProjectIndex = projects.findIndex(p => p.id === this.currentProject.id);
    let nextProject = projects[currentProjectIndex + 1];
    if (!nextProject) {
      nextProject = projects[0];
    }
    return nextProject.title;
  }

  next(currentProject) {
    this._projectsService.getProjects().then((projects) => {
      const currentProjectIndex = projects.findIndex(p => p.id == this.currentProject.id);
      let nextProject = projects[currentProjectIndex + 1];
      if (!nextProject) {
        nextProject = projects[0];
      }
      this.state.go('Detail', {slug: nextProject.slug})
    })
  }

  getPrevProj(currentProject, projects) {
    const currentProjectIndex = projects.findIndex(p => p.id == this.currentProject.id);
    let prevProject = projects[currentProjectIndex - 1];
    if (!prevProject) {
      prevProject = projects[projects.length - 1];
    }
    return prevProject.title;
  }

  prev(currentProject) {
    this._projectsService.getProjects().then((projects) => {
      const currentProjectIndex = projects.findIndex(p => p.id == this.currentProject.id);
      let prevProject = projects[currentProjectIndex - 1];
      if (!prevProject) {
        prevProject = projects[projects.length - 1];
      }
      this.state.go('Detail', {slug: prevProject.slug})
    })
  }
}
