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

## Tests

```bash
npm test
```

## CSV Templates

Import employees using `templates/employees-import.csv`.
