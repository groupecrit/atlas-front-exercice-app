import { PaletteColor, createTheme } from '@mui/material';

import { THEME_COULEURS } from './couleurs';
import { ThemeCardShadowPaletteColor, ThemeColors, ThemeContentColor } from './themeInterfaces';

declare module '@mui/material/styles' {
    interface Palette {
        cardShadow: ThemeCardShadowPaletteColor;
        textFieldBorderColor: string;
        colors: ThemeColors;
        critGrey: PaletteColor;
        content?: ThemeContentColor;
        alert?: ThemeColors['alert'];
        appbar?: ThemeColors['appbar'];
        avatar?: ThemeColors['avatar'];
        backdrop?: ThemeColors['backdrop'];
        breadcrumbs?: ThemeColors['breadcrumbs'];
        chip?: ThemeColors['chip'];
        input?: ThemeColors['input'];
        rating?: ThemeColors['rating'];
        switch?: ThemeColors['switch'];
        tooltip?: ThemeColors['tooltip'];
    }

    interface TypographyVariants {
        boutonLarge: React.CSSProperties;
        boutonMedium: React.CSSProperties;
        boutonSmall: React.CSSProperties;
        avatarLetter: React.CSSProperties;
        inputLabel: React.CSSProperties;
        formSectionTitle: React.CSSProperties;
        helperText: React.CSSProperties;
        inputText: React.CSSProperties;
        tooltip: React.CSSProperties;
        hEnteteTableau: React.CSSProperties;
        hValeurTableau: React.CSSProperties;
        hValeurMoyenneTableau: React.CSSProperties;
        hTitreDialogue: React.CSSProperties;
        compteurCaracteres: React.CSSProperties;
        resumeSousTitre: React.CSSProperties;
        resumeContent: React.CSSProperties;
        secondaryText: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        boutonLarge?: React.CSSProperties;
        boutonMedium?: React.CSSProperties;
        boutonSmall?: React.CSSProperties;
        avatarLetter?: React.CSSProperties;
        inputLabel?: React.CSSProperties;
        formSectionTitle?: React.CSSProperties;
        helperText?: React.CSSProperties;
        inputText?: React.CSSProperties;
        tooltip?: React.CSSProperties;
        hEnteteTableau?: React.CSSProperties;
        hValeurTableau?: React.CSSProperties;
        hValeurMoyenneTableau?: React.CSSProperties;
        hTitreDialogue: React.CSSProperties;
        compteurCaracteres: React.CSSProperties;
        resumeSousTitre: React.CSSProperties;
        resumeContent: React.CSSProperties;
        secondaryText: React.CSSProperties;
    }

    interface PaletteOptions {
        cardShadow?: ThemeCardShadowPaletteColor;
        textFieldBorderColor?: string;
        colors?: ThemeColors;
        critGrey?: PaletteColor;
        content?: ThemeContentColor;
        alert?: ThemeColors['alert'];
        appbar?: ThemeColors['appbar'];
        avatar?: ThemeColors['avatar'];
        backdrop?: ThemeColors['backdrop'];
        breadcrumbs?: ThemeColors['breadcrumbs'];
        chip?: ThemeColors['chip'];
        input?: ThemeColors['input'];
        rating?: ThemeColors['rating'];
        switch?: ThemeColors['switch'];
        tooltip?: ThemeColors['tooltip'];
    }
}
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        boutonLarge: true;
        boutonMedium: true;
        boutonSmall: true;
        avatarLetter: true;
        inputLabel: true;
        formSectionTitle: true;
        helperText: true;
        inputText: true;
        tooltip: true;
        hEnteteTableau: true;
        hValeurTableau: true;
        hValeurMoyenneTableau: true;
        hTitreDialogue: true;
        compteurCaracteres: true;
        resumeSousTitre: true;
        resumeContent: true;
        secondaryText: true;
        textIcon: true;
        neutral: true;
    }
}
// Update the TextField's color prop options
declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
        textFieldBorderColor: true;
    }
}

// Update the IconButton's color prop options
declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        textIconPrimary: true;
        critGrey: true;
    }
}
// Update the IconButton's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        critGrey: true;
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        hEnteteTableau: React.CSSProperties;
        hValeurTableau: React.CSSProperties;
        hValeurMoyenneTableau: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        hEnteteTableau?: React.CSSProperties;
        hValeurTableau?: React.CSSProperties;
        hValeurMoyenneTableau?: React.CSSProperties;
    }
}
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        hEnteteTableau: true;
        hValeurTableau: true;
        hValeurMoyenneTableau: true;
    }
}

