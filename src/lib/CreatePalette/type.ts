
export type CreatePalette = (color: string, altColor?: string) => Palette
export type Palette = {
    light: string;
    main: string;
    hover: string;
    alt: string;
    dark: string;
    shad: string;
    over: string;
}