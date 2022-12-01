import React from 'react';
import renderer from 'react-test-renderer';

import CounterButton from '../components/CounterButton';

test('работа CounterButton', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <CounterButton />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // искать теги можно по стандартным атрибутам: component.root.find( el => el.type=='input' )
  // или по любым пропсам: component.root.find( el => el.props.aaa == 'bbb' )
  // или так: component.root.findByProps({className: "blocked"})

  // найдём в вёрстке компонента саму кнопку
  const buttonElem = component.root.find( el => el.type=='input' ); 
  // и "нажмём" на неё
  buttonElem.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElem.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
});
