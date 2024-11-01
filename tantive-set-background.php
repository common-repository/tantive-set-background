<?php
/**
 * Plugin Name:       Tantive Set Background
 * Description:       A plugin to allow background images to be set for all blocks.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.2
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Plufin UEI:        https://tantive-sl.com/setBackground
 * Author URI:        https://tantive-sl.com
 * Text Domain:       tantive-set-background
 *
 * @package           create-block
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'TANTIVE_SET_BACKGROUND_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function tantive_set_background_tantive_set_background_block_init() {
	$script_handle = 'text_domain_handle';

	wp_register_script( 
		$script_handle, 
		plugins_url( 'build/index.js', __FILE__ ), 
		array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-block-editor' ),
		// filemtime( plugin_dir_path( __FILE__ ) . 'js/editor.build.js' ),
		// true,
	);
	
	register_block_type( __DIR__ . '/build' , array( 'editor_script' => $script_handle ));

	wp_set_script_translations( $script_handle, 'tantive-set-background', plugin_dir_path( __FILE__ ) . 'languages' );

	load_plugin_textdomain( 'tantive-set-background', false, basename( TANTIVE_SET_BACKGROUND_PATH ) . '/languages' );

}
add_action( 'init', 'tantive_set_background_tantive_set_background_block_init' );

