import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(<h1>todo app</h1>);
