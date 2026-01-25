"use client";
import { Typography, Divider, Button, Radio, Spin } from "antd";
import AllProjects from "@/components/projects/AllProjects";
import { useMemo, useState, useEffect } from "react";
import { useGetProjects } from "@/app/api/query";

const { Title, Paragraph } = Typography;

const ProjectsSection = () => {
  // const [status, setStatus] = useState<string>("finished");
  const [page, setPage] = useState(1);
  const [allProjects, setAllProjects] = useState<any[]>([]);

  const { loading, projects, total } = useGetProjects({
    // status,
    status: "finished",
    page,
  });

  // Accumulate projects when new data arrives
  useEffect(() => {
    if (projects) {
      if (page === 1) {
        setAllProjects(projects);
      } else {
        setAllProjects((prev) => [...prev, ...projects]);
      }
    }
  }, [projects, page]);

  // Reset page when status changes
  useEffect(() => {
    setPage(1);
  }, [status]);

  // Check if there are more pages to load
  const hasMorePages = useMemo(() => {
    return allProjects.length < total;
  }, [allProjects.length, total]);
  if (!allProjects?.length && !loading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Title level={2} className="section-title mb-4 text-primary">
          No Projects Found
        </Title>
        <Divider className="border-primary/30 w-1/4 min-w-[100px] my-6" />
        <Paragraph className="text-xl text-gray-500 max-w-2xl text-center">
          We Are Hope To Add One Sooon!
        </Paragraph>
      </div>
    );
  }
  return (
    <section className="w-full px-4 py-20 gradient-section rounded-[3rem]">
      <div className="text-center mb-16 flex flex-col items-center">
        <Title level={2} className="section-title mb-4">
          Our Creative Impact
        </Title>
        <Divider className="border-primary/30 w-1/4 min-w-[100px] my-6" />
        <Paragraph className="text-xl text-gray-500 max-w-2xl text-center">
          Explore our portfolio of successful collaborations and innovative
          solutions that drive growth.
        </Paragraph>
      </div>
      <div className="flex flex-col gap-6">
        {/* <Radio.Group
          options={[
            {
              label: "Finished",
              value: "finished",
            },
            {
              label: "InProgress",
              value: "inprogress",
            },
          ]}
          defaultValue={status}
          onChange={(e) => setStatus(e.target.value)}
          optionType="button"
        /> */}
        <Spin spinning={loading}>
          {allProjects?.length && !loading ? (
            <AllProjects projects={allProjects} />
          ) : null}
        </Spin>
        {hasMorePages && (
          <div className="flex justify-center mt-8">
            <Button
              type="primary"
              size="large"
              loading={loading}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
export default ProjectsSection;
