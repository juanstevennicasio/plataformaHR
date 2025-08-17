# plataformaHR

Skeleton for a human resources platform with payroll and employee loan management.

## Development

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
npm start
```

## Database

Set up a PostgreSQL database and configure `DATABASE_URL` in `.env` based on `.env.example`.

Run migrations and seed data:

```bash
npm run migrate
npm run seed
```

The scripts set `PRISMA_ENGINES_CHECKSUM_IGNORE=1` and `PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1` to bypass Prisma engine checksum validation, avoiding 403 errors in restricted environments.

## Tests

```bash
npm test
```

## CSV Templates

Import employees using `templates/employees-import.csv`.
