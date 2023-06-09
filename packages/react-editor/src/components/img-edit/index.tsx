import { Tooltip } from '@youknown/react-ui/src'
import { cls } from '@youknown/utils/src'
import { useContext } from 'react'
import { TbPhotoEdit } from 'react-icons/tb'
import './index.scss'
import { UI_EDITOR_PREFIX } from '../../constants'
import ToolbarContext from '../../contexts/editorContext'

export default function ImgEdit() {
	const { editor, setImgModalOpen } = useContext(ToolbarContext)
	const prefixCls = `${UI_EDITOR_PREFIX}-img-edit`
	return (
		<Tooltip placement="bottom" title="编辑图片">
			<div
				className={cls(prefixCls)}
				onClick={() => {
					setImgModalOpen(true)
				}}
			>
				<TbPhotoEdit />
			</div>
		</Tooltip>
	)
}
