import FooterView from '@components/UIFooter/example/Footer'
import Foo from '@pages/Foo/Foo'
import Bar from '@pages/Bar/Bar'

const routes = [
    {
        path: '/',
        component: FooterView
    },
    {
        path: '/foo',
        component: Foo
    },
    {
        path: '/bar',
        component: Bar
    }
];

export default routes