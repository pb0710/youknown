import { Tooltip } from '@youknown/react-ui/src'
import { cls } from '@youknown/utils/src'
import { useContext } from 'react'
import { TbCodeOff } from 'react-icons/tb'
import './index.scss'
import { UI_EDITOR_PREFIX } from '../../constants'
import ToolbarContext from '../../contexts/editorContext'

export default function CodeOff() {
	const { editor } = useContext(ToolbarContext)
	const prefixCls = `${UI_EDITOR_PREFIX}-code-off`
	return (
		<Tooltip placement="bottom" title="取消代码">
			<div
				className={cls(prefixCls, {
					disabled: !editor.can().unsetAllMarks()
				})}
				onClick={() => {
					editor.chain().focus().clearNodes().unsetAllMarks().run()
				}}
			>
				<TbCodeOff />
			</div>
		</Tooltip>
	)
}
