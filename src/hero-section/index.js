/**
 * BLOCK: Hero Section
 * 
 * @since 1.0.0
 */

import './editor.scss'
import './style.scss'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

import edit from './edit'

registerBlockType( 'block-pack/hero-section', {
  title: __( 'Hero Section' ),
  icon: 'admin-post',
  category: 'common',
  keywords: [
    __( 'block pack - hero section' ),
    __( 'hero section' )
  ],
  supports: { 
    align: [ 'full' ],
  },
  attributes: {
    align: {
      type: 'string',
      default: 'full'
    },
    title: {
      type: 'string',
      default: __( 'Heading Text...' )
    },
    desc: {
      type: 'string',
      default: __( 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' )
    },
    ctaTextFirst: {
      type: 'string',
      default: __( 'Button First' )
    },
    ctaLinkFirst: {
      type: 'string',
      default: '#'
    },
    ctaTextSecond: {
      type: 'string',
      default: __( 'Button Second' )
    },
    ctaLinkSecond: {
      type: 'string',
      default: '#'
    },
    image: {
      type: 'object',
      default: {
        id: 0,
        url: '',
        width: 0,
        height: 0,
      }
    },
    position: {
      type: 'string',
      default: 'image-right' // options: image-right, image-left
    }
  },
  edit,
  save () {
    return null
  }
} )
