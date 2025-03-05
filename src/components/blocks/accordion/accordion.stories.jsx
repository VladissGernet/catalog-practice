import React from 'react';
import { Accordion } from './accordion';

// Наименование подгруппы.
export default {
  title: 'Accordion',
}

// Пример данных для аккордиона.
const exampleData = [
  {
    title: 'Описание',
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    )
  },
  {
    title: 'Комментарии',
    content: (
      <p>
        Другой контентДругой контентДругой контентДругой контент
      </p>
    )
  }
]

const exampleData2 = [
  {
    title: 'Описание',
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    )
  },
  {
    title: 'Комментарии',
    content: (
      <p>
        Другой контентДругой контентДругой контентДругой контент
      </p>
    )
  },
  {
    title: 'Комментарии',
    content: (
      <p>
        Другой контентДругой контентДругой контентДругой контент
      </p>
    )
  },
  {
    title: 'Комментарии',
    content: (
      <p>
        Другой контентДругой контентДругой контентДругой контент
      </p>
    )
  }
]

// export const Default = () => <Accordion tabs={exampleData} />
// Почему закомментировал?
// Глядя на такие примеры, легко понять, как компонент fullPrice будет выглядеть в проекте.
// Но давайте представим, что не мы создавали компонент fullPrice, а наш коллега, и мы не знаем,
// как этот компонент работает. Увидев такие примеры, мы не сможем по ним определить, какие props нужно передавать в fullPrice,
// чтобы он был отображён нужным образом. Придётся исследовать код компонента, но это не очень удобно. Поэтому Storybook предоставляет другой,
// более информативный способ описания примеров, с props, переданными через args. Чтобы его применить, удалим из файла full-price.stories.jsx
// код примеров WithOldPrice и WithoutOldPrice. Вместо них добавим в файл компонент Template, который будет передавать все свои props в FullPrice:

const Template = (args) => <Accordion {...args} />;

// Это будет шаблон компонента FullPrice, который мы будем использовать для создания примеров на его основе. Создадим пример WithOldPrice на основе
// Template, просто реализовав на его основе новую функцию компонента через bind и записав её в экспортируемую константу:

export const Default = Template.bind({});
Default.args = {
  tabs: exampleData,
};

export const Default2 = Template.bind({});
Default2.args = {
  tabs: exampleData2,
};
