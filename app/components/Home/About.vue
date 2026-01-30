<template>
  <h2>About</h2>
  <div class="flex flex-col sm:flex-row sm:items-start">
    <div class="pr-0 sm:pr-4 md:pr-8 lg:pr-12">
      <p>
        Welcome, visitor! I am a second year Ph.D. student in Computer Science
        at the University of Illinois Urbana-Champaign, advised by Professor

        <ULink
          to="https://nikita-phd.pages.dev"
          target="_blank"
          class="text-dark-blue"
          external
          >Nikita Borisov</ULink
        >. My research lies at the intersection of web privacy and systems
        engineering. I focus on studying the online advertising ecosystem's
        effect on user privacy. A core ideal of mine is that my work has
        <em>impact</em>. I know that this word is often used in a nebulous sort
        of way. Specifically, my contributions should enable an ordinary
        person to navigate the Internet more safely -- without the need for
        hypervigilance. Ultimately, I aim to improve user quality of life
        through the development of privacy-enhancing technologies and the study
        of emerging tracking paradigms.
      </p>
      <br />
      <p>
        While my work is important to me, so are my hobbies. I play chess, run,
        and watch football. Recently, I've started learning to play guitar and
        knit. On the technical side of things, I'm working on setting up the
        perfect homelab, complete with self-hosted, high-performance services
        and robust security infrastructure. To stay practically engaged when my
        work gets too theoretical, I like to challenge myself on various
        security training platforms. My interests are truly all over the place,
        and I wouldn't have it any other way :D
      </p>
    </div>
    <NuxtPicture
      src="/images/portrait.webp"
      :img-attrs="{
        class: 'rounded-3xl w-full max-w-7xl',
      }"
    />
  </div>
</template>
