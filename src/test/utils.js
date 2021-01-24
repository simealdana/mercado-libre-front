import React from 'react';
import { render } from '@testing-library/react'

export const wait = time => new Promise(res => setTimeout(res, time));

export function mountHook(hook) {
    let data = {};
    const Component = () => {
        Object.assign(data, hook());
        return null;
    };

    const wrapper = render(<Component />);

    return {
        data,
        wrapper,
    };
}

export function supressWarning() {
    const originalError = console.error;

    beforeAll(() => {
        console.error = (...args) => {
            if (/Warning.*not wrapped in act/.test(args[0])) {
                return;
            }
            originalError.call(console, ...args);
        }
    });

    afterAll(() => {
        console.error = originalError;
    });
}