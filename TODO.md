* [X] Fix Menu Animation (broken)
* [X] PWA : https://ducanh-next-pwa.vercel.app/docs/next-pwa/getting-started
* [ ] Make metadatas
* [X] Fix box-sizing problem on menu animation
* [X] Fix language select on menu (cannot click on options)
* [X] Fix .env access to store Resume filename
* [ ] Clean CSS architecture (split files)
* [X] Make adaptableGrid not a client component (possible but requires handling icon function)
* [ ] Print element name on grid bottom part only if one row (for skills & hobbies)
* [X] Fix Animation for grid wrappers appeareance on showing more rows
* [ ] Create grid element appearance animation on switching techs (part skills) : hard
* [X] tailwind-scrollbar installation
* [ ] custom scrollbar colors
* [ ] Medias
  * [ ] Tooltip media queries
  * [X] Menu medias
  * [X] Index page medias
  * [X] Made Medias for background (to start)
    * [X] Change header / footer triangle size on lg-
    * [ ] Change triangle animations using medias (ok for lg+, change for other)
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
