import dayjs from 'dayjs';
import { ReactNode } from 'react';

import { ConfigExterne } from '../configExterne/configExterne';

const langageParDefaut = 'fr';
const traductionAutomatique = false;
document.documentElement.lang = langageParDefaut; // par défaut 'français' sera le langage du html
document.documentElement.translate = traductionAutomatique; // par défaut le navigateur ne demandera pas à traduire la page

export function ComposantAdaptateur({ children }: Readonly<{ children: ReactNode }>) {
    dayjs.locale('fr');

    return <ConfigExterne>{children}</ConfigExterne>;
}
