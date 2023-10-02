/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { DecoupledEditor } from '@ckeditor/ckeditor5-editor-decoupled';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Style } from '@ckeditor/ckeditor5-style';
import { WordCount } from '@ckeditor/ckeditor5-word-count';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends DecoupledEditor {
	public static override builtinPlugins = [
		Alignment,
		BlockQuote,
		Bold,
		Essentials,
		GeneralHtmlSupport,
		Heading,
		Italic,
		List,
		Paragraph,
		Style,
		Underline,
		WordCount
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'bold',
				'italic',
				'underline',
				'|',
				'alignment',
				'|',
				'numberedList',
				'bulletedList',
				'|',
				'blockQuote',
				'|',
				'undo',
				'redo'
			]
		},
		language: 'en'
	};
}

export default Editor;
