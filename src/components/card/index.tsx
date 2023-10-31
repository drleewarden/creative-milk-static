import React from 'react'
import { useRouter } from 'next/router'
import { hyphenateAndLowercase } from '../../utils/index'
import { Imag, Title } from './styles'
interface IJob {
  image: string
  name: string
  colour: string
  description: string
}
interface ICard {
  cardObject: IJob
  ind: number
  website: string
}

export const Card: React.FC<ICard> = ({ cardObject, website }) => {
  const router = useRouter()

  // const [allActiveCards, setAllActiveCards] = useState<boolean[]>([])
  // const hoverCard = (e: any, ind: any) => {
  //   console.log(e)
  //   setAllActiveCards({
  //     ...allActiveCards,
  //     [ind]: !allActiveCards[ind],
  //   })
  //   //setActiveCard(!activeCard);
  // }
  function goToPage(url: string): void {
    const newUrl = website + '/' + hyphenateAndLowercase({
      text: url,
      hyphenate: true,
      lowercase: true,
      punctuation: true
    })
    console.log('newUrl', newUrl)
    debugger
    router.push(newUrl, undefined, { shallow: true })

  }
  const image = (cardObject: IJob) => {
    //${cardObject.image}
    //'food/image1.jpg'
    return cardObject.image
  }
  return (
    <>
      <div className="flip-card" onClick={() => goToPage(cardObject?.name)}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Imag src={`images/${image(cardObject)}`} alt={'Picture of the  ' + cardObject?.name} />{' '}
          </div>
          <div className="flip-card-back" style={{ backgroundColor: cardObject.colour }}>
            <h1 className={Title}>{cardObject?.name}</h1>
            <p>{cardObject?.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
