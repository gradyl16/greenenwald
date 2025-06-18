<template>
  <div>
    <section id="about">
      <div>
        <div class="rounded-3xl bg-dark-gray p-8">
          <h2 class="text-2xl">About</h2>
          <div class="flex flex-col sm:flex-row">
            <div>
              <p>
                Welcome, visitor! I am a first year Ph.D. student in Computer Science at the University of Illinois
                Urbana-Champaign, advised by Professor
                <NuxtLink
to="https://nikita-phd.pages.dev" target="_blank" class="hover:underline text-dracula-green"
                  external>
                  Nikita Borisov.
                </NuxtLink>
                My research interests are primarily in web security and privacy. Particularly, I am most invested in
                understanding and mitigating the online advertising ecosystem's harm on user privacy. A core ideal of
                mine is that my work has <em>impact</em>. Specifically, what I learn and discover should enable an
                ordinary person to navigate the Internet more privately. Ultimately, I aim to improve user quality of
                life through the development of privacy-enhancing technologies and the study of emerging tracking
                paradigms.
              </p>
              <p>
                While my work is important to me, so are my hobbies. I enjoy playing chess (badly). I also love to
                exercise. I try to run a few miles every day; I'd like to participate in a marathon one day. Another
                hobby of mine is watching and playing sports, especially football and wrestling. Recently, I've started
                learning to play guitar and knit. On the technical side of things, I dream of setting up the perfect
                homelab, complete with self-hosted, high-performance services and robust security infrastructure. To
                stay practically engaged when my work gets too theoretical, I like to challenge myself on various
                security training platforms. My interests are truly all over the place, and I wouldn't have it any other
                way :D
              </p>
            </div>
            <NuxtImg
src="/images/portrait.jpg" alt="Portrait of Dylen Greenenwald"
              class="w-full sm:w-auto max-w-xs self-start rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
    <!-- News -->
    <section id="news">
      <div class="rounded-3xl bg-dark-gray p-8">
        <h2 class="text-dracula-green">News</h2>
        <AccordionNews />
      </div>
    </section>
    <!-- Publications -->
    <section id="publications">
      <div class="rounded-3xl bg-dark-gray p-8">
        <h2 class="text-dracula-green">Publications</h2>
        <p>Nothing to see here (yet)...</p>
      </div>
    </section>
  </div>
</template>
