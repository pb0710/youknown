import { Tooltip } from '@youknown/react-ui/src'
import { cls } from '@youknown/utils/src'
import React, { useContext } from 'react'
import { TbStrikethrough } from 'react-icons/tb'
import ToolbarContext from '../toolbar-context'
import './index.scss'
import { UI_EDITOR_PREFIX } from '../../../constants'

export default function Strike() {
	const { editor } = useContext(ToolbarContext)
	const prefixCls = `${UI_EDITOR_PREFIX}-strike-btn`
	return (
		<Tooltip placement="bottom" title="删除线">
			<div
				className={cls(prefixCls, {
					active: editor.isActive('strike'),
					disabled: !editor.can().toggleStrike()
				})}
				onClick={() => {
					editor.chain().focus().toggleStrike().run()
				}}
			>
				<TbStrikethrough />
			</div>
		</Tooltip>
	)
}
