import Articles from "../../components/articles"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category.attributes.name}</h1>
          <Articles articles={category.attributes.articles} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories?fields=slug")

  return {
    paths: categories.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`)).data[0]
  const categories = await fetchAPI("/categories")

  return {
    props: { category, categories },
    revalidate: 1,
  }
}

export default Category
