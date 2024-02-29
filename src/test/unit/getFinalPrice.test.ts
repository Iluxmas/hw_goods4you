import { getFinalPrice } from '@/utils/getFinalPrice';
import { it, expect } from '@jest/globals';

describe('\n🟡 Get final price should work', function () {
  it('Should calculate final price correctly', () => {
    const price = 100;
    const discount = 20;

    const finalPrice = getFinalPrice(price, discount);

    expect(finalPrice).toBe('80$');
  });

  it('Should has correct format', () => {
    const price = 99.99;
    const discount = 10;

    const finalPrice = getFinalPrice(price, discount);

    expect(finalPrice).toBe('89.99$');
  });

  it('Should has two non-zero decimals', () => {
    const price = 150;
    const discount = 15.45;

    const result = getFinalPrice(price, discount);
    expect(result).toBe('126.83$');
  });

  it('Should trim zero decimal', () => {
    const price = 100;
    const discount = 10.5;

    const result = getFinalPrice(price, discount);
    expect(result).toBe('89.5$');
  });
});
