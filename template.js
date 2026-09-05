class ResumeTemplate {
  constructor() {
    this.data = JSON.parse(localStorage.getItem("resumeData"));

    if (!this.data) {
      alert("No resume data found.");
      return;
    }

    this.displayResume();
  }

  displayResume() {
    this.show("name", this.data.name);

    this.show("email", this.data.email);

    this.show("phone", this.data.phone);

    this.show("address", this.data.address);

    this.showSection("objectiveSection", "objective", this.data.objective);

    this.showSection("educationSection", "degree", this.data.degree);

    this.show("college", this.data.college);

    this.show("year", this.data.year);

    this.showSection("internshipSection", "internship", this.data.internship);

    this.show("internshipTitle", this.data.internshipTitle);

    this.showSection("projectSection", "projectName", this.data.projectName);

    this.show("technologies", this.data.technologies);

    this.show("projectDescription", this.data.projectDescription);



    const experienceData =
      this.data.jobTitle || this.data.company || this.data.experience;

    const experienceSection = document.getElementById("experienceSection");

    if (experienceData) {
      experienceSection.style.display = "block";

      this.show("jobTitle", this.data.jobTitle);

      this.show("company", this.data.company);

      this.show("experience", this.data.experience);
    } 
    
    else {
      experienceSection.style.display = "none";
    }

    

    this.showSection(
      "achievementsSection",
      "achievements",
      this.data.achievements,
    );

    this.showSkills();

    this.showLanguages();

    this.showLink("linkedin", this.data.linkedin);

    this.showLink("github", this.data.github);

    this.showPhoto();
  }

  show(id, value) {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    if (value && value.trim() !== "") {
      element.textContent = value;
    } else {
      element.style.display = "none";
    }
  }

  showSection(sectionId, contentId, value) {
    const section = document.getElementById(sectionId);

    const content = document.getElementById(contentId);

    if (!section || !content) {
      return;
    }

    if (value && value.trim() !== "") {
      content.textContent = value;
    } else {
      section.style.display = "none";
    }
  }

  showSkills() {
    const section = document.getElementById("skillsSection");

    const list = document.getElementById("skills");

    if (!section || !list) {
      return;
    }

    if (this.data.skills && this.data.skills.length > 0) {
      list.innerHTML = "";

      this.data.skills.forEach((skill) => {
        const li = document.createElement("li");

        li.textContent = skill;

        list.appendChild(li);
      });
    } else {
      section.style.display = "none";
    }
  }

  showLanguages() {
    const section = document.getElementById("languagesSection");

    const element = document.getElementById("languages");

    if (!section || !element) {
      return;
    }

    if (this.data.languages && this.data.languages.length > 0) {
      element.textContent = this.data.languages.join(", ");
    } else {
      section.style.display = "none";
    }
  }

  showLink(id, url) {
    const link = document.getElementById(id);

    if (!link) {
      return;
    }

    if (url && url.trim() !== "") {
      link.href = url;

      link.style.display = "inline";
    } else {
      link.style.display = "none";
    }
  }

  showPhoto() {
    const section = document.getElementById("photoSection");

    const image = document.getElementById("profilePhoto");

    if (!section || !image) {
      return;
    }

    if (this.data.photo) {
      image.src = this.data.photo;

      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }
}

const template = new ResumeTemplate();
