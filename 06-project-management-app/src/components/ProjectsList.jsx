export default function ProjectsList({ projects, onSelectProject }) {
  return (
    <ul className="mt-8">
      {projects.map((project) => (
        <li key={project.id} className="flex justify-between my-4">
          <button
            onClick={() => onSelectProject(project.id)}
            className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
          >
            {project.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
