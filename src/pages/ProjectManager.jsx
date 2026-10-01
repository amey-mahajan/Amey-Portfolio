import { useEffect, useState } from "react";

function ProjectManager() {

  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState(null);


  // Load projects from localStorage
  useEffect(() => {

    const savedProjects = localStorage.getItem("portfolioProjects");

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }

  }, []);


  // Save projects whenever they change
  useEffect(() => {

    localStorage.setItem(
      "portfolioProjects",
      JSON.stringify(projects)
    );

  }, [projects]);


  // Add or update project
  const handleSubmit = (e) => {

    e.preventDefault();

    if (!title || !type || !description) {
      alert("Please fill all fields.");
      return;
    }


    if (editingId) {

      setProjects(
        projects.map((project) =>
          project.id === editingId
            ? {
                ...project,
                title,
                type,
                description
              }
            : project
        )
      );

      setEditingId(null);

    } else {

      const newProject = {
        id: Date.now(),
        title,
        type,
        description
      };

      setProjects([
        ...projects,
        newProject
      ]);

    }


    setTitle("");
    setType("");
    setDescription("");

  };


  // Delete project
  const handleDelete = (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (confirmed) {

      setProjects(
        projects.filter(
          (project) => project.id !== id
        )
      );

    }

  };


  // Edit project
  const handleEdit = (project) => {

    setTitle(project.title);
    setType(project.type);
    setDescription(project.description);

    setEditingId(project.id);

  };


  // Cancel editing
  const handleCancel = () => {

    setTitle("");
    setType("");
    setDescription("");

    setEditingId(null);

  };


  return (

    <main className="manager-page">

      <section className="manager-section">


        {/* Heading */}

        <div className="section-heading">

          <p className="section-tag">
            ✦ PROJECT MANAGER
          </p>

          <h1>
            Manage My <span>Projects.</span>
          </h1>

          <p className="section-subtitle">
            Add, edit and manage portfolio projects using
            React CRUD operations.
          </p>

        </div>



        {/* Form */}

        <div className="manager-container">


          <div className="manager-form-card">

            <h2>
              {editingId
                ? "✏️ Edit Project"
                : "➕ Add New Project"}
            </h2>


            <form onSubmit={handleSubmit}>


              <div className="form-group">

                <label>
                  Project Title
                </label>

                <input
                  type="text"
                  placeholder="Enter project title"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                />

              </div>



              <div className="form-group">

                <label>
                  Project Type
                </label>

                <input
                  type="text"
                  placeholder="Example: React Application"
                  value={type}
                  onChange={(e) =>
                    setType(e.target.value)
                  }
                />

              </div>



              <div className="form-group">

                <label>
                  Description
                </label>

                <textarea
                  placeholder="Enter project description"
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                />

              </div>



              <div className="form-buttons">

                <button
                  type="submit"
                  className="manager-btn primary-manager-btn"
                >
                  {editingId
                    ? "Update Project"
                    : "Add Project"}
                </button>


                {editingId && (

                  <button
                    type="button"
                    className="manager-btn cancel-btn"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>

                )}

              </div>

            </form>

          </div>



          {/* Project List */}

          <div className="manager-list-card">

            <div className="manager-list-header">

              <h2>
                My Projects
              </h2>

              <span>
                {projects.length} Projects
              </span>

            </div>



            {projects.length === 0 ? (

              <div className="empty-projects">

                <div>
                  📂
                </div>

                <h3>
                  No Projects Yet
                </h3>

                <p>
                  Add your first project using the form.
                </p>

              </div>

            ) : (

              <div className="manager-projects">

                {projects.map((project) => (

                  <div
                    className="manager-project"
                    key={project.id}
                  >

                    <div>

                      <span className="manager-project-type">
                        {project.type}
                      </span>

                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {project.description}
                      </p>

                    </div>


                    <div className="manager-actions">

                      <button
                        onClick={() =>
                          handleEdit(project)
                        }
                        className="edit-btn"
                      >
                        ✏️ Edit
                      </button>


                      <button
                        onClick={() =>
                          handleDelete(project.id)
                        }
                        className="delete-btn"
                      >
                        🗑 Delete
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </section>

    </main>

  );
}

export default ProjectManager;