-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneMobile" TEXT NOT NULL,
    "phoneLandline" TEXT,
    "addressStreet" TEXT NOT NULL,
    "addressNumber" TEXT NOT NULL,
    "addressZipCode" TEXT NOT NULL,
    "addressState" TEXT NOT NULL,
    "addressCity" TEXT NOT NULL,
    "addressNeighborhood" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "pcd" BOOLEAN NOT NULL,
    "hasDifficulty" TEXT,
    "educationLevel" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "provisionalPassword" TEXT,
    "profile" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
