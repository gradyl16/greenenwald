<template>
  <Container>
    <ProseH2 class="!mt-0">About</ProseH2>
    <div class="flex flex-col sm:flex-row sm:items-start">
      <div class="flex flex-col mr-6">
        <ProseP>
          Welcome, visitor! I am a third year Ph.D. candidate in Computer
          Science at the University of Illinois Urbana-Champaign, advised by
          Professor

          <NuxtLink
            class="text-comment underline"
            to="https://nikita-phd.pages.dev"
            target="_blank"
            external
            >Nikita Borisov</NuxtLink
          >. My research lies at the intersection of web privacy and systems
          engineering. I focus on studying the online advertising ecosystem's
          effect on user privacy. A core ideal of mine is that my work has
          <em>impact</em>. Specifically, my contributions should enable an
          ordinary person to navigate the Internet more safely -- without the
          need for hypervigilance or extensive client modifications. Ultimately,
          I aim to improve user quality of life through the development of
          privacy-enhancing technologies and the study of emerging tracking
          paradigms.
          <br />
          <br />
          While my work is important to me, so are my hobbies. I am an avid
          distance runner, working up to my first marathon. I am also a
          locksport enthusiast (physical security counts too!). I've recently
          picked up a few other activities, like playing guitar and knitting. On
          the technical side of things, I am working on setting up the perfect
          homelab, complete with self-hosted, high-performance services, and
          robust security infrastructure. To stay practically engaged, I like to
          challenge myself with CTFs and Hackathons. I am interested in almost
          anything that stimulates the mind, so feel free to reach out for a
          conversation!
        </ProseP>
      </div>
      <NuxtPicture
        src="/images/portrait.webp"
        :img-attrs="{
          class: 'rounded-3xl w-full max-w-4xl',
        }"
      />
    </div>
  </Container>
</template>
