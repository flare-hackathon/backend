-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "walletAddress" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "ipfsHash" TEXT NOT NULL,
    "authorAddress" TEXT NOT NULL,
    "userRating" INTEGER DEFAULT 0,
    "aiRatingId" INTEGER,
    "internal_id" INTEGER,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AIPostRating" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postId" INTEGER NOT NULL,
    "sentimentAnalysisLabel" TEXT NOT NULL,
    "sentimentAnalysisScore" DOUBLE PRECISION NOT NULL,
    "biasDetectionScore" DOUBLE PRECISION NOT NULL,
    "biasDetectionDirection" TEXT NOT NULL,
    "originalityScore" DOUBLE PRECISION NOT NULL,
    "similarityScore" DOUBLE PRECISION NOT NULL,
    "readabilityFleschKincaid" DOUBLE PRECISION NOT NULL,
    "readabilityGunningFog" DOUBLE PRECISION NOT NULL,
    "mainTopic" TEXT NOT NULL,
    "secondaryTopics" TEXT[],

    CONSTRAINT "AIPostRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_walletAddress_key" ON "User"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Post_ipfsHash_key" ON "Post"("ipfsHash");

-- CreateIndex
CREATE UNIQUE INDEX "Post_aiRatingId_key" ON "Post"("aiRatingId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_internal_id_key" ON "Post"("internal_id");

-- CreateIndex
CREATE UNIQUE INDEX "AIPostRating_postId_key" ON "AIPostRating"("postId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorAddress_fkey" FOREIGN KEY ("authorAddress") REFERENCES "User"("walletAddress") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AIPostRating" ADD CONSTRAINT "AIPostRating_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
