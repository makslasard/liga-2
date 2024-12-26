import React from 'react';

import './styles/index.scss';
import { AppRouter } from '@/app/providers/router/AppRouter/AppRouter';

export const App: React.FC = () => {
  return (
    <div className="page-wrapper">
      <AppRouter />
    </div>
  );
};