/**
 * Equivalence des options MUI pour palettes de base
 * primary | secondary | success | warning | error
 *  ____________ ______________
 * | figma      | mui          |
 * |____________|______________|
 * | Background | light        |
 * | Default    | main         |
 * | Pressed    | dark         |
 * |____________|______________|
 *
 * Les couleurs "hover" sur figma sont définies
 * séparement hors palette par defaut de MUI
 */

const AppTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 900,
            md: 1200,
            lg: 1600,
            xl: 1900,
        },
    },
    // PALETTE DE COULEUR
    palette: {
        divider: THEME_COULEURS.DIVIDER,
        text: {
            primary: THEME_COULEURS.TEXT.PRIMARY,
            secondary: THEME_COULEURS.TEXT.SECONDARY,
            disabled: THEME_COULEURS.TEXT.DISABLED,
        },
        primary: {
            main: THEME_COULEURS.PRIMARY.MAIN,
            dark: THEME_COULEURS.PRIMARY.DARK,
            light: THEME_COULEURS.PRIMARY.LIGHT,
            contrastText: THEME_COULEURS.PRIMARY.CONTRASTTEXT,
        },
        secondary: {
            main: THEME_COULEURS.SECONDARY.MAIN,
            dark: THEME_COULEURS.SECONDARY.DARK,
            light: THEME_COULEURS.SECONDARY.LIGHT,
            contrastText: THEME_COULEURS.SECONDARY.CONTRASTTEXT,
        },
        content: {
            neutral: {
                '100': THEME_COULEURS.CONTENT.NEUTRAL['100'],
                '200': THEME_COULEURS.CONTENT.NEUTRAL['200'],
                '300': THEME_COULEURS.CONTENT.NEUTRAL['300'],
                '400': THEME_COULEURS.CONTENT.NEUTRAL['400'],
                '500': THEME_COULEURS.CONTENT.NEUTRAL['500'],
                background: THEME_COULEURS.CONTENT.NEUTRAL.BACKGROUND,
            },
        },
        action: {
            hover: THEME_COULEURS.ACTION.HOVER,
            selected: THEME_COULEURS.ACTION.SELECTED,
            disabledBackground: THEME_COULEURS.ACTION.DISABLEDBACKGROUND,
            focus: THEME_COULEURS.ACTION.FOCUS,
            disabled: THEME_COULEURS.ACTION.DISABLED,
            active: THEME_COULEURS.ACTION.ACTIVE,
        },
        error: {
            main: THEME_COULEURS.ERROR.MAIN,
            dark: THEME_COULEURS.ERROR.DARK,
            light: THEME_COULEURS.ERROR.LIGHT,
            contrastText: THEME_COULEURS.ERROR.CONTRASTTEXT,
        },
        warning: {
            main: THEME_COULEURS.WARNING.MAIN,
            dark: THEME_COULEURS.WARNING.DARK,
            light: THEME_COULEURS.WARNING.LIGHT,
            contrastText: THEME_COULEURS.WARNING.CONTRASTTEXT,
        },
        info: {
            main: THEME_COULEURS.INFO.MAIN,
            dark: THEME_COULEURS.INFO.DARK,
            light: THEME_COULEURS.INFO.LIGHT,
            contrastText: THEME_COULEURS.INFO.CONTRASTTEXT,
        },
        success: {
            main: THEME_COULEURS.SUCCESS.MAIN,
            dark: THEME_COULEURS.SUCCESS.DARK,
            light: THEME_COULEURS.SUCCESS.LIGHT,
            contrastText: THEME_COULEURS.SUCCESS.CONTRASTTEXT,
        },
        critGrey: {
            main: THEME_COULEURS.TEXT.SECONDARY,
            light: THEME_COULEURS.CONTENT.NEUTRAL[200],
            dark: THEME_COULEURS.TEXT.PRIMARY,
            contrastText: THEME_COULEURS.CONTENT.NEUTRAL[100],
        },
        cardShadow: {
            primary: THEME_COULEURS.SHADOW.PRIMARY,
            secondary: THEME_COULEURS.SHADOW.SECONDARY,
            ternary: THEME_COULEURS.SHADOW.TERNARY,
        },
        alert: {
            errorContent: THEME_COULEURS.ALERT.ERRORCONTENT,
            errorFill: THEME_COULEURS.ALERT.ERRORFILL,
            warningContent: THEME_COULEURS.ALERT.WARNINGCONTENT,
            warningFill: THEME_COULEURS.ALERT.WARNINGFILL,
            infoContent: THEME_COULEURS.ALERT.INFOCONTENT,
            infoFill: THEME_COULEURS.ALERT.INFOFILL,
            successContent: THEME_COULEURS.ALERT.SUCCESSCONTENT,
            successFill: THEME_COULEURS.ALERT.SUCCESSFILL,
        },
        appbar: {
            defaultFill: THEME_COULEURS.APPBAR.DEFAULTFILL,
        },
        avatar: {
            fill: THEME_COULEURS.AVATAR.FILL,
        },
        backdrop: {
            fill: THEME_COULEURS.BACKDROP.FILL,
        },
        breadcrumbs: {
            collapseFill: THEME_COULEURS.BREADCRUMBS.COLLAPSEFILL,
        },
        chip: {
            defaultCloseFill: THEME_COULEURS.CHIP.DEFAULTCLOSEFILL,
            defaultHoverFill: THEME_COULEURS.CHIP.DEFAULTHOVERFILL,
            defaultFocusFill: THEME_COULEURS.CHIP.DEFAULTFOCUSFILL,
            defaultEnabledBorder: THEME_COULEURS.CHIP.DEFAULTENABLEDBORDER,
        },
        input: {
            standard: {
                enabledBorder: THEME_COULEURS.INPUT.STANDARD.ENABLEDBORDER,
                hoverBorder: THEME_COULEURS.INPUT.STANDARD.HOVERBORDER,
            },
            filled: {
                enabledFill: THEME_COULEURS.INPUT.FILLED.ENABLEDFILL,
                hoverFill: THEME_COULEURS.INPUT.FILLED.HOVERFILL,
            },
            outlined: {
                enabledBorder: THEME_COULEURS.INPUT.OUTLINED.ENABLEDBORDER,
                hoverBorder: THEME_COULEURS.INPUT.OUTLINED.HOVERBORDER,
            },
        },
        rating: {
            enabledBorder: THEME_COULEURS.RATING.ENABLEDBORDER,
            activeFill: THEME_COULEURS.RATING.ACTIVEFILL,
        },
        switch: {
            knobFill: THEME_COULEURS.SWITCH.KNOBFILL,
            slideFill: THEME_COULEURS.SWITCH.SLIDEFILL,
        },
        tooltip: {
            fill: THEME_COULEURS.TOOLTIP.FILL,
        },
        textFieldBorderColor: THEME_COULEURS.TEXTFIELDBORDER,
        colors: {
            logoRed: THEME_COULEURS.COLORS.LOGO_RED,
            logoOrange: THEME_COULEURS.COLORS.LOGO_ORANGE,
            black: THEME_COULEURS.COLORS.BLACK,
            chipBackground: THEME_COULEURS.COLORS.CHIP_BACKGROUND,
            mapCircle: THEME_COULEURS.COLORS.MAP_CIRCLE,
            grey: {
                '50': THEME_COULEURS.COLORS.GREY[50],
                '100': THEME_COULEURS.COLORS.GREY[100],
                '200': THEME_COULEURS.COLORS.GREY[200],
                '300': THEME_COULEURS.COLORS.GREY[300],
                '400': THEME_COULEURS.COLORS.GREY[400],
                '500': THEME_COULEURS.COLORS.GREY[500],
                '600': THEME_COULEURS.COLORS.GREY[600],
                '700': THEME_COULEURS.COLORS.GREY[700],
                '800': THEME_COULEURS.COLORS.GREY[800],
                '900': THEME_COULEURS.COLORS.GREY[900],
                A100: THEME_COULEURS.COLORS.GREY.A100,
                A200: THEME_COULEURS.COLORS.GREY.A200,
                A400: THEME_COULEURS.COLORS.GREY.A400,
                A700: THEME_COULEURS.COLORS.GREY.A700,
            },
            indigo: {
                '50': THEME_COULEURS.COLORS.INDIGO[50],
                '100': THEME_COULEURS.COLORS.INDIGO[100],
                '200': THEME_COULEURS.COLORS.INDIGO[200],
                '300': THEME_COULEURS.COLORS.INDIGO[300],
                '400': THEME_COULEURS.COLORS.INDIGO[400],
                '500': THEME_COULEURS.COLORS.INDIGO[500],
                '600': THEME_COULEURS.COLORS.INDIGO[600],
                '700': THEME_COULEURS.COLORS.INDIGO[700],
                '800': THEME_COULEURS.COLORS.INDIGO[800],
                '900': THEME_COULEURS.COLORS.INDIGO[900],
                A100: THEME_COULEURS.COLORS.INDIGO.A100,
                A200: THEME_COULEURS.COLORS.INDIGO.A200,
                A400: THEME_COULEURS.COLORS.INDIGO.A400,
                A700: THEME_COULEURS.COLORS.INDIGO.A700,
            },
            deepPurple: {
                '50': THEME_COULEURS.COLORS.DEEP_PURPLE[50],
                '100': THEME_COULEURS.COLORS.DEEP_PURPLE[100],
                '200': THEME_COULEURS.COLORS.DEEP_PURPLE[200],
                '300': THEME_COULEURS.COLORS.DEEP_PURPLE[300],
                '400': THEME_COULEURS.COLORS.DEEP_PURPLE[400],
                '500': THEME_COULEURS.COLORS.DEEP_PURPLE[500],
                '600': THEME_COULEURS.COLORS.DEEP_PURPLE[600],
                '700': THEME_COULEURS.COLORS.DEEP_PURPLE[700],
                '800': THEME_COULEURS.COLORS.DEEP_PURPLE[800],
                '900': THEME_COULEURS.COLORS.DEEP_PURPLE[900],
                A100: THEME_COULEURS.COLORS.DEEP_PURPLE.A100,
                A200: THEME_COULEURS.COLORS.DEEP_PURPLE.A200,
                A400: THEME_COULEURS.COLORS.DEEP_PURPLE.A400,
                A700: THEME_COULEURS.COLORS.DEEP_PURPLE.A700,
            },
            amber: {
                '50': THEME_COULEURS.COLORS.AMBER[50],
                '300': THEME_COULEURS.COLORS.AMBER[300],
                '400': THEME_COULEURS.COLORS.AMBER[400],
                '500': THEME_COULEURS.COLORS.AMBER[500],
                '600': THEME_COULEURS.COLORS.AMBER[600],
                '700': THEME_COULEURS.COLORS.AMBER[700],
                '800': THEME_COULEURS.COLORS.AMBER[800],
                '900': THEME_COULEURS.COLORS.AMBER[900],
                A100: THEME_COULEURS.COLORS.AMBER.A100,
                A200: THEME_COULEURS.COLORS.AMBER.A200,
                A400: THEME_COULEURS.COLORS.AMBER.A400,
                A700: THEME_COULEURS.COLORS.AMBER.A700,
            },
            orange: {
                '50': THEME_COULEURS.COLORS.ORANGE[50],
                '100': THEME_COULEURS.COLORS.ORANGE[100],
                '200': THEME_COULEURS.COLORS.ORANGE[200],
                '300': THEME_COULEURS.COLORS.ORANGE[300],
                '400': THEME_COULEURS.COLORS.ORANGE[400],
                '500': THEME_COULEURS.COLORS.ORANGE[500],
                '600': THEME_COULEURS.COLORS.ORANGE[600],
                '700': THEME_COULEURS.COLORS.ORANGE[700],
                '800': THEME_COULEURS.COLORS.ORANGE[800],
                '900': THEME_COULEURS.COLORS.ORANGE[900],
                A100: THEME_COULEURS.COLORS.ORANGE.A100,
                A200: THEME_COULEURS.COLORS.ORANGE.A200,
                A400: THEME_COULEURS.COLORS.ORANGE.A400,
                A700: THEME_COULEURS.COLORS.ORANGE.A700,
            },
            pink: {
                '50': THEME_COULEURS.COLORS.PINK[50],
                '100': THEME_COULEURS.COLORS.PINK[100],
                '200': THEME_COULEURS.COLORS.PINK[200],
                '300': THEME_COULEURS.COLORS.PINK[300],
                '400': THEME_COULEURS.COLORS.PINK[400],
                '500': THEME_COULEURS.COLORS.PINK[500],
                '600': THEME_COULEURS.COLORS.PINK[600],
                '700': THEME_COULEURS.COLORS.PINK[700],
                '800': THEME_COULEURS.COLORS.PINK[800],
                '900': THEME_COULEURS.COLORS.PINK[900],
                A100: THEME_COULEURS.COLORS.PINK.A100,
                A200: THEME_COULEURS.COLORS.PINK.A200,
                A400: THEME_COULEURS.COLORS.PINK.A400,
                A700: THEME_COULEURS.COLORS.PINK.A700,
            },
        },
    },
    // TYPOGRAPHY
    typography: {
        fontFamily: [`'Roboto', sans-serif`].join(','),
        h1: {
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '96px',
            lineHeight: '112.03px',
            letterSpacing: '-1.5px',
        },
        h2: {
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '60px',
            lineHeight: '72px',
            letterSpacing: '-0.5px',
        },
        h3: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '48px',
            lineHeight: '56.02px',
        },
        h4: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '34px',
            lineHeight: '41.99px',
            letterSpacing: '0.25px',
        },
        h5: {
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '32.02px',
        },
        h6: {
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: '0.15px',
        },
        subtitle1: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '28px',
            letterSpacing: '0.15px',
        },
        subtitle2: {
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '21.98px',
            letterSpacing: '0.1px',
        },
        body1: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.15px',
        },
        body2: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20.02px',
            letterSpacing: '0.17px',
        },
        button: { textTransform: 'unset' },
        caption: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '19.92px',
            letterSpacing: '0.4px',
        },
        overline: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '31.92px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
        },
        boutonLarge: {
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '26px',
            letterSpacing: '0.46px',
            textTransform: 'uppercase',
        },
        boutonMedium: {
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '24px',
            letterSpacing: '0.4px',
            textTransform: 'uppercase',
        },
        boutonSmall: {
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '13px',
            lineHeight: '22px',
            letterSpacing: '0.46px',
            textTransform: 'uppercase',
        },
        avatarLetter: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '20px',
            letterSpacing: '0.14px',
        },
        inputLabel: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '12px',
            letterSpacing: '0.15px',
        },
        formSectionTitle: {
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '-1px',
        },
        helperText: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '20px',
            letterSpacing: '0.4px',
        },
        inputText: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.15px',
        },
        tooltip: {
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '10px',
            lineHeight: '14px',
        },
        hEnteteTableau: {
            fontSize: 12,
            color: THEME_COULEURS.CONTENT.NEUTRAL[500],
        },
        hValeurTableau: {
            fontSize: 13,
            color: THEME_COULEURS.TEXT.PRIMARY,
            textTransform: 'capitalize',
            fontWeight: 400,
            lineHeight: 16,
        },
        hValeurMoyenneTableau: {
            fontSize: 14,
            color: THEME_COULEURS.TEXT.PRIMARY,
            textTransform: 'capitalize',
            fontWeight: 500,
            lineHeight: 16,
        },
        hTitreDialogue: {
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 700,
        },
        compteurCaracteres: {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '12px',
            letterSpacing: '0.15px',
            color: THEME_COULEURS.CONTENT.NEUTRAL[200],
        },
        resumeSousTitre: {
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '20px',
            color: THEME_COULEURS.TEXT.SECONDARY,
        },
        resumeContent: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: THEME_COULEURS.TEXT.SECONDARY,
        },
        secondaryText: {
            textTransform: 'uppercase',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '10px',
            lineHeight: '16.6px',
            color: THEME_COULEURS.SECONDARY.MAIN,
        },
    },
    // COMPONENTS
    components: {
        // ALERT
        MuiAlert: {
            styleOverrides: {
                standardSuccess: {
                    backgroundColor: THEME_COULEURS.ALERT.SUCCESSFILL,
                    color: THEME_COULEURS.ALERT.SUCCESSCONTENT,
                },
                standardError: {
                    backgroundColor: THEME_COULEURS.ALERT.ERRORFILL,
                    color: THEME_COULEURS.ALERT.ERRORCONTENT,
                },
                standardWarning: {
                    backgroundColor: THEME_COULEURS.ALERT.WARNINGFILL,
                    color: THEME_COULEURS.ALERT.WARNINGCONTENT,
                },
                standardInfo: {
                    backgroundColor: THEME_COULEURS.ALERT.INFOFILL,
                    color: THEME_COULEURS.ALERT.INFOCONTENT,
                },
            },
        },
        // SNACKBAR
        MuiSnackbar: {
            styleOverrides: {
                anchorOriginTopCenter: {
                    '@media (min-width: 600px)': {
                        top: '99px',
                    },
                },
            },
        },
        MuiTooltip: {
            defaultProps: {
                enterDelay: 450,
                enterNextDelay: 450,
                leaveDelay: 250,
            },
        },
    },
});

