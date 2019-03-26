import * as React from 'react'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'
import makeNextQuestionButton from '../wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '../wrappers/makePreviousQuestionButton'

import Button from './Button'
import CurrentTopic from './CurrentTopic'
import DesktopProgressBar from './DesktopProgressBar'
import ProgressBar from './ProgressBar'
import { LeftArrowImage, RightArrowImage } from './images/Arrow'

export default function (props) {
  const { format } = props
  const PreviousQuestionButton = makePreviousQuestionButton(Button)
  const NextQuestionButton = makeNextQuestionButton(Button)

  switch (format) {
    case DESKTOP:
      return (
        <ProgressBar format={DESKTOP}>
          <PreviousQuestionButton format={DESKTOP}>
            <LeftArrowImage />
          </PreviousQuestionButton>
          <DesktopProgressBar />
          <NextQuestionButton format={DESKTOP}>
            <RightArrowImage />
          </NextQuestionButton>
        </ProgressBar>
      )
    case TABLET:
      return (
        <ProgressBar format={TABLET}>
          <PreviousQuestionButton format={DESKTOP}>
            <LeftArrowImage />
          </PreviousQuestionButton>
          <DesktopProgressBar />
          <NextQuestionButton format={DESKTOP}>
            <RightArrowImage />
          </NextQuestionButton>
        </ProgressBar>
      )
    default:
      return (
        <ProgressBar format={MOBILE}>
          <PreviousQuestionButton format={DESKTOP}>
            <LeftArrowImage />
          </PreviousQuestionButton>
          <CurrentTopic format={MOBILE} />
          <NextQuestionButton format={DESKTOP}>
            <RightArrowImage />
          </NextQuestionButton>
        </ProgressBar>
      )
  }
}
