import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/13707315?s=460&u=0f261eeb416f501fa267b20eb6027841089cce3a&v=4"
            alt="Autor"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/13707315?s=460&u=0f261eeb416f501fa267b20eb6027841089cce3a&v=4"
            alt="Autor"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/13707315?s=460&u=0f261eeb416f501fa267b20eb6027841089cce3a&v=4"
            alt="Autor"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
