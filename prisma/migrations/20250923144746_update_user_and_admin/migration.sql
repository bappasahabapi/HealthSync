-- AlterTable
ALTER TABLE "public"."admins" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."users" ALTER COLUMN "updatedAt" DROP DEFAULT;
