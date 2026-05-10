const ProjectsGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full gap-12 lg:gap-20">
      {children}
    </div>
  );
};

export default ProjectsGrid;
