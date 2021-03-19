import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Contato from './pages/contato';
import AreaDeAtuacao from './pages/area-de-atuacao';
import PoliticasPublicas from './pages/politicas-publicas';
import ProgramaDeCapacitacao from './pages/programa-de-capacitacao';
import QuemSomos from './pages/quem-somos';
import Cursos from './pages/cursos';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contato" component={Contato} />
        <Route path="/cursos" component={Cursos} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/area-de-atuacao" component={AreaDeAtuacao} />
        <Route path="/politicas-publicas" component={PoliticasPublicas} />
        <Route path="/programa-de-capacitacao" component={ProgramaDeCapacitacao} />
      </Switch>
    </BrowserRouter>
  );
}
