<template>
  <div>
    <AppContainer
      ><section class="px-4 mx-auto my-24 max-w-8xl">
        <div class="flex flex-col lg:flex-row">
          <div
            class="flex flex-col items-center pr-0 mb-8 lg:items-start lg:pr-8 lg:w-2/3"
          >
            <h1
              class="my-8 text-4xl font-semibold leading-none tracking-tight text-center text-gray-900 lg:text-left dark:text-gray-100 sm:text-6xl lg:text-7xl sm:my-12"
            >
              Easy hosting<br />with node.
            </h1>
            <h3
              class="mb-4 text-lg text-center text-gray-700 lg:text-left sm:text-xl lg:text-2xl sm:leading-tight sm:mb-8 dark:text-gray-300"
            >
              Build multiple sites in one package with easy modules
            </h3>
            <div class="flex items-center space-x-6">
              <a href="/installation" class="button-link mx-auto md:mx-0 large">
                Get started
              </a>
              <a
                href="https://github.com/1hostjs/hosting"
                class="pt-px mt-px font-medium text-gray-800 border-b-2 border-transparent dark:text-gray-100 hover:border-gray-800 dark:hover:border-gray-100"
                >Open on GitHub</a
              >
            </div>
          </div>
          <div class="w-full m-auto lg:w-1/3 sm:w-580px">
            <div class="md:pl-2">
              <div
                class="relative flex flex-col w-full h-64 overflow-hidden text-gray-600 bg-gray-800 rounded-lg group"
              >
                <!---->
                <div
                  class="relative flex items-center w-full h-12 border-b border-gray-700"
                >
                  <div class="flex ml-4">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 ml-2 bg-yellow-400 rounded-full"></div>
                    <div class="w-3 h-3 ml-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div
                    class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
                  >
                    Bash
                  </div>
                </div>
                <div class="flex flex-1 p-4 font-mono">
                  <span class="inline-block mr-2 font-bold select-none">$</span>
                  <span class="inline-block text-gray-200"
                    >npm install @1hostjs/hosting</span
                  >
                </div>
                <div
                  class="py-2 text-center transition-opacity opacity-0 group-hover:opacity-100"
                ></div>
              </div>
            </div>
          </div>
        </div></section
    ></AppContainer>
  </div>
</template>
<script>
export default {};
</script>
