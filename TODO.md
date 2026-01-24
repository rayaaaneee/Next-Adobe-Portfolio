* [X] Fix Menu Animation (broken)
* [X] PWA : https://ducanh-next-pwa.vercel.app/docs/next-pwa/getting-started
* [X] Make metadatas
* [X] Dynamic Site-Map.xml (using pages)
* [X] Fill manifest.json
* [X] Fix box-sizing problem on menu animation
* [X] Fix language select on menu (cannot click on options)
* [X] Fix .env access to store Resume filename
* [X] Clean CSS architecture (split files)
* [X] Make adaptableGrid not a client component (possible but requires handling icon function)
* [X] Print element name on grid top (adaptable grid)
* [X] Page Flow : Factorize headings
* [X] CC 4.0 (copyrights)
* [X] Fix Animation for grid wrappers appeareance on showing more row
* [X] Blog

  * [X] Citation on MDX (> blockquote)
  * [X] Use adaptable grid as blog pager
  * [ ] For each blog :
    * [ ] Further readings (linked blogs)
    * [X] Nb minutes reads
    * [ ] Links to previous and next blog
    * [X] Tags
    * [X] share button
  * [X] Precize disponible languages on each page
* [ ] Create grid element appearance animation on switching techs (part skills) : hard
* [X] Bug on hobbiEs adaptable grid (on click on xs-)
* [X] tailwind-scrollbar installation
* [X] custom scrollbar colors
* [X] Remove box shadows on index title
* [X] set background elements behind texts (index)
* [X] Reduce icon sizes
* [X] Fix appearance animations
* [X] Fix backdrop filter on blog page
* [X] Links to Companies (/home)
* [ ] Sticky Header With page title on scroll (md -)
* [X] Default theme to light
* [X] Medias

  * [X] Tooltip media queries
  * [X] Menu medias
  * [X] Home media queries
    * [ ] Element Expansion
    * [X] All other
  * [X] Index page medias
  * [X] Made Medias for background (to start)
    * [X] Change header / footer triangle size on lg-
* [X] FadeIn on portfolio page
* [X] Home : Fix pointer-events before appearance
* [X] Fix bug on grid expansion
* [X] Remove expand button animation (adaptive grid)
* [X] Some fixes needed while browsing between /blog and /blog/[id] (title broken, fix needed)
* [ ] Blog TOC fixes (if h1 doesn't have a children, it will be not integrated to the TOC)
* [ ] Carousel Image Left Chevron doesn't have a great animation whille disappearing
* [ ] Pageable Grid -> blogs

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
