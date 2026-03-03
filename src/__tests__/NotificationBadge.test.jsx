import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NotificationBadge from '../components/NotificationBadge';

describe('NotificationBadge', () => {
    it('renders correctly with count 0 (does not display anything by default)', () => {
        const { container } = render(<NotificationBadge count={0} />);
        expect(container.firstChild.childNodes.length).toBe(0);
    });

    it('renders the count correctly when count > 0', () => {
        render(<NotificationBadge count={5} />);
        expect(screen.getByText('5')).toBeDefined();
    });
});
