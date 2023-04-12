<template>
  <div class="select position-relative" v-closable="{ handler: 'close' }">
    <div class="form-select cursor-pointer" :class="{'active': show}" @click="show = !show;">
      <ul class="selected-list list-unstyled d-flex flex-wrap m-0" v-if="isMultiple && selectedOptions.length > 0">
        <li class="bg-primary text-white rounded px-2 mx-1" v-for="item in selectedOptions" :key="item.key">
            <small class="pe-1 me-1 border-1 border-end border-grey-100">{{ item.text }}</small>
            <i class="bi bi-x" @click.stop="select(item)"></i>
          </li>
      </ul>
      <template v-else>
        <span v-if="selectedOptions.length > 0">{{selectedOptions[0].text}}</span>
        <span v-else>{{placeholder}}</span>
      </template>
    </div>
    <ul :class="{'d-block': show, 'd-none': !show}"
      class="select-list position-absolute list-unstyled w-100 bg-white">
      <template v-if="options && options.length">
        <li class="search-field" v-if="isSearchable">
          <input type="text" placeholder="Search" v-model="search">
          <i class="search-icon bi bi-search"></i>
        </li>
        <li v-for="item in filteredOptions"
            :key="item.key"
            @click="select(item)"
            :class="{'fw-bold': item.selected }"
            class="d-flex justify-content-between"
        >
          <template v-if="isCustom">
            <slot :props="item" />
          </template>
          <template v-else>
            <span>{{ item.text }}</span>
          </template>
          <i v-if="item.selected" class="bi bi-check-lg"></i>
        </li>
      </template>
      <template v-else>
        <li class="disabled">No items</li>
      </template>
    </ul>
  </div>
</template>

<script>
let handleOutsideClick

export default {
  directives: {
    closable: {
      mounted (el, binding, vnode) {
        // Here's the click/touchstart handler
        // (it is registered below)
        handleOutsideClick = (e) => {
          e.stopPropagation()
          // Get the handler method name and the exclude array
          // from the object used in v-closable
          const { handler, exclude } = binding.value
          // This variable indicates if the clicked element is excluded
          let clickedOnExcludedEl = false
          if (exclude) {
            exclude.forEach(refName => {
              // We only run this code if we haven't detected
              // any excluded element yet
              if (!clickedOnExcludedEl) {
                // Get the element using the reference name
                const excludedEl = vnode.context.$refs[refName]
                // See if this excluded element
                // is the same element the user just clicked on
                clickedOnExcludedEl = excludedEl.contains(e.target)
              }
            })
          }
          // We check to see if the clicked element is not
          // the dialog element and not excluded
          if (!el.contains(e.target) && !clickedOnExcludedEl) {
            // If the clicked element is outside the dialog
            // and not the button, then call the outside-click handler
            // from the same component this directive is used in
            binding.instance[handler]()
          }
        }
        // Register click/touchstart event listeners on the whole page
        document.addEventListener('click', handleOutsideClick)
        document.addEventListener('touchstart', handleOutsideClick)
      },
      unmounted () {
        // If the element that has v-closable is removed, then
        // unbind click/touchstart listeners from the whole page
        document.removeEventListener('click', handleOutsideClick)
        document.removeEventListener('touchstart', handleOutsideClick)
      }
    }
  },
  emits: ['update:modelValue'],
  props: {
    isMultiple: {
      type: Boolean,
      default: false
    },
    isCustom: {
      type: Boolean,
      default: false
    },
    isSearchable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select'
    },
    options: Array
  },
  data () {
    return {
      show: false,
      search: '',
      insideOptions: []
    }
  },
  methods: {
    select (option) {
      if (!this.isMultiple) {
        this.insideOptions.forEach(item => {
          if (item.key !== option.key) {
            item.selected = false
          }
        })
      }
      option.selected = !option.selected
      this.$emit('update:modelValue', this.selectedOptions)
    },
    close () {
      this.show = false
    }
  },
  computed: {
    selectedOptions () {
      return this.insideOptions.filter(o => o.selected === true)
    },
    filteredOptions () {
      return this.insideOptions.filter(o => o.text.toUpperCase().includes(this.search.toUpperCase()))
    }
  },
  mounted () {
    if (this.options) {
      const array = []
      for (const i in this.options) {
        let item = null
        if (this.isCustom) {
          item = {
            key: i,
            selected: false,
            ...this.options[i]
          }
        } else {
          item = {
            key: i,
            text: this.options[i],
            selected: false
          }
        }
        array.push(item)
      }
      this.insideOptions = array
    }
  }
}
</script>

<style scoped>
.select {
  user-select: none;
}
.select ul.select-list {
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 0 0 0.375rem 0.375rem;
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important;
  border-top: none !important;
}
.select ul.select-list li {
  font-size: 1rem;
  padding: 0.375rem 0.75rem 0.375rem 0.75rem;
}
.select ul.select-list li:last-child {
  border-radius: 0 0 0.375rem 0.375rem;
}
.select ul.select-list li:not(.search-field):hover {
  background-color: var(--blue-100);
  color: var(--bs-white);
  cursor: pointer;
}

.select ul.select-list li.search-field {
  position: relative;
  padding: 0;
}
.select ul.select-list li.search-field .search-icon {
  top: 50%;
  right: 0.75rem;
  position: absolute;
  transform: translate(0, -50%);
}
.select ul.select-list li.search-field input {
  width: 100%;
  outline: none;
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  border: none;
  border-bottom: 1px solid var(--blue-600);
}
.select ul.select-list li.search-field > input:focus {
  border-color: var(--blue-500);
}

.select ul.selected-list li {
  margin: 1px 0px 1px 0px;
}

.form-select.active {
  border-radius: 0.375rem 0.375rem 0 0;
  border-color: var(--blue-500);
  box-shadow: 0 0 0 0.25rem var(--blue-700);
}
.disabled {
    pointer-events: none;
    opacity: 0.6;
}
</style>
