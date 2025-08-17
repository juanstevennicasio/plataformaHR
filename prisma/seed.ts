import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.department.createMany({
    data: [
      { name: 'Ventas' },
      { name: 'Compras' },
      { name: 'Administración' },
    ],
  });

  await prisma.employee.createMany({
    data: Array.from({ length: 10 }).map((_, i) => ({
      fullName: `Empleado ${i + 1}`,
      cedula: `000000000${i}`,
      dateOfHire: new Date('2023-01-01'),
      dateOfBirth: new Date('1990-01-01'),
    })),
  });

  const loan = await prisma.loan.create({
    data: {
      employeeId: 1,
      principal: 10000,
      annualRate: 12,
      method: 'simple',
      totalInstallments: 12,
    },
  });

  console.log('Seed completed', loan.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
