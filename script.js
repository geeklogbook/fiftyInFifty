const projectContainer = document.getElementById('projects-container');

const fetchProjects = async () => {
  try {
    const res = await fetch('projects.json');
    const data = await res.json();
    data.forEach(createProjectCard);
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

const createProjectCard = (project) => {
  const projectEl = createProjectElement(project);
  appendProjectElement(projectEl);
};

const createProjectElement = (project) => {
  const { id, name, location, image, reusable, url } = project;
  const projectEl = document.createElement('div');
  projectEl.classList.add('project');

  const projectInnerHTML = `
    <div class="img-container">
      <img src="${image}" alt="Image Preview" />
    </div>
    <div class="info">
      <h3>${name}</h3>
      <p><a href="${url}" target="_blank">Review</a></p>
    </div>

    <button>
      <a href="./projects/${id}.${location}/index.html" class="href" target="_blank">Go to the project</a>
    </button>
  `;

  projectEl.innerHTML = projectInnerHTML;
  return projectEl;
};

const appendProjectElement = (projectEl) => {
  projectContainer.appendChild(projectEl);
};

fetchProjects();