const project_container = document.getElementById('projects-container')

const projects_count = 50

const fetchProjects = async () => {
    for (let i = 1; i < projects_count; i++) {
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

    const id = project.id
    const name = project.name
    const location = project.location
    const image = project.image


    const projectInnerHTML = `
    <div class="card">
        <div class="img-container">
            <img src= ${image}/${id} alt="" />
        </div>
    <h3>${name}</h3>
        <p>This project expand cards</p>
    <button> 
        <a href="./projects/${id}.${location}/index.html" class="href" >Go to the project</a>
    </button>
        <p>Tags: Widget, Work With Images, HTML, CSS, JS</p>
    <p>Reutilizable: yes</p>
    </div>
    `
    projectEl.innerHTML = projectInnerHTML
    project_container.appendChild(projectEl)
}

fetchProjects()