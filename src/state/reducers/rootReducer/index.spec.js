import { rootReducer } from '.'
import { INITIAL_STATE, QUESTION_SELECTED, questionSelected } from '..'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('defaults to the INITIAL_STATE', () => {
      expect(rootReducer(undefined, {})).toMatchObject(INITIAL_STATE)
    })

    it('handles an unknown action type by returning the state unchanged', () => {
      const state = 'state'

      expect(rootReducer(state, {})).toBe(state)
    })

    it('increases the activeQuestion when NO_BUTTON_CLICKED', () => {
      const beforeState = {
        activeQuestion: 1
      }

      const afterState = {
        activeQuestion: 2,
        responses: { 1: 'NO' }
      }

      const NO_BUTTON_CLICKED = { type: 'NO_BUTTON_CLICKED' }

      expect(JSON.stringify(rootReducer(beforeState, NO_BUTTON_CLICKED))).toBe(
        JSON.stringify(afterState)
      )
    })

    it('increases the activeQuestion when NOT_SURE_BUTTON_CLICKED', () => {
      const beforeState = {
        activeQuestion: 1
      }

      const afterState = {
        activeQuestion: 2,
        responses: { 1: 'NOT_SURE' }
      }

      const NOT_SURE_BUTTON_CLICKED = { type: 'NOT_SURE_BUTTON_CLICKED' }

      expect(
        JSON.stringify(rootReducer(beforeState, NOT_SURE_BUTTON_CLICKED))
      ).toBe(JSON.stringify(afterState))
    })

    it('increases the activeQuestion when YES_BUTTON_CLICKED', () => {
      const beforeState = {
        activeQuestion: 1
      }

      const afterState = {
        activeQuestion: 2,
        responses: { 1: 'YES' }
      }

      const YES_BUTTON_CLICKED = { type: 'YES_BUTTON_CLICKED' }

      expect(JSON.stringify(rootReducer(beforeState, YES_BUTTON_CLICKED))).toBe(
        JSON.stringify(afterState)
      )
    })

    it(`updates the activeQuestion on a ${QUESTION_SELECTED} action`, () => {
      const activeQuestion = 1
      const expectedQuestion = 2
      const state = { activeQuestion, questions: { 1: {}, 2: {} } }

      expect(
        rootReducer(state, questionSelected(expectedQuestion))
      ).toMatchObject({
        activeQuestion: expectedQuestion
      })
    })

    it(`returns the state unchanged if the ${QUESTION_SELECTED} action payload is not a number`, () => {
      const activeQuestion = 1
      const questionString = '2'
      const questionBoolean = true
      const questionObject = {}
      const state = { activeQuestion, questions: { 1: {}, 2: {} } }

      expect(
        rootReducer(state, questionSelected(questionString))
      ).toMatchObject(state)
      expect(
        rootReducer(state, questionSelected(questionBoolean))
      ).toMatchObject(state)
      expect(
        rootReducer(state, questionSelected(questionObject))
      ).toMatchObject(state)
    })

    it(`returns the state unchanged if the ${QUESTION_SELECTED} action payload is not in the question range`, () => {
      const activeQuestion = 1
      const questionOutOfRange = 3
      const state = { activeQuestion, questions: { 1: {}, 2: {} } }

      expect(
        rootReducer(state, questionSelected(questionOutOfRange))
      ).toMatchObject(state)
    })
  })
})