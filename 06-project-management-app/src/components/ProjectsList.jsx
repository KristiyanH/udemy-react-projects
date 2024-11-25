export default function ProjectsList({
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <ul className="mt-8">
      {projects.map((project) => {
        let cssClasses =
          "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

        if (selectedProjectId === project.id) {
          cssClasses += " bg-stone-800 text-stone-200";
        } else {
          cssClasses += " text-stone-400";
        }
        
        return (
          <li key={project.id} className="flex justify-between my-4">
            <button
              onClick={() => onSelectProject(project.id)}
              className={cssClasses}
            >
              {project.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
