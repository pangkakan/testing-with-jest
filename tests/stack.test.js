const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});
test('pop removes the element so the previous element becomes top', () => {
    while (stack.peek() !== undefined) {
        stack.pop();
    }

    stack.push('första');
    stack.push('andra');

    const removed = stack.pop();

    expect(removed).toBe('andra');
    expect(stack.peek()).toBe('första');
});