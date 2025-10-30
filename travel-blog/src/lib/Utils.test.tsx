import { describe, it, expect } from 'vitest';
import { cn, generateSlug } from './utils';

describe('utils', () => {
  describe('cn', () => {
    it('merges multiple class strings', () => {
      const result = cn('text-red-500', 'bg-white');
      expect(result).toBe('text-red-500 bg-white');
    });

    it('merges class arrays and ignores falsy values', () => {
      const result = cn(
        'text-red-500',
        [null, undefined, false, 'bg-white'],
        'p-4',
      );
      expect(result).toBe('text-red-500 bg-white p-4');
    });

    it('merges conflicting Tailwind classes and keeps the last one', () => {
      const result = cn('p-2 p-4');
      expect(result).toBe('p-4');
    });

    it('merges clsx objects correctly', () => {
      const result = cn({ 'text-red-500': true, 'bg-white': false }, 'p-4');
      expect(result).toBe('text-red-500 p-4');
    });
  });

  describe('generateSlug', () => {
    it('converts string to lowercase', () => {
      expect(generateSlug('Hello World')).toBe('hello-world');
    });

    it('trims whitespace', () => {
      expect(generateSlug('  Hello World  ')).toBe('hello-world');
    });

    it('replaces spaces with hyphens', () => {
      expect(generateSlug('Hello   World')).toBe('hello-world');
    });

    it('removes special characters', () => {
      expect(generateSlug('Hello @ World!')).toBe('hello-world');
    });

    it('handles complex strings', () => {
      expect(generateSlug('  Foo Bar_baz! 123 ')).toBe('foo-bar_baz-123');
    });

    it('returns empty string for empty input', () => {
      expect(generateSlug('')).toBe('');
    });
  });
});