AppTheme.typography.h1 = {
    ...AppTheme.typography.h1,
    [AppTheme.breakpoints.down('lg')]: {
        ...AppTheme.typography.h2,
    },
};

AppTheme.typography.h2 = {
    ...AppTheme.typography.h2,
    [AppTheme.breakpoints.down('lg')]: {
        ...AppTheme.typography.h3,
    },
};

AppTheme.typography.h3 = {
    ...AppTheme.typography.h3,
    [AppTheme.breakpoints.down('lg')]: {
        ...AppTheme.typography.h4,
    },
};

AppTheme.typography.h4 = {
    ...AppTheme.typography.h4,
    [AppTheme.breakpoints.down('lg')]: {
        ...AppTheme.typography.h5,
    },
};

AppTheme.typography.h5 = {
    ...AppTheme.typography.h5,
    [AppTheme.breakpoints.down('lg')]: {
        ...AppTheme.typography.h6,
    },
};

AppTheme.typography.h6 = {
    ...AppTheme.typography.h6,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '18px',
    },
};

AppTheme.typography.subtitle1 = {
    ...AppTheme.typography.subtitle1,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '14px',
        lineHeight: '21.98px',
        letterSpacing: '0.1px',
    },
};

AppTheme.typography.subtitle2 = {
    ...AppTheme.typography.subtitle2,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '12px',
    },
};

