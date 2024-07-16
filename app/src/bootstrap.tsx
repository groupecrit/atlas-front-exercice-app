import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { routes } from './routes';

// Point d'entré de l'application pour un lancement en standalone. N'est pas évalué lors de l'utilisation par ModuleFederation / en tant que MFE
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<RouterProvider router={routes} />);
