import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import { registerIconLibrary } from "@shoelace-style/shoelace/dist/utilities/icon-library.js";

registerIconLibrary("fa", {
  resolver: (name: any) => {
    const filename = name.replace(/^fa[rbs]-/, "");
    let folder = "regular";
    if (name.substring(0, 4) === "fa-") folder = "regular";
    if (name.substring(0, 4) === "fas-") folder = "solid";
    if (name.substring(0, 4) === "fab-") folder = "brands";
    return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/svgs/${folder}/${filename}.svg`;
  },
  mutator: (svg: any) => svg.setAttribute("fill", "currentColor"),
});
// Set the base path to the folder you copied Shoelace's assets to
