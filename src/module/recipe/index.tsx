import React, { useRef } from "react"
// import { IRecipe, Method, Image } from '@pages/recipes'
export interface Method {
  title: string,
  step: string
}
export interface Image {
  title: string,
  src: string,
  alt: string
}

export interface IRecipe {
  name: string,
  country?: string,
  difficulty?: string,
  duration?: number,
  description: string,
  method?: Method[],
  images?: Image[]
  image?: string
}
interface RecipeItem {
  RecipeItem: IRecipe
}
export const Recipe = ({ RecipeItem }: RecipeItem) => {
  const checkImage = () => {
    console.log(RecipeItem.image)
    return 'food/image1.jpg'
  }
  return (
    <div>
      <main className={'styles.main'}>
        {/* <Heading classN="cm-container" /> */}
        {/* <Nav download={downloadAction()} /> */}
        {/* <Typography styleType="xl" as="h1" text={''}>
              <h1 className="text-3xl font-bold underline">Hello world!</h1>
            </Typography> */}
        <div className="container mx-auto flex flex-wrap items-start">
          <div className="w-full py-6">
            {/* {RecipeItem?.images.map(img => <img style={{ borderRadius: '250px', backgroundColor: 'grey' }} src={'images/' + img.src} />)} */}
            <img style={{ borderRadius: '10px', backgroundColor: 'grey' }} width="100%" src={'/images/' + checkImage()} />
          </div><img style={{ borderRadius: '250px', backgroundColor: 'grey' }} width="200" src={'/images/' + checkImage()} />
          <div className="w-full py-6 px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-8 sm:pt-1 md:pt-4">

              <h1 className="text-4xl font-semibold text-slate-600">
                Dish: {RecipeItem?.name ?? 'unknown'}
              </h1>
              <h3 className="mt-2 text-lg leading-relaxed text-slate-500">Duration:  {RecipeItem?.duration ?? '2 hours '}</h3>
              <h3 className="mt-2 text-lg leading-relaxed text-slate-500">Country:  {RecipeItem?.country}: Unknown</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                {RecipeItem.description}
              </p>
              <ul className="cm-ol text-lg">
                {RecipeItem?.method?.map(method => <li><strong>{method.title}:</strong><em>{method.step}</em></li>)}

              </ul>{' '}
              <a href="https://tailwindcss.com/?ref=creativetim" className="text-slate-600">
                TailwindCSS
              </a>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                . It features multiple HTML elements and it comes with dynamic components for
                ReactJS, Vue and Angular.
              </p>
              <div className="mt-12">
                <a
                  className="get-started mr-1 mb-1 rounded bg-pink-500 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
                  href="/learning-lab/tailwind-starter-kit/documentation/download"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/tailwind-starter-kit"
                  className="github-star ml-1 mr-1 mb-1 rounded bg-slate-700 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-slate-600"
                >
                  Github Star
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}