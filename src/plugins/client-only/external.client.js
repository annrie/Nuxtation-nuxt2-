function externalLinks() {
  if (!document.getElementsByTagName) {
    return;
  }
  const anchors = document.getElementsByTagName("a");
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    if (
      anchor.getAttribute("href") &&
      (anchor.getAttribute("rel") === "noopener noreferrer" ||
        anchor.getAttribute("rel") === "noreferrer noopener" ||
        anchor.getAttribute("rel") === "external")
    ) {
      anchor.target = "_blank";
    }
  }
}
window.onload = externalLinks;
