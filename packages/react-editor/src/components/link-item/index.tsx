import { Dropdown } from '@youknown/react-ui/src'
import { cls } from '@youknown/utils/src'
import { useContext } from 'react'
import './index.scss'
import { UI_EDITOR_PREFIX } from '../../constants'
import ToolbarContext from '../../contexts/editorContext'
import { RiLinkM } from 'react-icons/ri'

export default function LinkItem() {
	const { editor, setLinkModalOpen } = useContext(ToolbarContext)
	const prefixCls = `${UI_EDITOR_PREFIX}-link-item`
	return (
		<Dropdown.Item
			prefix={
				<div
					className={cls(`${prefixCls}-icon`, {
						active: editor.isActive('link'),
						disabled: !editor.can().setLink({ href: '' })
					})}
				>
					<RiLinkM />
				</div>
			}
			closeAfterItemClick
			onClick={() => {
				setLinkModalOpen(true)
			}}
		>
			链接
		</Dropdown.Item>
	)
}
