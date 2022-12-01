import React from 'react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import { InputNumber } from '../components/InputNumber';

test('работа InputNumber', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <InputNumber />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента поле ввода и "введём" туда "5"
  const inputElem = component.root.findByProps({"data-testid":"inp"}); 
  // любые действия, вызывающие изменение стейта тестируемого
  // компонента, надо оборачивать в хелпер act
  act(() => {
    // делаем вид, что произошло событие onChange
    // сработает обработчик, поменяет стейт, а от него поменяется цифра в поле
    const mockChangeEvent = { target: { value: '5' } }
    inputElem.props.onChange(mockChangeEvent);
  });

  // и получаем изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
});
