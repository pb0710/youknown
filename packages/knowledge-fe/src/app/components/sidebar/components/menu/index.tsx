import { nav_routes, RouteItem } from '@/router/routes'
import { Motion, Tooltip } from '@youknown/react-ui/src'
import { cls, DeepRequired } from '@youknown/utils/src'
import { Fragment, MouseEvent, useState } from 'react'
import { GoChevronDown } from 'react-icons/go'
import TransitionNavLink from '@/components/transition-nav-link'
import useTransitionNavigate from '@/hooks/use-transition-navigate'

const nav_open_map = nav_routes
	.filter(route => route.children?.length)
	.reduce<Record<string, boolean>>((obj, cur) => {
		obj[cur.path] = true
		return obj
	}, {})

type MenuRouteItem = RouteItem & {
	state: DeepRequired<RouteItem>['state']
}
function pick_menu_list(routes: RouteItem[] = []): MenuRouteItem[] {
	return routes
		.filter(route => route.state)
		.map(route => {
			if (route.children?.length) {
				return {
					...route,
					children: pick_menu_list(route.children)
				}
			}
			return route
		}) as MenuRouteItem[]
}
const menu_list = pick_menu_list(nav_routes)

interface MenuProps {
	expand: boolean
}

export default function Menu({ expand }: MenuProps) {
	const navigate = useTransitionNavigate()
	const [open_map, set_open_map] = useState<Record<string, boolean>>(nav_open_map)

	const set_open = (name: string, open: boolean) => {
		set_open_map(p => ({
			...p,
			[name]: open
		}))
	}

	return (
		<div className="flex-1 select-none">
			{menu_list.map(menu_item => {
				const { path, state } = menu_item
				const children = (menu_item.children ?? []) as MenuRouteItem[]
				const has_sub_nav = children.length > 0

				const toggle_sub_menu = (e: MouseEvent) => {
					e.stopPropagation()
					set_open(path, !open_map[path])
				}
				const chevron_down_icon = (
					<GoChevronDown
						className={cls('color-text-2 transition-all', open_map[path] ? 'rotate-180' : 'rotate-0')}
					/>
				)
				const nav_content = (
					<>
						<div className="leading-0 text-18px color-primary">{state.icon}</div>
						{expand ? (
							<>
								<div className="ml-8px flex-1 break-all ws-nowrap">{state.nav_name}</div>

								{has_sub_nav && (
									<div
										className="b-rd-radius-s w-24px h-24px flex items-center justify-center text-12px
										!active-bg-active hover-bg-hover"
										onClick={toggle_sub_menu}
									>
										{chevron_down_icon}
									</div>
								)}
							</>
						) : (
							has_sub_nav && (
								<div className="flex items-center text-12px" onClick={toggle_sub_menu}>
									{chevron_down_icon}
								</div>
							)
						)}
					</>
				)

				return (
					<Fragment key={path}>
						<Tooltip title={state.nav_name} placement="right" spacing={20} disabled={expand}>
							{has_sub_nav ? (
								<div
									className="group w-100% h-32px flex items-center pl-12px pr-4px b-rd-radius-m mb-8px
								decoration-none color-inherit cursor-pointer
								active-bg-active hover-not-active-bg-hover"
									onClick={() => {
										navigate(`/${path}/${children[0].path}`)
										set_open(path, true)
									}}
								>
									{nav_content}
								</div>
							) : (
								<TransitionNavLink
									to={`/${path}`}
									className={({ isActive }) =>
										cls(
											'group w-100% h-32px flex items-center pl-12px pr-4px b-rd-radius-m mb-8px decoration-none color-inherit',
											{
												'active-bg-active hover-not-active-bg-hover': !isActive,
												'bg-active': isActive
											}
										)
									}
								>
									{nav_content}
								</TransitionNavLink>
							)}
						</Tooltip>

						{has_sub_nav && (
							<Motion.Collapse in={open_map[path]} className="w-100% m-t-0! m-b-0!" unmountOnExit>
								<div
									className={cls({
										'ml-32px': expand
									})}
								>
									{children.map(child => {
										return (
											<Tooltip
												key={child.path}
												title={child.state.nav_name}
												placement="right"
												spacing={20}
												disabled={expand}
											>
												<TransitionNavLink
													to={`/${path}/${child.path}`}
													className={({ isActive }) =>
														cls(
															'group w-100% h-32px flex items-center pl-12px pr-4px b-rd-radius-m mb-8px decoration-none color-inherit',
															{
																'active-bg-active hover-not-active-bg-hover': !isActive,
																'bg-active': isActive
															}
														)
													}
												>
													<div className="leading-0 text-18px color-primary">
														{child.state.icon}
													</div>

													{expand && (
														<div className="flex-1 break-all ws-nowrap ml-8px">
															{child.state.nav_name}
														</div>
													)}
												</TransitionNavLink>
											</Tooltip>
										)
									})}
								</div>
							</Motion.Collapse>
						)}
					</Fragment>
				)
			})}
		</div>
	)
}
