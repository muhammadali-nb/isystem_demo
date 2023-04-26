export const fileToUrl = (file) => {
    if (!file) return "";
    if (typeof file === "string") return file;
    return URL.createObjectURL(file)
}