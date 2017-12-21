import express from 'express';
import Home from './dist/ssr/home';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import data from './src/api.json';
import Base from './src/pages/components/base';

const app = express();

app.use(express.static('dist'))
app.use('/images', express.static('images'))

app.get('/', (req, res) => {
  // fetch('dame datos').then((datos)=>{

  // })
  res.write(renderToStaticMarkup(
    <Base
      title="Platzi Video"
      css="css/home.css"
      js="js/home.js"
    >
      <Home data={data} />
    </Base>
  ));
  res.end();
})

app.listen(3000)
