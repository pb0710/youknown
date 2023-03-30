import { FloatingMenu } from '@tiptap/react'
import { Button, Divider, Dropdown } from '@youknown/react-ui/src'
import React, { useContext } from 'react'
import './index.scss'
import { TbPlus } from 'react-icons/tb'
import CodeBlock from '../code-block'
import Heading from '../heading'
import HorizontalDivider from '../horizontal-divider'
import ImgPicker from '../img-picker'
import LinkItem from '../link-item'
import TablePicker from '../table-picker'
import ToolbarContext from '../toolbar-context'
import OrderList from '../order-list'
import BulletList from '../bullet-list'
import Blockquote from '../blockquote'
import { UI_EDITOR_PREFIX } from '../../../constants'

export function FloatingBar() {
	const { editor } = useContext(ToolbarContext)

	const prefixCls = `${UI_EDITOR_PREFIX}-floating-bar`
	const dividerEle = <Divider size="small" />

	return (
		<FloatingMenu
			pluginKey="floatingBar"
			editor={editor}
			tippyOptions={{
				duration: 0,
				zIndex: 9,
				maxWidth: 'none',
				appendTo: 'parent',
				placement: 'left'
			}}
		>
			<Dropdown
				placement="bottom-start"
				content={
					<Dropdown.Menu className={`${prefixCls}-dropdown`}>
						<div className={`${prefixCls}-icons`}>
							<Heading level={1} />
							<Heading level={2} />
							<Heading level={3} />
							<Heading level={4} />
							<Blockquote />
							<OrderList />
							<BulletList />
						</div>

						{dividerEle}

						<LinkItem />
						<CodeBlock />

						{dividerEle}

						<TablePicker />
						<ImgPicker />

						{dividerEle}

						<HorizontalDivider />
					</Dropdown.Menu>
				}
			>
				<Button square size="small">
					<TbPlus />
				</Button>
			</Dropdown>
		</FloatingMenu>
	)
}
