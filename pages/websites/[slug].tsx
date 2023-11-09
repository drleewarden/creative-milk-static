import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from 'next/router'
import { COMPANIES } from "src/services/allPlacesWorked"
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
    const paths =  COMPANIES.map((item) => {
      // commented out till we know if we are adding in region to url
      // const region = hyphenateAndLowercase({
      //   text: catchment?.regionDisplayName ?? '',
      //   hyphenate: true,
      //   lowercase: true,
      //   punctuation: true,
      // })
      const slug = item.name
      // const urlStructure = region + "/" + slug
      return { params: { slug: slug } }
    })
    paths.push({ params: { slug: 'murray-darling-basin' } })
    return { paths, fallback: false }
  }
  
  const SubPages: NextPage<PageProps> = ({ slug }) => {
    const router = useRouter()
    return (
        <div>
            hello {slug}
        </div>
    )
  }
export default SubPages
