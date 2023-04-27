<template>
    <ul class="nav nav-pills border border-1 rounded mb-2" id="pills-tab" role="tablist">
        <li
            v-for="tab in tabs"
            :key="tab.id"
            class="nav-item flex-fill"
            role="presentation"
        >
            <button
                :id="tab.id+'-tab'"
                :class="{'active': tab.active}"
                class="nav-link"
                data-bs-toggle="pill"
                :data-bs-target="'#'+tab.id"
                type="button"
                role="tab"
                aria-controls="grouptab"
                aria-selected="true"
                @click="tabEvent(tab)"
            >
                {{ tab.title }}
            </button>
        </li>
    </ul>

    <div class="tab-content" id="pills-tabContent">
        <div
            v-for="tab in tabs"
            :key="tab.id"
            :class="{
                'show active': tab.active
            }"
            class="tab-pane fade"
            :id="tab.id"
            role="tabpanel">
            <slot v-if="$slots[tab.slot]" :name="tab.slot"></slot>
        </div>
    </div>
</template>

<script>
export default {
  emits: ['tab'],
  props: {
    // Example of a tab object
    // {
    //    id: 'tabId',
    //    slot: 'slotName',
    //    title: 'tab title',
    //    active: false
    // }
    tabs: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      current: {}
    }
  },
  methods: {
    tabEvent (tab) {
      if (this.current.id !== tab.id) {
        this.current = tab
        this.$emit('tab', this.current)
      }
    }
  },
  mounted () {
    if (this.tabs.length > 0) {
      this.current = this.tabs.find(t => t.active) ?? this.tabs[0]
    }
  }
}
</script>

<style>

</style>
