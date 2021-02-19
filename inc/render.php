<?php 
/**
 * Block render 
 */

/**
 * BLOCK: Hero Section
 * 
 * @param Array $atts 
 * @param String $content 
 * 
 * @return Html
 */
function blockpack_hero_section_render( $atts = [], $content = null ) {
  $atts = shortcode_atts( [
    'align' => 'full',
    'title' => __( 'Heading Text...' ),
    'desc' => __( 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' ),
    'ctaTextFirst' => __( 'Button First' ),
    'ctaLinkFirst' => '#',
    'ctaTextSecond' => __( 'Button Second' ),
    'ctaLinkSecond' => '#',
    'image' => [
      'id' => 0,
      'url' => ''
    ],
    'position' => 'image-right'
  ], $atts ); 

  ob_start();
  ?>
  <div class="bg-white pb-8 sm:pb-12 lg:pb-12">
    <div class="pt-8 sm:pt-12 lg:relative lg:py-48">
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          <div class="mt-20">
            <div class="mt-6 sm:max-w-xl">
              <h1 class="text-4xl font-medium text-gray-900 sm:text-5xl"><?= $atts[ 'title' ] ?></h1>
              <div class="relative mask-layer-mobile mx-auto max-w-md my-10 lg:hidden">
                <svg class="absolute w-1/2 -top-1 -ml-20 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392"> <defs> <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"> <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect> </pattern> </defs> <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect> </svg>
                <div class="absolute top-0 image-mask w-full h-full transform -rotate-6 -ml-4 bg-secondary-600 __mask-decor"></div>
                <div class="image-mask w-full h-full __mask-image" style="background-image: url('<?= $atts[ 'image' ][ 'url' ] ?>');"></div>
              </div>
              <p class="mt-6 text-xl text-gray-500"><?= $atts[ 'desc' ] ?></p>
            </div>
            <div class="mt-12 sm:max-w-lg sm:w-full sm:flex">
              <a href="<?= $atts[ 'ctaLinkFirst' ] ?>" class="block rounded-md border border-transparent px-5 py-3 bg-primary-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10 text-center sm:mb-0 mb-3"><?= $atts[ 'ctaTextFirst' ] ?></a>
              <a href="<?= $atts[ 'ctaLinkSecond' ] ?>" class="block rounded-md border border-transparent px-5 py-3 bg-secondary-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10 sm:ml-4 text-center"><?= $atts[ 'ctaTextSecond' ] ?></a>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:mx-auto sm:max-w-3xl sm:px-6 hidden lg:block">
        <div class="sm:relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"> 
          <div class="hidden sm:block">
            <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392"> <defs> <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"> <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect> </pattern> </defs> <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect> </svg>
          </div>
          <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
            <div class="absolute top-0 image-mask w-full lg:h-full transform -rotate-6 -ml-4 bg-secondary-600"></div>
            <div class="absolute top-0 image-mask w-full lg:h-full" style="background-image: url('<?= $atts[ 'image' ][ 'url' ] ?>');"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php 
  return ob_get_clean();
}