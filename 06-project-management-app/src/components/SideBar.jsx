import ProjectsList from "./ProjectsList.jsx";
import Button from "./Button.jsx";

export default function SideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ProjectsList projects={projects} onSelectProject={onSelectProject} selectedProjectId={selectedProjectId} />
    </aside>
  );
}
