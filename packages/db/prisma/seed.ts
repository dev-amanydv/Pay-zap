import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const aman = await prisma.user.upsert({
    where: { number: '9999999999' },
    update: {},
    create: {
      number: '9999999999',
      password: 'aman',
      name: 'aman',
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "122",
          provider: "HDFC Bank",
        },
      },
    },
  })
  const hada = await prisma.user.upsert({
    where: { number: '8888888888' },
    update: {},
    create: {
      number: '8888888888',
      password: 'hada',
      name: 'hada',
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "123",
          provider: "HDFC Bank",
        },
      },
    },
  })
  console.log({ aman, hada })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })