import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { EditorContent as TiptapEditorContent } from '@tiptap/react'
import './index.scss'
import { cls } from '@youknown/utils/src'
import { UI_EDITOR_PREFIX } from '../../constants'

const EditorContent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<typeof TiptapEditorContent>>((props, ref) => {
	const prefixCls = `${UI_EDITOR_PREFIX}-content`
	return (
		<div ref={ref} className={cls(prefixCls)}>
			<TiptapEditorContent {...props} />
		</div>
	)
})

export default EditorContent
