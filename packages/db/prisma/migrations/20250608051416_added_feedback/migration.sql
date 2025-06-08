-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
