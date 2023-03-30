import { Tooltip } from '@youknown/react-ui/src'
import { cls } from '@youknown/utils/src'
import React, { useContext } from 'react'
import { TbArrowBackUp } from 'react-icons/tb'
import ToolbarContext from '../toolbar-context'
import './index.scss'
import { UI_EDITOR_PREFIX } from '../../../constants'

export default function Undo() {
	const { editor } = useContext(ToolbarContext)
	const disabled = !editor.can().undo()
	const prefixCls = `${UI_EDITOR_PREFIX}-undo-btn`
	return (
		<Tooltip placement="bottom" title="撤销">
			<div
				className={cls(prefixCls, {
					disabled
				})}
				onClick={() => {
					if (disabled) return
					editor.chain().focus().undo().run()
				}}
			>
				<TbArrowBackUp />
			</div>
		</Tooltip>
	)
}
