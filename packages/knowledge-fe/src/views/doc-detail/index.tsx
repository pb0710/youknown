import { get_doc_detail } from '@/api'
import Header from '@/app/components/header'
import { useFetch } from '@youknown/react-hook/src'
import { Loading } from '@youknown/react-ui/src'
import { useSearchParams } from 'react-router-dom'
import Comments from './components/comments'
import '@youknown/css/src/rte-desktop.scss'

export default function DocDetail() {
	const [search] = useSearchParams()
	const doc_id = search.get('doc_id') ?? ''

	const { data: doc_detail, loading } = useFetch(get_doc_detail, {
		initialData: null,
		params: [
			{
				doc_id
			}
		],
		refreshDeps: [doc_id]
	})

	const doc_content = doc_detail?.content.html ?? ''

	return (
		<>
			<Header heading="文档" bordered sticky></Header>

			{loading ? (
				<div className="flex justify-center items-center w-100% m-t-40%">
					<Loading spinning size="large" />
				</div>
			) : (
				<div className="flex p-24px">
					<div className="w-720px m-auto">
						<div className="rich-text-container" dangerouslySetInnerHTML={{ __html: doc_content }}></div>
					</div>
				</div>
			)}

			<Comments doc_id={doc_id} />
		</>
	)
}
