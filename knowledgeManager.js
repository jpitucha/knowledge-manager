const levenshtein = require('fast-levenshtein')

class KnowledgeManager {
    kb = []

    getAll() {
        return this.kb
    }

    add(note) {
        const alreadyExists = this.kb.find(item => item.title === note.title)
        if (alreadyExists) {
            return console.log('Note already exists')
        }
        this.kb.push(note)
    }

    update(title, note) {
        const noteIndex = this.kb.findIndex(item => item.title === title)
        if (noteIndex == -1) {
            return console.log('Note does not exist')
        }
        const existingNoteIndex = this.kb.find(item => item.title === note.title)
        if (existingNoteIndex == -1) {
            return console.log('Note already exists')
        }
        this.kb.splice(noteIndex, 1)
        this.kb.push(note)
        return note;
    }

    delete(title) {
        const existingNoteIndex = this.kb.findIndex(item => item.title === title)
        if (existingNoteIndex == -1) {
            return console.log('Note does not exist')
        }
        const existingNote = this.kb[existingNoteIndex]
        this.kb.splice(existingNoteIndex, 1)
        return existingNote
    }

    search(title) {
        const matches = this.kb.map(item => {
            const matchLevel = levenshtein.get(title, item.title)
            return {
                id: item,
                matchLevel: matchLevel
            }
        }).filter(item => item.matchLevel <= 3)

        return matches
    }
}

module.exports = KnowledgeManager