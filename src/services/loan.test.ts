import { describe, it, expect } from 'vitest';
import { generateAmortizationSchedule } from './loan';

describe('generateAmortizationSchedule', () => {
  it('generates correct number of installments and totals', () => {
    const schedule = generateAmortizationSchedule({ principal: 12000, annualRate: 12, totalInstallments: 12 });
    expect(schedule).toHaveLength(12);
    expect(schedule[0].capital).toBeCloseTo(1000);
    expect(schedule[0].interest).toBeCloseTo(60);
    const totalInterest = schedule.reduce((sum, inst) => sum + inst.interest, 0);
    expect(totalInterest).toBeCloseTo(390);
  });
});
