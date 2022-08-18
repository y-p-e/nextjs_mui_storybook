import type { 
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next'

import { Layout } from '../components/template/Layout'
import { LatestOrders } from '../components/organisms/DashBoardList'
import { ApiContext, Todo } from "../types/data"
import getAllTodos from "../services/todos/get-all-todos"

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<HomeProps> = ({
  todos
}: HomeProps) => {
  return (
    <Layout pageTitle='ダッシュボード'>
      <LatestOrders todos={todos} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const context: ApiContext = {
    apiRootUrl: 'https://jsonplaceholder.typicode.com/',
  }
  const [todos] = await Promise.all([
    getAllTodos(context),
  ])

  return {
    props: {
      todos,
    },
    revalidate: 60,
  }
}

export default Home
