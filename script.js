class ResumeBuilder {
  constructor() {
    this.form = document.getElementById("resumeForm");

    this.photo = "";

    const photoInput = document.getElementById("photo");

    if (photoInput) {
      photoInput.addEventListener("change", (event) => {
        this.loadPhoto(event);
      });
    }

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      this.createResume();
    });
  }

  getValue(id) {
    const element = document.getElementById(id);

    if (!element) {
      return "";
    }

    return element.value.trim();
  }

  getData() {
    return {
      name: this.getValue("name"),

      email: this.getValue("email"),

      phone: this.getValue("phone"),

      address: this.getValue("address"),

      linkedin: this.getValue("linkedin"),

      github: this.getValue("github"),

      objective: this.getValue("objective"),

      degree: this.getValue("degree"),

      college: this.getValue("college"),

      year: this.getValue("year"),

      internshipTitle: this.getValue("internshipTitle"),

      internship: this.getValue("internship"),

      projectName: this.getValue("projectName"),

      technologies: this.getValue("technologies"),

      projectDescription: this.getValue("projectDescription"),

      jobTitle: this.getValue("jobTitle"),

      company: this.getValue("company"),

      experience: this.getValue("experience"),

      achievements: this.getValue("achievements"),

      skills: [
        this.getValue("skill1"),

        this.getValue("skill2"),

        this.getValue("skill3"),

        this.getValue("skill4"),
      ].filter((skill) => skill !== ""),

      languages: [
        this.getValue("language1"),

        this.getValue("language2"),

        this.getValue("language3"),
      ].filter((language) => language !== ""),

      photo: this.photo,
    };
  }

  loadPhoto(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      this.photo = event.target.result;
    };

    reader.readAsDataURL(file);
  }

  createResume() {
    const selectedTemplate =
    document.querySelector(
        'input[name="template"]:checked'
    )?.value;

if (!selectedTemplate) {
    alert("Please select a template.");
    return;
}
    const data = this.getData();

    localStorage.setItem("resumeData", JSON.stringify(data));

    localStorage.setItem("selectedTemplate", selectedTemplate);

    window.location.href = selectedTemplate;
  }
}

const resume = new ResumeBuilder();
