<?php
/**
 * Plugin Name: Block Pack — CGB Gutenberg Block Plugin
 * Plugin URI: #
 * Description: is a Gutenberg plugin created via create-guten-block.
 * Author: Beplus
 * Author URI: #
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Block Pack
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';


/**
 * Includes
 */
require_once plugin_dir_path( __FILE__ ) . 'inc/hooks.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/helpers.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/render.php';