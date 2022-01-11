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
    })
})