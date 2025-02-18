export const getAccentColor = () => {
    return localStorage.getItem("accent-color") || getComputedStyle(document.documentElement).getPropertyValue("--accent-color").trim();
};

export const setAccentColor = (color) => {
    let rgbaColor = color.concat("B2");
    localStorage.setItem("accent-color", color);
    document.documentElement.style.setProperty("--accent-color", color);
    document.documentElement.style.setProperty("--accent-color-underline", rgbaColor);
};
