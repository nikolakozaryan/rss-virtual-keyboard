export default

function addFavicon() {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href="../images/favicon-32x32.png";

    document.head.append(favicon)
}