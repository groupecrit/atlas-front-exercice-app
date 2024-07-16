const useUtils = () => {
    const nonRenseigne = 'Non renseigné';
    const valeurOuNonRenseigne = (valeur?: string | number | undefined): string => valeur?.toString() || nonRenseigne;
    const formatDateOuNonRenseigne = (date?): string => {
        if (!date) {
            return nonRenseigne;
        }
        const longEnUSFormatter = new Intl.DateTimeFormat('fr-EU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return longEnUSFormatter.format(new Date(date));
    };

    return {
        valeurOuNonRenseigne,
        formatDateOuNonRenseigne,
    };
};

export default useUtils;
