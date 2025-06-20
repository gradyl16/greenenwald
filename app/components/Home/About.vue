<template>
  <h2>About</h2>
  <div class="flex flex-col sm:flex-row">
    <div class="pr-0 sm:pr-4 md:pr-8 lg:pr-12">
      <p>
        Welcome, visitor! I am a first year Ph.D. student in Computer Science at
        the University of Illinois Urbana-Champaign, advised by Professor

        <ULink
          to="https://nikita-phd.pages.dev"
          target="_blank"
          class="text-dark-blue"
          external
          >Nikita Borisov</ULink
        >. My research interests are primarily in web security and privacy.
        Particularly, I am most invested in understanding and mitigating the
        online advertising ecosystem's harm on user privacy. A core ideal of
        mine is that my work has <em>impact</em>. Specifically, what I learn and
        discover should enable an ordinary person to navigate the Internet more
        privately. Ultimately, I aim to improve user quality of life through the
        development of privacy-enhancing technologies and the study of emerging
        tracking paradigms.
      </p>
      <p>
        While my work is important to me, so are my hobbies. I enjoy playing
        chess (badly). I also love to exercise. I try to run a few miles every
        day; I'd like to participate in a marathon one day. Another hobby of
        mine is watching and playing sports, especially football and wrestling.
        Recently, I've started learning to play guitar and knit. On the
        technical side of things, I dream of setting up the perfect homelab,
        complete with self-hosted, high-performance services and robust security
        infrastructure. To stay practically engaged when my work gets too
        theoretical, I like to challenge myself on various security training
        platforms. My interests are truly all over the place, and I wouldn't
        have it any other way :D
      </p>
    </div>
    <NuxtPicture
      src="/images/portrait.webp"
      :img-attrs="{
        class: 'rounded-3xl w-full min-w-xs',
      }"
    />
  </div>
</template>
