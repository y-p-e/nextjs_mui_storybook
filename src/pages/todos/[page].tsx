import type { 
  NextPage,
  InferGetStaticPropsType,
  GetStaticPropsContext,
  GetStaticPaths,
} from 'next'

import { Layout } from '../../components/template/Layout'
import { TodoList } from '../../components/organisms/TodoList'
import { ApiContext, Todo } from "../../types/data"
import getAllTodos from "../../services/todos/get-all-todos"


type HomeProps = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<HomeProps> = ({
  todos,
  pages,
  current_page
}: HomeProps) => {
  return (
    <Layout pageTitle='Todo一覧画面'>
      <TodoList todos={todos} pages={pages} current_page={current_page}/>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const count = 200
  const page_size = 50
  const pages = Array.from(Array(Math.ceil(count / page_size)), (_, k) => k+1)
  const paths = pages.map((i) => ({
    params: { page: i.toString() },
  }));
  return {paths, fallback: false}
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params) {
    throw new Error('params is undefined')
  }

  const current_page = Number(params.page);
  const count = 200
  const page_size = 50
  const pages = Array.from(Array(Math.ceil(count / page_size)), (_, k) => k+1)

  const apiContext: ApiContext = {
    apiRootUrl: 'https://jsonplaceholder.typicode.com/',
  }
  const [todos] = await Promise.all([
    getAllTodos(apiContext),
  ])

  const slicedTodos = todos.slice(
    page_size * (current_page - 1),
    page_size * current_page
  );
  return {
    props: {
      todos: slicedTodos,
      pages,
      current_page,
    },
    revalidate: 60,
  }
}

export default Home
