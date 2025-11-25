import { prisma } from "../src/lib/prisma";

async function main() {
  const userId = 10; // LUCAS

  // Atualiza dados principais
  await prisma.user.update({
    where: { id: userId },
    data: {
      course: "Ciência da Computação",
      studiedHours: 42,
      completedCourses: 5,
      level: "Intermediário",
    },
  });

  // === MESMO PADRÃO DO MAURÍCIO ===

  await prisma.track.create({
    data: {
      title: "Introdução à Programação",
      userId,
    },
  });

  await prisma.lesson.create({
    data: {
      title: "Lógica de Programação — Variáveis e Condicionais",
      userId,
    },
  });

  await prisma.opportunity.create({
    data: {
      title: "Primeiro Projeto Web — HTML + CSS",
      userId,
    },
  });

  await prisma.material.create({
    data: {
      title: "Material de apoio — Introdução à Computação",
      userId,
    },
  });

  await prisma.libraryCategory.create({
    data: {
      title: "Fundamentos da Computação",
      userId,
    },
  });

  await prisma.mentor.create({
    data: {
      name: "Mentor Júnior de Programação",
      userId,
    },
  });

  await prisma.communityCategory.create({
    data: {
      name: "Comunidade de Estudantes — Iniciantes",
      userId,
    },
  });

  await prisma.trendingTopic.create({
    data: {
      title: "Como estudar programação do zero",
      userId,
    },
  });

  await prisma.activeUser.create({
    data: {
      action: "Entrou na plataforma recentemente",
      userId,
    },
  });

  await prisma.discussion.create({
    data: {
      title: "Dicas para iniciantes em programação",
      userId,
    },
  });

  console.log("Perfil completo do Lucas (ID 10) criado com sucesso!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
