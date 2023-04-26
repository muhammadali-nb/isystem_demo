export const validateColor = (color) => {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
    const hslRegex = /^hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)$/;

    let isValid = false;

    if (!color || hexRegex.test(color) || rgbRegex.test(color) || hslRegex.test(color)) isValid = true

    return isValid;
}