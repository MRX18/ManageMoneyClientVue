<template>
  <!-- Modal -->
  <modal-component
    id="createExpenseCategory"
    title="Create expense category"
    :button="ModalButton.CreateCancel">
    <form action="">
      <div class="mb-2">
        <label for="name" class="col-form-label">Name:</label>
        <input type="text" class="form-control" id="name" placeholder="Name">
      </div>
      <div class="mb-2">
        <label for="icon" class="col-form-label">Icons:</label>
        <select-component id="icon" :is-custom="true" :options="icons" #default="{props}" v-model="selectedIcons">
          <div class="d-flex">
            <i class="me-2" :class="props.icon"></i>
            <span>{{ props.text }}</span>
          </div>
        </select-component>
      </div>
      <div class="mb-2">
        <label for="color" class="col-form-label">Colors:</label>
        <select-component id="color" :is-custom="true" :options="colors" #default="{props}" v-model="selectedColors">
          <div class="d-flex align-items-center">
            <div style="width: 20px; height: 20px" class="me-2" :class="'bg-' + props.color"></div>
            <span>{{ props.text }}</span>
          </div>
        </select-component>
      </div>
    </form>
  </modal-component>
  <!-- Model END -->

  <div class="card mb-2">
    <div class="card-body">
      <div class="row gx-1 gy-1">
        <div class="expense-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a class="expense-container bg-shadow-hover bg-secondary">
            <div class="expense-header">
                <span>Category name</span>
            </div>
            <div class="expense-body">
                <h2 class="fw-bold">150$</h2>
            </div>
            <div class="expense-bottom-icon">
                <i class="bi bi-cup-hot-fill"></i>
            </div>
          </a>
        </div>
        <div class="expense-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a class="expense-container bg-shadow-hover bg-danger">
            <div class="expense-header">
                <span>Category name</span>
            </div>
            <div class="expense-body">
                <h2 class="fw-bold">150$</h2>
            </div>
            <div class="expense-bottom-icon">
                <i class="bi bi-bank"></i>
            </div>
          </a>
        </div>
        <div class="expense-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a class="expense-container bg-shadow-hover bg-warning">
            <div class="expense-header">
                <span>Category name</span>
            </div>
            <div class="expense-body">
                <h2 class="fw-bold">150$</h2>
            </div>
            <div class="expense-bottom-icon">
                <i class="bi bi-bag-fill"></i>
            </div>
          </a>
        </div>
        <div class="expense-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a class="expense-container bg-shadow-hover bg-info">
            <div class="expense-header">
                <span>Category name</span>
            </div>
            <div class="expense-body">
                <h2 class="fw-bold">150$</h2>
            </div>
            <div class="expense-bottom-icon">
                <i class="bi bi-basket-fill"></i>
            </div>
          </a>
        </div>
        <div class="expense-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a class="expense-container bg-shadow-hover bg-indigo">
            <div class="expense-header">
                <span>Category name</span>
            </div>
            <div class="expense-body">
                <h2 class="fw-bold">150$</h2>
            </div>
            <div class="expense-bottom-icon">
                <i class="bi bi-brush-fill"></i>
            </div>
          </a>
        </div>
        <div class="expense-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a class="expense-container bg-shadow-hover bg-purple">
            <div class="expense-header">
                <span>Category name</span>
            </div>
            <div class="expense-body">
                <h2 class="fw-bold">150$</h2>
            </div>
            <div class="expense-bottom-icon">
                <i class="bi bi-capsule"></i>
            </div>
          </a>
        </div>
        <div class="expense-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a class="expense-container bg-shadow-hover bg-pink">
            <div class="expense-header">
                <span>Category name</span>
            </div>
            <div class="expense-body">
                <h2 class="fw-bold">150$</h2>
            </div>
            <div class="expense-bottom-icon">
                <i class="bi bi-display-fill"></i>
            </div>
          </a>
        </div>
        <div class="expense-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a class="expense-container bg-shadow-hover bg-orange">
            <div class="expense-header">
                <span>Category name</span>
            </div>
            <div class="expense-body">
                <h2 class="fw-bold">150$</h2>
            </div>
            <div class="expense-bottom-icon">
                <i class="bi bi-fuel-pump-fill"></i>
            </div>
          </a>
        </div>
        <div class="expense-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a class="expense-container bg-shadow-hover bg-teal">
            <div class="expense-header">
                <span>Category name</span>
            </div>
            <div class="expense-body">
                <h2 class="fw-bold">150$</h2>
            </div>
            <div class="expense-bottom-icon">
                <i class="bi bi-gem"></i>
            </div>
          </a>
        </div>
        <div class="expense-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a class="expense-container bg-shadow-hover bg-secondary">
            <div class="expense-header">
                <span>Category name</span>
            </div>
            <div class="expense-body">
                <h2 class="fw-bold">150$</h2>
            </div>
            <div class="expense-bottom-icon">
                <i class="bi bi-house-door-fill"></i>
            </div>
          </a>
        </div>
        <!-- add new category -->
        <div class="expense-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a class="expense-container expense-add bg-shadow-hover bg-primary" data-bs-toggle="modal" data-bs-target="#createExpenseCategory" title="Add category">
            <i class="bi bi-plus-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <DataTable
            :columns="[
              { data: 'title' },
              { data: 'category' },
              { data: 'sum' },
              { data: 'date' }
            ]"
            :options="{
              dom: 'Bftip',
              responsive: true,
              searching: false
            }"
            :data="expenses"
            class="display nowrap"
            width="100%"
          >
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Sum</th>
                <th>Date</th>
              </tr>
            </thead>
          </DataTable>
        </div>
        <div class="col-md-6">
          <Line style="min-height: 450px;" :data="{
            labels: ['21.01.2022', '21.02.2022', '21.03.2022', '21.04.2022', '21.05.2022', '21.06.2022', '21.07.2022'],
            datasets: [
              {
                label: 'Category',
                data: [40, 39, 10, 40, 39, 80, 40],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.2
              }
            ]
          }"
          :options="{
            responsive: true,
            maintainAspectRatio: false
          }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectComponent from '@/components/ui/SelectComponent'
