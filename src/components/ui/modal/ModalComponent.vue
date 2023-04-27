<template>
    <div class="modal fade" :id="id" tabindex="-1">
        <div
            class="modal-dialog"
            :class="{
                'modal-dialog-centered': center,
                'modal-dialog-scrollable': scrollable,
                [sizeClass]: true
            }">
            <div class="modal-content">
                <div class="modal-header">
                    <template v-if="$slots.header">
                        <slot name="header"></slot>
                    </template>
                    <template v-else>
                        <h5 class="modal-title">{{ title }}</h5>
                        <button
                            v-if="close"
                            @click="$emit('close')"
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        </button>
                    </template>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <template v-if="$slots.footer">
                        <slot name="footer"></slot>
                    </template>
                    <template v-else>
                        <button
                            v-if="button !== ModalButton.Close"
                            @click="$emit('success')"
                            type="button"
                            class="btn btn-primary">
                            {{ okButton }}
                        </button>
                        <button
                            v-if="button !== ModalButton.Ok"
                            @click="$emit('close')"
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal">
                            {{ closeButton }}
                        </button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModalButton from '@/components/ui/modal/ModalButton'
import ModalSize from '@/components/ui/modal/ModalSize'

export default {
  data () {
    return {
      ModalButton: ModalButton,
      ModalSize: ModalSize
    }
  },
  emits: ['success', 'close'],
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Title'
    },
    close: {
      type: Boolean,
      default: true
    },
    button: {
      type: Number,
      default: ModalButton.OkClose,
      validator (value) {
        return Object.values(ModalButton).includes(value)
      }
    },
    center: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: ModalSize.Default,
      validator (value) {
        return Object.values(ModalSize).includes(value)
      }
    }
  },
  computed: {
    okButton () {
      let name = ''
      switch (this.button) {
        case this.ModalButton.CreateCancel: name = 'Create'; break
        case this.ModalButton.AddCancel: name = 'Add'; break

        case this.ModalButton.Ok:
        case this.ModalButton.OkClose: name = 'Ok'; break
      }
      return name
    },
    closeButton () {
      let name = ''
      switch (this.button) {
        case this.ModalButton.CreateCancel:
        case this.ModalButton.AddCancel: name = 'Cancel'; break

        case this.ModalButton.Close:
        case this.ModalButton.OkClose: name = 'Close'; break
      }
      return name
    },
    sizeClass () {
      let className = ''
      switch (this.size) {
        case this.ModalSize.Small: className = 'modal-sm'; break
        case this.ModalSize.Large: className = 'modal-lg'; break
        case this.ModalSize.Extralarge: className = 'modal-xl'; break
      }
      return className
    }
  }
}
</script>

<style>

</style>
