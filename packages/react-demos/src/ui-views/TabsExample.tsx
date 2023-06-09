import { ComponentProps, useState } from 'react'
import { Divider, Space, Tabs } from '@youknown/react-ui/src'

export default () => {
	const [tabsType, setTabsType] = useState<'line' | 'round' | 'segment'>('line')

	const tabList1 = [
		{
			key: 'a',
			name: 'Tab A'
		},
		{
			key: 'b',
			name: 'Tab B',
			disabled: true
		},
		{
			key: 'c',
			name: 'Tab C'
		},
		{
			key: 'd',
			name: 'Tab D'
		}
	]
	const [tabKey, setTabKey] = useState(tabList1[0].key)
	const [closableList, setClosableTabList] = useState<ComponentProps<typeof Tabs>['tabList']>([
		{
			key: 'a',
			name: 'Tab A',
			closable: true
		},
		{
			key: 'b',
			name: 'Tab B',
			closable: true
		},
		{
			key: 'c',
			name: 'Tab C',
			closable: true
		},
		{
			key: 'd',
			name: 'Tab D',
			closable: true
		}
	])
	const [closableTabKey, setCloseableTabKey] = useState('a')

	return (
		<div style={{ padding: 24 }}>
			<h1>Tabs</h1>
			<Divider />
			<Tabs
				type="segment"
				tabList={[
					{ key: 'line', name: 'Line Tab' },
					{ key: 'round', name: 'Round Tab' },
					{ key: 'segment', name: 'Segment Tab' }
				]}
				value={tabsType}
				onChange={val => setTabsType(val as typeof tabsType)}
			/>
			<Divider />
			<Space>
				<Tabs type={tabsType} value={tabKey} onChange={setTabKey} tabList={tabList1} />
			</Space>
			<Divider />
			<Space>
				<Tabs
					type={tabsType}
					value={closableTabKey}
					onChange={setCloseableTabKey}
					tabList={closableList}
					onTabListChange={setClosableTabList}
				/>
			</Space>
			<Divider />
		</div>
	)
}
