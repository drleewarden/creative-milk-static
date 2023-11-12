import { Recipe } from "@/src/module/recipe"
import { hyphenateAndLowercase } from "@/src/utils"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { recipes } from "src/services/recipes.json"
interface PageProps {
  slug: string
}
export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  return {
    props: {
      slug: params?.slug as string,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = recipes.map((item) => {
    // commented out till we know if we are adding in region to url
    // const region = hyphenateAndLowercase({
    //   text: catchment?.regionDisplayName ?? '',
    //   hyphenate: true,
    //   lowercase: true,
    //   punctuation: true,
    // })
    const slug = hyphenateAndLowercase({
      text: item.name,
      hyphenate: true,
      lowercase: true,
      punctuation: true
    })
    // const urlStructure = region + "/" + slug
    return { params: { slug: slug } }
  })
  paths.push({ params: { slug: 'murray-darling-basin' } })
  return { paths, fallback: false }
}

const SubPages: NextPage<PageProps> = ({ slug }) => {
  const recipe = recipes.find(item => {
    return hyphenateAndLowercase({
      text: item.name,
      hyphenate: true,
      lowercase: true,
      punctuation: true
    }) === slug
  })

  return (
    <>
      {
        recipe &&
        <Recipe RecipeItem={recipe} />
      }
    </>
  )
}
export default SubPages
