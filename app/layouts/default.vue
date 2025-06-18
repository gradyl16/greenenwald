<template>
  <UApp>
    <div class="h-screen flex flex-col">
      <main class="flex-grow m-auto w-full max-w-6xl space-y-2">
        <PageBanner />
        <NavigationMenu />
        <slot />
      </main>
      <PageFooter />
    </div>
  </UApp>
</template>
