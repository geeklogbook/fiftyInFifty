const project_container = document.getElementById('projects-container')

const projects_count = 50

const fetchProjects = async () => {
    for (let i = 0; i < projects_count; i++) {
        await getProjects(i)
    }
}

const getProjects = async (idx) => {
    const res = await fetch('projects.json')
    const data = await res.json()
    createProjectCard(data[idx])
}

const createProjectCard = (project) => {
    const projectEl = document.createElement('div')
    projectEl.classList.add("project")

    const id = project.id
    const name = project.name
    const location = project.location
    const image = project.image
    const reusable = project.reusable
    const url = project.url


    const projectInnerHTML = `
        <div class="img-container">
            <img src= ${image} alt="" />
        </div>
        <div class="info">
            <h2>${name}</h2>
            <p> Reusable: ${reusable} </p>
            <p> <a href=${url} target="_blank"> Review </a> </p>
        </div>

        <button> 
            <a href="./projects/${id}.${location}/index.html" class="href" target="_blank">Go to the project</a>
        </button>
    `
    projectEl.innerHTML = projectInnerHTML
    project_container.appendChild(projectEl)
}

fetchProjects()