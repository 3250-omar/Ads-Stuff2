"use server";

import prisma from "@/lib/prisma";

export async function addProject(data: any) {
  await prisma.project.create({ data });
}

export async function updateProject(data: any) {
  await prisma.project.update({ where: { id: data.id }, data });
}

export async function deleteProject(id: number) {
  await prisma.project.delete({ where: { id } });
}

export async function getProjects() {
  return await prisma.project.findMany();
}

export async function getProjectById(id: number) {
  return await prisma.project.findUnique({ where: { id } });
}
export async function getProjectsByStatus(status: string) {
  return await prisma.project.findMany({ where: { status } });
}
