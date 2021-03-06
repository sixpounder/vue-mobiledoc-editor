<template>
  <div id="mobiledoc-editor_container">
    <slot name="header" />
    <slot></slot>
    <div id="mobiledoc-editor_editor" ref="editorPost" />
    <slot name="footer" />
  </div>
</template>

<script>
import { Editor, UI } from 'mobiledoc-kit'

export default {
  provide () {
    return {
      editorVm: this.editorVm
    }
  },

  props: {
    mobiledoc: { type: Object, default: () => {} },
    atoms: { type: Array, default: () => [] },
    cards: { type: Array, default: () => [] },
    placeholder: { type: String, default: () => '' },
    autofocus: { type: Boolean, default: () => true },
    spellCheck: { type: Boolean, default: () => true },
    serializeVersion: { type: String, default: () => '0.3.0' },
    cardOptions: { type: Object, default: () => {} },
    enableEditing: { type: Boolean, default: () => true }
  },

  data () {
    return {
      editor: {},
      activeMarkupTags: [],
      activeSectionTags: [],
      canEdit: this.enableEditing
    }
  },

  computed: {
    editorOptions () {
      return {
        autofocus: this.autofocus,
        spellcheck: this.spellcheck,
        placeholder: this.placeholder,
        serializeVersion: this.serializeVersion,
        mobiledoc: this.mobiledoc,
        atoms: this.atoms,
        cards: this.cards,
        cardOptions: this.cardOptions
      }
    },

    editorVm () {
      return {
        editor: () => this.editor,
        canEdit: () => this.canEdit,
        activeMarkupTags: this.activeMarkupTags,
        activeSectionTags: this.activeSectionTags,
        toggleMarkup: this.toggleMarkup,
        toggleSection: this.toggleSection,
        toggleLink: this.toggleLink,
        toggleEditMode: this.toggleEditMode,
        addAtom: this.addAtom,
        addCard: this.addCard
      }
    },

    isEditable () {
      const { editor } = this
      return editor ? editor.isEditable : this.enableEditing
    }
  },

  watch: {
    isEditable () {
      this.canEdit = this.isEditable
    }
  },

  beforeMount () {
    this._initEditorWithEventEmitters()
  },

  mounted () {
    // make sure the editor's post is only rendered once
    this.$once('mounted', () => this._renderEditorPost())
    this.$emit('mounted')
  },

  methods: {
    toggleMarkup (tag) {
      this.editor.toggleMarkup(tag)
    },

    toggleSection (tag) {
      this.editor.toggleSection(tag)
    },

    toggleLink (tag = 'a') {
      if (!this.editor.hasCursor()) return
      // no cursor selected
      else if (this.editor.hasActiveMarkup(tag)) this.editor.toggleMarkup(tag)
      // deselect
      else UI.toggleLink(this.editor)
    },

    addAtom (name, text = '', payload = {}) {
      this.editor.insertAtom(name, text, payload)
    },

    addCard (name, payload = {}, editMode = false) {
      this.editor.insertCard(name, payload, editMode)
    },

    toggleEditMode () {
      this.isEditable ? this.editor.disableEditing() : this.editor.enableEditing()
    },

    _initEditorWithEventEmitters () {
      this.$emit('willCreateEditor')

      this.editor = new Editor(this.editorOptions)

      if (this.enableEditing === false) this.toggleEditMode()

      this.$emit('didCreateEditor', this.editor)

      this.editor.inputModeDidChange(() => {
        this._updateActiveMarkupTags()
        this._updateActiveSectionTags()
      })

      this.editor.postDidChange(() => {
        // serialize the editor's post to the mobiledoc version format
        // any cards or atoms present in doc, will be ommited
        const mobiledoc = this.editor.serialize(this.serializeVersion)
        this.$emit('postWasUpdated', mobiledoc)
      })
    },

    _renderEditorPost () {
      this.editor.render(this.$refs.editorPost)
    },

    _updateActiveMarkupTags () {
      this.activeMarkupTags = this.editor.activeMarkups.map((m) => m.tagName)
    },

    _updateActiveSectionTags () {
      // editor.activeSections are leaf sections.
      // map parent section tag names (e.g. 'p', 'ul') so that
      // list buttons are updated
      this.activeSectionTags = this.editor.activeSections.map((s) => {
        return s.isNested ? s.parent.tagName : s.tagName
      })
    }
  },

  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>

<!-- <style src="mobiledoc-kit/dist/css/mobiledoc-kit.css"></style> -->
