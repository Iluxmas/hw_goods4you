import { it, expect } from '@jest/globals';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Button from '../../components/atoms/Button/Button';

describe('\n🔵 Button should work', function () {
  it('Should change the class with different isloading/disabled props', () => {
    const component = renderer.create(
      <Button text="Test me" disabled={false} isLoading={false} />
    );

    let tree = component.toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
      component.update(
        <Button text="Test me" disabled={true} isLoading={false} />
      );
    });

    tree = component.toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  });

  it('Should have passed text', () => {
    const { rerender } = render(<Button text="Test me" />);
    expect(screen.getByTestId('button-test-id').textContent).toBe('Test me');

    rerender(<Button text="Other Text" />);
    expect(screen.getByTestId('button-test-id').textContent).toBe('Other Text');
  });
});
