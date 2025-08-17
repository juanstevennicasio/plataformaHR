import { z } from 'zod';

export const loanInputSchema = z.object({
  principal: z.number().positive(),
  annualRate: z.number().min(0),
  totalInstallments: z.number().int().positive(),
});

export type LoanInput = z.infer<typeof loanInputSchema>;

export interface Installment {
  number: number;
  capital: number;
  interest: number;
  total: number;
}

export function generateAmortizationSchedule(input: LoanInput): Installment[] {
  const { principal, annualRate, totalInstallments } = loanInputSchema.parse(input);
  const ratePerInstallment = annualRate / 100 / 24; // quincenal
  const capitalPerInstallment = principal / totalInstallments;
  const schedule: Installment[] = [];
  let remaining = principal;
  for (let i = 1; i <= totalInstallments; i++) {
    const interest = remaining * ratePerInstallment;
    const total = capitalPerInstallment + interest;
    schedule.push({ number: i, capital: Number(capitalPerInstallment.toFixed(2)), interest: Number(interest.toFixed(2)), total: Number(total.toFixed(2)) });
    remaining -= capitalPerInstallment;
  }
  return schedule;
}
