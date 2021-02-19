/**
 * EDIT:
 */

const { __ } = wp.i18n
import { Fragment } from '@wordpress/element'
import { InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'
import { PanelBody, TextControl, TextareaControl, Button, ResponsiveWrapper } from '@wordpress/components'

export default function( props ) {

  const { attributes, setAttributes, className } = props
  const { title, desc, ctaTextFirst, ctaLinkFirst, ctaTextSecond, ctaLinkSecond, image, position } = attributes

  const onSelectMedia = ( media ) => { 
    let image = {
			id: media.id,
			url: media.url,
      width: media.width,
      height: media.height,
		}

		setAttributes( { image } )
	}

  const onRemoveHeroImage = () => {
    let image = {
			id: 0,
			url: '',
      width: 0,
      height: 0,
		}

		setAttributes( { image } )
  }

  return <Fragment>
    <InspectorControls>
      <PanelBody title={ __( 'Content' ) } initialOpen={ true } icon="text">
        <MediaUploadCheck>
          <MediaUpload
            onSelect={ onSelectMedia }
            value={ attributes.image.id }
            allowedTypes={ [ 'image' ] }
            render={ ( { open } ) => (
              <Button 
                className={ attributes.image.id == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                onClick={ open }
              >
                { attributes.image.id == 0 && __( 'Choose an hero image' ) }
                {
                  attributes.image.url != undefined && 
                  <ResponsiveWrapper
                    naturalWidth={ attributes.image.width }
                    naturalHeight={ attributes.image.height }
                  >
                    <img src={ attributes.image.url } />
                  </ResponsiveWrapper>
                }
              </Button>
            ) }
          />
        </MediaUploadCheck>
        { 
          attributes.image.id != 0 && 
          <MediaUploadCheck>
            <Button 
              onClick={onRemoveHeroImage} 
              isLink 
              isDestructive
            >
              { __( 'Remove Hero Image' ) }
            </Button>
          </MediaUploadCheck>
        }
        <hr />
        <TextControl
          label={ __( 'Heading Text' ) }
          value={ title }
          help={ __( 'Type your content for heading text.' ) }
          onChange={ ( title ) => setAttributes( { title } ) }
        />
        <TextareaControl
          label={ __( 'Description' ) }
          help={ __( 'Type your content for description.' ) }
          value={ desc }
          onChange={ ( desc ) => setAttributes( { desc } ) }
        />
      </PanelBody>
      <PanelBody title={ __( 'Call To Actions' ) } initialOpen={ false } icon="button">
        <fieldset className="fieldset-in-panelbody">
          <legend>{ __( 'CTA Button First' ) }</legend>
          <TextControl
            label={ __( 'Button Text' ) }
            value={ ctaTextFirst }
            help={ __( 'Type button text.' ) } 
            onChange={ ( ctaTextFirst ) => setAttributes( { ctaTextFirst } ) }
          />
          <TextControl
            label={ __( 'Button Link' ) }
            value={ ctaLinkFirst }
            help={ __( 'Type button link.' ) }
            onChange={ ( ctaLinkFirst ) => setAttributes( { ctaLinkFirst } ) }
          />
        </fieldset>
        <fieldset className="fieldset-in-panelbody">
          <legend>{ __( 'CTA Button Second' ) }</legend>
          <TextControl
            label={ __( 'Button Text' ) }
            value={ ctaTextSecond }
            help={ __( 'Type button text.' ) }
            onChange={ ( ctaTextSecond ) => setAttributes( { ctaTextSecond } ) }
          />
          <TextControl
            label={ __( 'Button Link' ) }
            value={ ctaLinkSecond }
            help={ __( 'Type button link.' ) }
            onChange={ ( ctaLinkSecond ) => setAttributes( { ctaLinkSecond } ) }
          />
        </fieldset>
      </PanelBody>
    </InspectorControls>
    <section className={ [ 'block-pack--custom', 'block-pack--hero-section', `__pos-${ position }`, className ].join( ' ' ) }>
      <div className="block-container">
        <div class="__grid-dots-layer">
          <svg fill="none" viewBox="0 0 404 392"> <defs> <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"> <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect> </pattern> </defs> <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect> </svg>
        </div>
        <div className="hero-image-layer">
          <div className="__mask-layer-decor" style={ { backgroundColor: `rgba(234, 88, 12, 1)` } }></div>
          <div className="__mask-layer-image" style={ { backgroundImage: `url(${ image.url })` } }></div>
        </div>
        <div className="hero-entry-summary">
          <div className="hero-info">
            <h2>{ title }</h2>
            <div className="desc">
              <p>{ desc }</p>
            </div>
            <div className="cta-entry">
              <a href={ ctaLinkFirst } class="button btn-cta-first">{ ctaTextFirst }</a>
              <a href={ ctaLinkSecond } class="button btn-cta-second">{ ctaTextSecond }</a>
            </div>
          </div>
          <div className="hero-empty"></div>
        </div>
      </div>
    </section>
  </Fragment>
}