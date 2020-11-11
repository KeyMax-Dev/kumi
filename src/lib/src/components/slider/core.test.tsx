import React from 'react';
import {
    getCloserTracker,
    getSliderIterationByMouse,
    getSliderIterationByValue,
    getSliderRailPercentage,
} from './core';

const STRING_ARRAY = ['a', 'b', 'c', 'd', 'e', 'f'];

describe('Slider Core', () => {
    test.each`
        mouseDistance | expectedIteration
        ${-10}        | ${0}
        ${5.56}       | ${1}
        ${16.67}      | ${2}
        ${27.78}      | ${3}
        ${38.89}      | ${4}
        ${40}         | ${4}
        ${49.99}      | ${4}
        ${50}         | ${5}
        ${72.23}      | ${7}
        ${83.34}      | ${8}
        ${95}         | ${9}
        ${110}        | ${9}
    `('should get $expectedIteration iteration by $mouseDistance distance', ({ mouseDistance, expectedIteration }) => {
        // Based on a container with 100px width and 10 iterations
        const rect: DOMRect = {
            height: 50,
            width: 100,
            top: 0,
            right: 100,
            bottom: 50,
            left: 0,
            x: 0,
            y: 0,
            toJSON: () => '',
        };
        expect(getSliderIterationByMouse(rect, mouseDistance, 10)).toBe(expectedIteration);
    });

    test.each`
        iteration | iterations | expectedPercentage
        ${0}      | ${10}      | ${0}
        ${9}      | ${10}      | ${100}
        ${9}      | ${100}     | ${9.09}
        ${7}      | ${10}      | ${77.777}
        ${7}      | ${100}     | ${7.07}
        ${345}    | ${1000}    | ${34.534}
    `(
        'should get $expectedPercentage to iteration $iteration in $iterations iterations',
        ({ iteration, iterations, expectedPercentage }) => {
            expect(getSliderRailPercentage(iteration, iterations)).toBeCloseTo(expectedPercentage);
        }
    );

    test.each`
        scaleConfig                                                                              | value        | expectedIteration
        ${{ maxIterations: 10, scaleFunction: (x: number) => x }}                                | ${5}         | ${5}
        ${{ maxIterations: 10, scaleFunction: (x: number) => x }}                                | ${10}        | ${0}
        ${{ maxIterations: 10, scaleFunction: (x: number) => x }}                                | ${15}        | ${0}
        ${{ maxIterations: 10, scaleFunction: (x: number) => x }}                                | ${undefined} | ${0}
        ${{ maxIterations: STRING_ARRAY.length, scaleFunction: (x: number) => STRING_ARRAY[x] }} | ${'c'}       | ${2}
        ${{ maxIterations: STRING_ARRAY.length, scaleFunction: (x: number) => STRING_ARRAY[x] }} | ${'k'}       | ${0}
        ${{ maxIterations: STRING_ARRAY.length, scaleFunction: (x: number) => STRING_ARRAY[x] }} | ${undefined} | ${0}
    `('should get $expectedIteration by value $value', ({ scaleConfig, value, expectedIteration }) => {
        expect(getSliderIterationByValue(scaleConfig, value)).toBe(expectedIteration);
    });

    test.each`
        iteration  | newIteration | expectedTracker
        ${[0, 10]} | ${6}         | ${1}
        ${[0, 10]} | ${5}         | ${1}
        ${[0, 10]} | ${4}         | ${0}
        ${[0, 10]} | ${7}         | ${1}
        ${[0, 3]}  | ${1}         | ${0}
        ${[0, 3]}  | ${2}         | ${1}
    `(
        'should get $expectedTracker tracker by current $iteration on new iteration $newIteration',
        ({ iteration, newIteration, expectedTracker }) => {
            expect(getCloserTracker(iteration, newIteration)).toBe(expectedTracker);
        }
    );
});
