import type { 
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
} from 'next'

import { Layout } from '../../components/template/Layout'
import { TodoList } from '../../components/organisms/TodoList'
import { ApiContext, Todo } from "../../types/data"
import getAllTodos from "../../services/todos/get-all-todos"

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<HomeProps> = ({
  todos
}: HomeProps) => {
  return (
    <Layout pageTitle='Todo一覧画面'>
      <TodoList todos={todos} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        page: '1'
      }
    }
  ]
  return {paths, fallback: false}
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
