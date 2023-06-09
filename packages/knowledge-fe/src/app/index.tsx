import { Suspense, useCallback, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '../router/routes'
import { Loading } from '@youknown/react-ui/src'
import PageProgress from './components/page-progress'
import Sidebar from './components/sidebar'
import { cls } from '@youknown/utils/src'
import { useAppDispatch } from '@/hooks'
import { set_dark_theme, set_hue, set_radius } from '@/store/ui'
import { get_local_settings } from '@/libs/local'
import FabBar from './components/fab-bar'

export default function App() {
	const content = useRoutes(routes)
	const dispatch = useAppDispatch()

	const initSettings = useCallback(() => {
		const local_settings = get_local_settings()
		dispatch(set_hue(local_settings.primary_color ?? '#de7802'))
		dispatch(set_radius(local_settings.radius ?? [4, 8, 12]))
		dispatch(set_dark_theme(local_settings.is_dark_theme ?? false))
	}, [dispatch])
	useEffect(() => {
		initSettings()
	}, [initSettings])

	return (
		<div className="flex">
			<PageProgress />

			<Sidebar />

			<Suspense
				fallback={
					<div className="flex-1 h-screen flex justify-center items-center">
						<Loading spinning size="large" />
					</div>
				}
			>
				<div
					id="app-content"
					className={cls('flex-1 h-screen overflow-y-auto overflow-y-overlay scrollbar-custom')}
				>
					{content}

					<FabBar />
				</div>
			</Suspense>
		</div>
	)
}
