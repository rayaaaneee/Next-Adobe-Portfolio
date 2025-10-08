* [X] Fix Menu Animation (broken)
* [ ] PWA : https://ducanh-next-pwa.vercel.app/docs/next-pwa/getting-started
* [ ] Make metadatas
* [X] Fix box-sizing problem on menu animation
* [X] Fix language select on menu (cannot click on options)
* [ ] Fix .env access to store Resume filename
* [ ] Medias
  * [ ] Tooltip media queries
  * [ ] Menu medias
  * [ ] Index page medias
  * [X] Made Medias for background (to start)
    * [ ] Change header / footer triangle size on lg-
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
