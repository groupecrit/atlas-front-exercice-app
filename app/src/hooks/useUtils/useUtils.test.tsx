import useUtils from './useUtils';

describe('useUtils', () => {
    it('should return valeurOuNonRenseigne', () => {
        const { valeurOuNonRenseigne } = useUtils();
        expect(valeurOuNonRenseigne('valeur')).toBe('valeur');
        expect(valeurOuNonRenseigne(0)).toBe('0');
        expect(valeurOuNonRenseigne(undefined)).toBe('Non renseigné');
    });
    it('should return formatDateOuNonRenseigne', () => {
        const { formatDateOuNonRenseigne } = useUtils();
        expect(formatDateOuNonRenseigne('2021-01-01')).toBe('1 janvier 2021');
        expect(formatDateOuNonRenseigne(undefined)).toBe('Non renseigné');
    });
});
