import React, { useState, ReactNode } from 'react'

import InputSelect from '../../../src/components/search'
import { COMPANIES } from '../../../src/services/allPlacesWorked'
import { Title } from '../../../styles/styles'
import { userStore } from '../../context/providers'
import Nav from '../nav'
import styles from './Heading.module.scss'

interface IJobs {
  dates: string
  technical: string
  name: string
  position: string
  description: string
  image: string
  colour: string
}

interface IProps {
  searchCallback(val: string): void
  children?: ReactNode
  classN?: string
  reset: () => void
}

const Heading: React.FC<IProps> = ({ classN, searchCallback, reset }: IProps) => {
  const { fullName } = userStore()
  const [jobs, setJobs] = useState<IJobs[]>(COMPANIES)
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)
  const dropdownAction = () => {
    setOpenDropdown(!openDropdown)
  }
  const filterArr = (arr: IJobs[], text: string) => {
    return arr.filter((item) => item.name.toLowerCase().includes(text))
  }
  const clear = () => {
    // setJobs(allActiveCards);
  }
  const searchResults = (inputText: string) => {

    const char = filterArr(jobs, inputText)
    setJobs(char)
    searchCallback(inputText)
  }
  return (
    <div>
      <div className={styles.heading + ' ' + classN}>
        <Title className={'w-full ' + styles.hero__heading}>Creative Milk</Title>
        <div className="w-full ml-6 pl-6">{fullName}</div>
        <Nav
          onClick={() => {
            return dropdownAction()
          }}
        />
        <InputSelect inputSearchList={searchResults} clear={clear} />
        <button onClick={reset}>reset</button>
      </div>
      <hr className={`${styles.hr} drop-shadow-xl`} />
      {openDropdown && (
        <div className={`${styles.secondary_nav} p-8 shadow-md`}>
          test
          <div
            className={styles.close_secondary_nav}
            onClick={() => {
              dropdownAction()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          hello
        </div>
      )}
    </div>
  )
}
export default Heading
