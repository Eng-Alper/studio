import { cn } from './utils';

describe('cn util', () => {
  it('merges class names without duplicates', () => {
    expect(cn('a', 'b')).toBe('a b');
    expect(cn('a', 'a')).toBe('a');
  });

  it('ignores falsy values', () => {
    expect(cn('x', undefined, '', false && 'y', 'z')).toBe('x z');
  });
});
