-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "category" TEXT[],
    "createdAt" TIMESTAMP NOT NULL,
    "completedAt" TIMESTAMP,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