AppTheme.typography.body1 = {
    [AppTheme.breakpoints.down('lg')]: {
        ...AppTheme.typography.body2,
    },
};

AppTheme.typography.body2 = {
    ...AppTheme.typography.body2,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '12px',
    },
};

AppTheme.typography.caption = {
    ...AppTheme.typography.caption,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '11px',
    },
};

AppTheme.typography.overline = {
    ...AppTheme.typography.overline,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '11px',
    },
};

AppTheme.typography.boutonLarge = {
    ...AppTheme.typography.boutonLarge,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '13px',
    },
};

AppTheme.typography.boutonMedium = {
    ...AppTheme.typography.boutonMedium,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '12px',
    },
};

AppTheme.typography.boutonSmall = {
    ...AppTheme.typography.boutonSmall,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '11px',
    },
};

AppTheme.typography.avatarLetter = {
    ...AppTheme.typography.avatarLetter,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '18px',
    },
};

AppTheme.typography.inputLabel = {
    ...AppTheme.typography.inputLabel,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '11px',
    },
};

AppTheme.typography.formSectionTitle = {
    ...AppTheme.typography.formSectionTitle,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '18px',
    },
};

AppTheme.typography.helperText = {
    ...AppTheme.typography.helperText,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '11px',
    },
};

AppTheme.typography.inputText = {
    ...AppTheme.typography.inputText,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '14px',
    },
};

AppTheme.typography.tooltip = {
    ...AppTheme.typography.tooltip,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '9px',
    },
};

AppTheme.typography.hEnteteTableau = {
    ...AppTheme.typography.hEnteteTableau,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '11px',
    },
};

AppTheme.typography.hValeurTableau = {
    ...AppTheme.typography.hValeurTableau,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '11px',
    },
};

AppTheme.typography.hValeurMoyenneTableau = {
    ...AppTheme.typography.hValeurMoyenneTableau,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '12px',
    },
};

AppTheme.typography.hTitreDialogue = {
    ...AppTheme.typography.hTitreDialogue,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '22px',
    },
};

AppTheme.typography.compteurCaracteres = {
    ...AppTheme.typography.compteurCaracteres,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '11px',
    },
};

AppTheme.typography.resumeSousTitre = {
    ...AppTheme.typography.resumeSousTitre,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '12px',
    },
};

AppTheme.typography.resumeContent = {
    ...AppTheme.typography.resumeContent,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '12px',
    },
};

AppTheme.typography.secondaryText = {
    ...AppTheme.typography.secondaryText,
    [AppTheme.breakpoints.down('lg')]: {
        fontSize: '9px',
    },
};

export default AppTheme;
