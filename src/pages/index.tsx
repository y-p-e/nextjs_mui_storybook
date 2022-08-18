import type { NextPage } from 'next'

import { Layout } from '../components/template/Layout'
import { LatestOrders } from '../components/organisms/DashBoardList'

const Home: NextPage = () => {
  return (
    <Layout pageTitle='ダッシュボード'>
      <LatestOrders />
    </Layout>
  )
}

export default Home
