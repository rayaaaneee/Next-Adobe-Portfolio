* [X] Fix Menu Animation (broken)
* [X] PWA : https://ducanh-next-pwa.vercel.app/docs/next-pwa/getting-started
* [ ] Make metadatas
* [ ] Fill manifest.json
* [X] Fix box-sizing problem on menu animation
* [X] Fix language select on menu (cannot click on options)
* [X] Fix .env access to store Resume filename
* [X] Clean CSS architecture (split files)
* [X] Make adaptableGrid not a client component (possible but requires handling icon function)
* [X] Print element name on grid top (adaptable grid)
* [X] Fix Animation for grid wrappers appeareance on showing more row
* [ ] Create grid element appearance animation on switching techs (part skills) : hard
* [ ] Bug on hobbiEs adaptable grid (on click on xs-)
* [X] tailwind-scrollbar installation
* [ ] custom scrollbar colors
* [ ] Display CV on menu
* [ ] Remove box shadows on index title
* [ ] set background elements behind texts (index)
* [ ] Reduce icon sizes
* [ ] Fix appearance animations
* [ ] Fix backdrop filter on blog page
* [ ] Default theme to light
* [ ] Medias

  * [ ] Tooltip media queries
  * [X] Menu medias
  * [X] Index page medias
  * [X] Made Medias for background (to start)
    * [X] Change header / footer triangle size on lg-
* [X] FadeIn on portfolio page
* [X] Home : Fix pointer-events before appearance

<!--
Optimized with next/image
<div
  className="linkedin w-8 h-8"
  style={{ '--icon': `url(${linkedin.src})`, '--icon-hover': `url(${linkedinHover.src})` } as any}
/>
scss
Copier le code
.linkedin {
  background-image: var(--icon);
  @include hover-safe {
    &:hover {
      background-image: var(--icon-hover);
    }
  }
}
--->
