/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal dependencies
 */

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

const setBackgroundControls = wp.compose.createHigherOrderComponent(function(BlockEdit){

    return function(props) {

		function onSelectMedia ( image ) {
			let targetMediaUploadBox = document.querySelector('.tsbMediaUploadBox');
			let targetMediaImageBox = document.querySelector('.tsbMediaImageBox');

			targetMediaUploadBox.classList.add('tsbMediaIdSet');
			targetMediaUploadBox.classList.remove('tsbNoMediaIdSet');

			targetMediaImageBox.classList.add('tsbMediaIdSet');
			targetMediaImageBox.classList.remove('tsbNoMediaIdSet');

			props.setAttributes( 
				{ 
					tsbBackgroundMediaId : image.id,
					tsbBackgroundMediaUrl : image.url,
					
				}
			);
		}
		
		function deleteSelect () {
			props.setAttributes(
				{ 
					tsbBackgroundMediaUrl : '',
					tsbBackgroundMediaId : ''
				}
			)
		}

		function onChangeMedia () {
			let targetMediaUploadBox = document.querySelector('.tsbMediaUploadBox');
			let targetMediaImageBox = document.querySelector('.tsbMediaImageBox');
			let targetCancelButton = document.querySelector('.tsbButtonCancelChanging');

			targetMediaUploadBox.classList.remove('tsbMediaIdSet');
			targetMediaUploadBox.classList.add('tsbNoMediaIdSet');

			targetMediaImageBox.classList.remove('tsbMediaIdSet');
			targetMediaImageBox.classList.add('tsbNoMediaIdSet');

			targetCancelButton.classList.remove('tsbButtonCancelCahngingUnabalable');
			targetCancelButton.classList.add('tsbButtonCancelCahngingAbalable')
		}

		function onCancelChanging () {
			let targetMediaUploadBox = document.querySelector('.tsbMediaUploadBox');
			let targetMediaImageBox = document.querySelector('.tsbMediaImageBox');

			targetMediaUploadBox.classList.add('tsbMediaIdSet');
			targetMediaUploadBox.classList.remove('tsbNoMediaIdSet');

			targetMediaImageBox.classList.add('tsbMediaIdSet');
			targetMediaImageBox.classList.remove('tsbNoMediaIdSet');
		}

		function mediaPlaceHolderRender () {
			return	wp.element.createElement (
				'div',
				{className: props.attributes.tsbBackgroundMediaId?'tsbMediaIdSet tsbMediaUploadBox':'tsbNoMediaIdSet tsbMediaUploadBox'},
				wp.element.createElement(
					wp.blockEditor.MediaPlaceholder,
					props.attributes.tsbBackgroundMediaId?
					{
						value : props.attributes.tsbBackgroundMediaId,
						onSelect: onSelectMedia,
					}:
					{
						onSelect: onSelectMedia
					}
				),
				wp.element.createElement(
					wp.components.ButtonGroup,
					{}
				),
				wp.element.createElement(
					wp.components.Button,
					{
						value:__('Cancel changing', 'tantive-set-background'),
						isSmall: true,
						className: 'tsbButtonCancelChanging tsbButtonCancelCahngingUnabalable',
						onClick: onCancelChanging,
					},
					__('Cancel changing', 'tantive-set-background')
				),
			)
		}

		function backgroundAttributeBackgroundImageRender() {
			return wp.element.createElement(
				'div',
				{},
				wp.element.createElement(
					'img',
					{
						src: props.attributes.tsbBackgroundMediaUrl,
					}
				),
				wp.element.createElement(
					wp.components.ButtonGroup,
					{},
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('Change', 'tantive-set-background'),
							isSmall: true,
							onClick: onChangeMedia,
						},
						__('Change', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('Delete', 'tantive-set-background'),
							isSmall: true,
							onClick: deleteSelect,
						},
						__('Delete', 'tantive-set-background')
					)
				)
			)
		}

		function onClickBackgroundSetAttr(attr, value) {
			const dynamicAttribute = attr;
			const dynamicAttributes = { [attr]: value };
			props.setAttributes ( dynamicAttributes );
		}

		function backgroundAttributeBackgroundRepeat() {
			return wp.element.createElement (
				wp.components.PanelBody,
				{
					title: __('repeat', 'tantive-set-background'),
					initialOpen: false,
				},
				wp.element.createElement (
					wp.components.ButtonGroup,
					{},
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('x-Direction', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundRepeat == 'repeat-x',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundRepeat', 'repeat-x'),
						},
						__('x-Direction', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('y-Direction', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundRepeat == 'repeat-y',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundRepeat', 'repeat-y'),
						},
						__('y-Direction', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('repeat', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundRepeat == 'repeat',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundRepeat', 'repeat'),
						},
						__('repeat', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('no repeat', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundRepeat == 'no-repeat',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundRepeat', 'no-repeat'),
						},
						__('no repeat', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('reset repeat', 'tantive-set-background'),
							isSmall: true,
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundRepeat', ''),
						},
						__('reset', 'tantive-set-background')
					),
				)
			)
		}

		function backgroundAttributeBackgroundAttachment() {
			return wp.element.createElement (
				wp.components.PanelBody,
				{
					title: __('attachment', 'tantive-set-background'),
					initialOpen: false,
				},
				wp.element.createElement (
					wp.components.ButtonGroup,
					{},
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('scroll', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundAttachment == 'scroll',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundAttachment', 'scroll'),
						},
						__('scroll', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('fixed', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundAttachment == 'fixed',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundAttachment', 'fixed'),
						},
						__('fixed', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('local', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundAttachment == 'local',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundAttachment', 'local'),
						},
						__('local', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('reset', 'tantive-set-background'),
							isSmall: true,
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundAttachment', ''),
						},
						__('reset', 'tantive-set-background')
					),
				)
			);
		}

		function backgruondAttributeBackgroundPositionX () {
			return wp.element.createElement (
				wp.components.PanelBody,
				{
					title: __('position-x', 'tantive-set-background'),
					initialOpen: false,
				},
				wp.element.createElement (
					wp.components.ButtonGroup,
					{},
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('positionXCenter', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundPositionX == 'center',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundPositionX', 'center'),
						},
						__('center', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('positionXLeft', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundPositionX == 'left',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundPositionX', 'left'),
						},
						__('left', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('positionXRight', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundPositionX == 'right',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundPositionX', 'right'),
						},
						__('right', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('reset', 'tantive-set-background'),
							isSmall: true,
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundPositionX', ''),
						},
						__('reset', 'tantive-set-background')
					),
				),
			);
		}

		function backgroundAttributeBackgroundPositionY () {
			return wp.element.createElement (
				wp.components.PanelBody,
				{
					title: __('position-y', 'tantive-set-background'),
					initialOpen: false,
				},
				wp.element.createElement (
					wp.components.ButtonGroup,
					{},
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('positionYCenter', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundPositionY == 'center',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundPositionY', 'center'),
						},
						__('center', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('positionYTop', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundPositionY == 'top',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundPositionY', 'top'),
						},
						__('top', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('positionYbottom', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundPositionY == 'bottom',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundPositionY', 'bottom'),
						},
						__('bottom', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('reset', 'tantive-set-background'),
							isSmall: true,
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundPositionY', ''),
						},
						__('reset', 'tantive-set-background')
					),
				),
			);
		}

		function backgroundAttributeBackgroundSize() {
			return wp.element.createElement (
				wp.components.PanelBody,
				{
					title: __('backgroundSize', 'tantive-set-background'),
					initialOpen: false,
				},
				wp.element.createElement (
					wp.components.ButtonGroup,
					{},
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('auto', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundSize == 'auto',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundSize', 'auto'),
						},
						__('auto', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('cover', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundSize == 'cover',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundSize', 'cover'),
						},
						__('cover', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('contain', 'tantive-set-background'),
							isSmall: true,
							isPressed: props.attributes.tsbBackgroundSize == 'contain',
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundSize', 'contain'),
						},
						__('contain', 'tantive-set-background')
					),
					wp.element.createElement(
						wp.components.Button,
						{
							value:__('reset', 'tantive-set-background'),
							isSmall: true,
							onClick: () => onClickBackgroundSetAttr( 'tsbBackgroundSize', ''),
						},
						__('reset', 'tantive-set-background')
					),
				)
			)
		}

		function backgroundAttributesRender() {
			return wp.element.createElement (
				'div',
				{className: props.attributes.tsbBackgroundMediaId?'tsbMediaIdSet tsbMediaImageBox':'tsbNoMediaIdSet tsbMediaImageBox'},
				backgroundAttributeBackgroundImageRender(),
				backgroundAttributeBackgroundRepeat(),
				backgroundAttributeBackgroundAttachment(),
				backgruondAttributeBackgroundPositionX(),
				backgroundAttributeBackgroundPositionY(),
				backgroundAttributeBackgroundSize(),
			)
		}

		function mediaUploadRender() {
			return wp.element.createElement (
				'div',
				{},
				mediaPlaceHolderRender(),
				backgroundAttributesRender(),
			)
		}

        const controlBox = wp.element.createElement(
            wp.components.PanelBody,
            {
                title: __('Setting background', 'tantive-set-background'),
				initialOpen: false,
            },
			wp.element.createElement (
				wp.blockEditor.MediaUpload,
				{
					type: 'image',
					value: props.attributes.tsbBackgroundMediaId,
					render: ( { open } ) => {
						return mediaUploadRender();
					}
				},
			)
        );
        
        return wp.element.createElement(
            wp.element.Fragment, 
            {},
            wp.element.createElement(
                BlockEdit,
                props,
            ),
            wp.element.createElement(
                wp.blockEditor.InspectorControls,
                {
                    initialOpen: false,
                },
                controlBox,
            ),
        );
    };
}, 'setBackgroundControls');
wp.hooks.addFilter('editor.BlockEdit', 'tantive-set-background/add-background', setBackgroundControls);

function addAttribute(settings, name) {

	settings.attributes = {
        ...settings.attributes,
    	tsbBackgroundMediaUrl: {
            type: 'string',
            default: '',
        },
		tsbBackgroundMediaId: {
			type: 'number',
			default: null,
		},
		tsbBackgroundRepeat: {
			type: 'string',
			default: '',
		},
		tsbBackgroundAttachment: {
			type: 'string',
			default: '',
		},
		tsbBackgroundPositionX: {
			type: 'string',
			default: '',
		},
		tsbBackgroundPositionY: {
			type: 'string',
			default: ''
		},
		tsbBackgroundSize: {
			type: 'string',
			default: ''
		}
    };
    return settings;
}
wp.hooks.addFilter('blocks.registerBlockType', 'tantive-set-background/add-background', addAttribute);

function addBackgroundStyle (props, blockType, attributes) {

	if( attributes.tsbBackgroundMediaUrl != ''){
		let extraStyle = { 'background-image' : 'url(' + attributes.tsbBackgroundMediaUrl + ')' };
		Object.assign(
            props,
            {
                style: { ...props.style,  ...extraStyle },
            },
        );
		if( attributes.tsbBackgroundRepeat != '' ) {
			extraStyle = { 'background-repeat' : attributes.tsbBackgroundRepeat };
			Object.assign (props, { style: { ...props.style, ...extraStyle } } );
		}
		if( attributes.tsbBackgroundAttachment != '' ) {
			extraStyle = { 'background-attachment' : attributes.tsbBackgroundAttachment };
			Object.assign (props, { style: { ...props.style, ...extraStyle } } );
		}
		if( attributes.tsbBackgroundPositionX != '' ) {
			extraStyle = { 'background-position-x' : attributes.tsbBackgroundPositionX };
			Object.assign (props, { style: { ...props.style, ...extraStyle } } );
		}
		if( attributes.tsbBackgroundPositionY != '' ) {
			extraStyle = { 'background-position-y' : attributes.tsbBackgroundPositionY };
			Object.assign (props, { style: { ...props.style, ...extraStyle } } );
		}
		if( attributes.tsbBackgroundSize != '' ) {
			extraStyle = { 'background-size' : attributes.tsbBackgroundSize };
			Object.assign (props, { style: { ...props.style, ...extraStyle } } );
		}	} 
	
	return props;

}
wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'tantive-set-background/add-background', addBackgroundStyle);