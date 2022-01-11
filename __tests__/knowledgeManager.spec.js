const Note = require('../note')
const KnowledgeManager = require('./../knowledgeManager')

describe('knowledge manager', () => {
    describe('crud operations', () => {
        it('finds the note after it\'s beed added', () => {
            //given
            const TEST_TITLE = 'test'
            const TEST_CONTENT = 'test'
            const EXPECTED_RESULT = [{
                id: {
                    title: TEST_TITLE,
                    content: TEST_CONTENT
                },
                matchLevel: 0
            }]
            const kb = new KnowledgeManager()
            kb.add(new Note(TEST_TITLE, TEST_CONTENT))
            //when
            const result = kb.search(TEST_TITLE)
            //then
            expect(result).toMatchObject(EXPECTED_RESULT)
        })

        it('displays the note after it\'s been updated', () => {
            //given
            const TEST_INITIAL_TITLE = 'test_1'
            const TEST_INITIAL_CONTENT = 'test_1'
            const TEST_UPDATED_TITLE = 'test_2'
            const TEST_UPDATED_CONTENT = 'test_2'
            const EXPECTED_RESULT = {
                title: TEST_UPDATED_TITLE,
                content: TEST_UPDATED_CONTENT
            }
            const kb = new KnowledgeManager()
            kb.add(new Note(TEST_INITIAL_TITLE, TEST_INITIAL_CONTENT))
            //when
            const result = kb.update(TEST_INITIAL_TITLE, new Note(TEST_UPDATED_TITLE, TEST_UPDATED_CONTENT))
            //then
            expect(result).toMatchObject(EXPECTED_RESULT)
        })

        it('shows the note which was deleted', () => {
            //given
            const TEST_TITLE = 'test'
            const TEST_CONTENT = 'test'
            const EXPECTED_RESULT = {
                title: TEST_TITLE,
                content: TEST_CONTENT
            }
            const kb = new KnowledgeManager()
            kb.add(new Note(TEST_TITLE, TEST_CONTENT))
            //when
            const result = kb.delete(TEST_TITLE)
            //then
            expect(result).toMatchObject(EXPECTED_RESULT)
        })
    })
})