import ModalComponent from '@/components/ui/modal/ModalComponent'
import ModalButton from '@/components/ui/modal/ModalButton'

import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net'
import 'datatables.net-responsive'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'

DataTable.use(DataTablesCore)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default {
  components: { SelectComponent, ModalComponent, DataTable, Line },
  data () {
    return {
      ModalButton: ModalButton,

      icons: [
        { icon: 'bi bi-cup-hot-fill', text: 'Cup' },
        { icon: 'bi bi-bank', text: 'Bank' },
        { icon: 'bi bi-bag-fill', text: 'Bag' },
        { icon: 'bi bi-basket-fill', text: 'Basket' }
      ],
      selectedIcons: [],

      colors: [
        { color: 'secondary', text: 'Secondary' },
        { color: 'danger', text: 'Danger' },
        { color: 'warning', text: 'Wanger' },
        { color: 'info', text: 'Info' },
        { color: 'indigo', text: 'Indigo' },
        { color: 'purple', text: 'Purple' }
      ],
      selectedColors: [],

      expenses: [
        {
          title: 'Tiger Nixon',
          category: 'System Architect',
          sum: '$3,120',
          date: '2011/04/25'
        },
        {
          title: 'Garrett Winters',
          category: 'Director',
          sum: '$5300',
          date: '2011/07/25'
        },
        {
          title: 'Tiger Nixon',
          category: 'System Architect',
          sum: '$3,120',
          date: '2011/04/25'
        },
        {
          title: 'Garrett Winters',
          category: 'Director',
          sum: '$5300',
          date: '2011/07/25'
        },
        {
          title: 'Tiger Nixon',
          category: 'System Architect',
          sum: '$3,120',
          date: '2011/04/25'
        },
        {
          title: 'Garrett Winters',
          category: 'Director',
          sum: '$5300',
          date: '2011/07/25'
        },
        {
          title: 'Tiger Nixon',
          category: 'System Architect',
          sum: '$3,120',
          date: '2011/04/25'
        },
        {
          title: 'Garrett Winters',
          category: 'Director',
          sum: '$5300',
          date: '2011/07/25'
        },
        {
          title: 'Tiger Nixon',
          category: 'System Architect',
          sum: '$3,120',
          date: '2011/04/25'
        },
        {
          title: 'Garrett Winters',
          category: 'Director',
          sum: '$5300',
          date: '2011/07/25'
        },
        {
          title: 'Tiger Nixon',
          category: 'System Architect',
          sum: '$3,120',
          date: '2011/04/25'
        },
        {
          title: 'Garrett Winters',
          category: 'Director',
          sum: '$5300',
          date: '2011/07/25'
        },
        {
          title: 'Tiger Nixon',
          category: 'System Architect',
          sum: '$3,120',
          date: '2011/04/25'
        },
        {
          title: 'Garrett Winters',
          category: 'Director',
          sum: '$5300',
          date: '2011/07/25'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
@import 'datatables.net-dt';
@import 'datatables.net-responsive-dt';
@import '@/css/data-table.css';
</style>
