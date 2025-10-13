import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Avatar, AvatarFallback } from '../avatar';

describe('Avatar', () => {
  it('render Avatar with fallback text', () => {
    render(
      <Avatar>
        <AvatarFallback>HN</AvatarFallback>
      </Avatar>,
    );

    expect(screen.getByText('HN')).toBeInTheDocument();
  });

  it('shows fallback when no image', () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );

    const fallback = screen.getByText('AB');
    expect(fallback).toBeVisible();
  });
});
