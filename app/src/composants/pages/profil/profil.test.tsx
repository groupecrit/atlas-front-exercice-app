import { render, within } from "@testing-library/react";
import PageProfil from "./profil";
import { useParams } from "react-router-dom";
import { MOCK_PROFILS } from "../../../unitsTests/mocks/metier";
import { renderConfig } from "../../../unitsTests/helpers/renderConfig";

const testId = 'page-profil';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(() => ({
        id: 0
    })),
}));

const id = 0

const longEnUSFormatter = new Intl.DateTimeFormat('fr-EU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

describe('<PageProfil />', () => {
    it('Vérification du rendu de la page profil', () => {
        (useParams as jest.Mock).mockReturnValueOnce({ id });
        const { getByTestId } = renderConfig(<PageProfil />);
        const page = getByTestId(testId);
        expect(page).toBeInTheDocument();
        const nomPrenom = within(page).getByTestId(`${testId}-nom-prenom`);
        expect(nomPrenom).toHaveTextContent(`Profil de : ${MOCK_PROFILS[id].nom} ${MOCK_PROFILS[id].prenom}`);
        const experience = within(page).getByTestId(`${testId}-experience`);
        expect(experience).toHaveTextContent(`Dernière expérience : ${MOCK_PROFILS[id].experience}`);
        const localisation = within(page).getByTestId(`${testId}-localisation`);
        expect(localisation).toHaveTextContent(`Localisation : ${MOCK_PROFILS[id].localisation.cp} ${MOCK_PROFILS[id].localisation.ville}`);
        const dateCreation = within(page).getByTestId(`${testId}-date-creation`);
        expect(dateCreation).toHaveTextContent(`Date de création : ${longEnUSFormatter.format(new Date(MOCK_PROFILS[0].dateCreation))}`);
    });
    it('Vérification de la présence du message d\'erreur de navigation', () => {
        (useParams as jest.Mock).mockReturnValueOnce({ id: undefined });
        const { getByText } = renderConfig(<PageProfil />);
        expect(getByText('Erreur de navigation')).toBeInTheDocument();
    });
    it('Vérification de la présence du message de profil inexistant', () => {
        (useParams as jest.Mock).mockReturnValueOnce({ id: 999 });
        const { getByText } = renderConfig(<PageProfil />);
        expect(getByText('Profil inexistant')).toBeInTheDocument();
    });
})