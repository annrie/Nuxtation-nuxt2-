function externalLinks() {
  if (!document.getElementsByTagName) {
    return;
  }
  const anchors = document.getElementsByTagName("a");
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    if (
      anchor.getAttribute("href") &&
      (anchor.getAttribute("rel") === "external nofollow" ||
        anchor.getAttribute("rel") === "nofollow external" ||
        anchor.getAttribute("rel") === "external")
    ) {
      anchor.target = "_blank";
    }
  }
}
window.onload = externalLinks;
