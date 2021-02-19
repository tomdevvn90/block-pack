<?php 
/**
 * Hooks 
 */

function blockpack_setup() {
  add_theme_support( 'align-wide' );
}
add_action( 'after_setup_theme', 'blockpack_setup' );