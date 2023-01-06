export const useTheme = () => {
  function toggleTheme() {
    const t = (theme() == 'dark') ? 'light' : 'dark';

    setTheme(t);
    updateTheme();
  }

  function updateTheme() {
    const dark = theme() == 'dark';

    const element = document.documentElement;
    const classes = element.classList;

    if(dark) classes.add('dark');
    else classes.remove('dark');
  }

  function theme() {
    return localStorage.theme || preferedTheme();
  }

  function setTheme(theme: string) {
    if(theme == preferedTheme()) localStorage.removeItem('theme');
    else localStorage.theme = theme;
  }

  function preferedTheme() {
    return prefersDarkMode() ? 'dark' : 'light';
  }

  function prefersDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return {
    toggleTheme, updateTheme,
    theme, setTheme, preferedTheme, prefersDarkMode
  }
}
