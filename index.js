import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

// console.log('Hola mundo!')

const app = document.getElementById('app')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
render(<Media type="video" title="¿Qué es responsive Design?" author="LeonidasEsteban" image="./images/covers/responsive.jpg" /> , app);

