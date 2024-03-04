(function() {
    const theme = localStorage.getItem("theme")||'auto';
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.getElementsByTagName('html')[0].dataset.theme = window.location.pathname === '/apptheme' ? theme : 'none';
    localStorage.setItem("system-theme", dark ? 'dark' : 'light')
})();
