import Dashboard from '../pages/Dashboard/Dashboard'
import Foo from '../pages/Foo/Foo'
import Bar from '../pages/Bar/Bar'

const routes = [
	{
		path: '/',
		component: Dashboard
	},
	{
		path: '/foo',
		component: Foo
	},
	{
		path: '/bar',
		component: Bar
	}
]

export default routes