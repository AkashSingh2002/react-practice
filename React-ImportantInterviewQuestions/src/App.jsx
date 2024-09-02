import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PopUp from './components/popUp'
import {InfiniteScolling} from './components/infiniteScrolling'
import { StarRating } from './components/starRating'
import { AccordionUI } from './components/accordionUI'
import { AccordionUICommon } from './components/accordionUICommon'
import { CarouselComponent } from './components/carousel'
import { GridSorting } from './components/gridTableSorting'
import { JsFunction } from './components/jsFunctions'
import PollWidget from './components/pollwidget'
import { Debounce } from './components/debounce'
import Todo from './components/todo'
import {NestedCheckboxes} from './components/parentChildCheckboxes'
import { Clock } from './components/analogClock'
import DigitalClock from './components/digitalClock'
import ThrottleFunction from './components/throttleFunction'
import { HigherOrderCustomFunctions } from './components/customHigherOrderFunction'

function App() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)

  const [showAccordion, setShowAccordion] = useState(null)
  const [arrow, setArrow] = useState(null)

  const data = [
    {
      src: 'https://picsum.photos/id/1/200/300',
      alt: "img1"
    },
    {
      src: 'https://picsum.photos/id/2/200/300',
      alt: "img2"
    },
    {
      src: 'https://picsum.photos/id/3/200/300',
      alt: "img3"
    },
  ]

  const accordionContent = [{
    heading: "heading 1",
    content: "content 1",
  },
  {
    heading: "heading 2",
    content: "content 2"
  },
  {
    heading: "heading 3",
    content: "content 3"
  },
]

  return (
    <>
      <HigherOrderCustomFunctions />
      <ThrottleFunction />
      <DigitalClock />
      {/* <Clock /> */}
      <NestedCheckboxes />
      <Todo />
      <Debounce />
      <PollWidget />
      <JsFunction />
      <GridSorting />
      <CarouselComponent data={data} />
      <PopUp isPopUpOpen={isPopUpOpen} setIsPopUpOpen={setIsPopUpOpen} popUpHeaderContent={"This is Pop Up"} popUpBodyContent={"Description of Pop Up"}/>
      <button type="button" onClick={() => setIsPopUpOpen(true)} >Click to open pop up</button>
      <div className='mt-2'>
        <StarRating />
      </div>
      <AccordionUI heading={"This is heading"} content={"This is description of this accordion"} />
      <AccordionUI heading={"This is heading"} content={"This is description of this accordion"} />

<div className='m-2'>
  <h4>accordion one at a time</h4>
  {      accordionContent.map((e, index) => {
          return <AccordionUICommon heading={e.heading} setShowAccordion={setShowAccordion} showAccordion={showAccordion} setArrow={setArrow} arrow={arrow} content={e.content} index={index} />
        })}
</div>

      <InfiniteScolling />
    </>
  )
}

export default App
