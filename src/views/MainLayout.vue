<template>
    <!-- Modal -->
    <modal-component
        id="createEntityModal"
        title="Create portfolio"
        :button="ModalButton.CreateCancel">
        <form action="">
            <tabs-component
                :tabs="[
                    {
                        id: 'foldertab',
                        slot: 'foldertab',
                        title: 'Folder',
                        active: true
                    },
                    {
                        id: 'portfoliotab',
                        slot: 'portfoliotab',
                        title: 'Portfolio',
                        active: false
                    }
                ]"
                @tab="switchTab">
                <template #foldertab>
                    <div class="mb-2">
                        <label for="portfolio-name" class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="folderName">
                    </div>
                </template>

                <template #portfoliotab>
                    <div class="mb-2">
                        <label for="portfolio-name" class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="portfolioName">
                    </div>

                    <label class="col-form-label">Type:</label>
                    <div class="mb-2">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                            <label class="form-check-label" for="inlineRadio1">Cryptocurrency</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                            <label class="form-check-label" for="inlineRadio2">Stocks</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                            <label class="form-check-label" for="inlineRadio3">Bonds</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4">
                            <label class="form-check-label" for="inlineRadio4">Deposit</label>
                        </div>
                    </div>
                </template>
            </tabs-component>
        </form>
    </modal-component>
    <!-- Model END -->
    <main class="d-flex w-100">
        <aside class="w-sitebar min-vh-100 position-relative p-0 bg-dark">
            <div class="header d-flex align-items-center border-bottom border-gray-dark border-1 p-2">
                <div>
                    <img class="w-75" src="@/assets/full-logo.png" alt="">
                </div>
            </div>
            <ul class="navbar-left" id="navbarAccordion">
                <li>
                    <router-link to="/">
                        <span><i class="me-2 bi bi-house-door"></i>Home</span>
                    </router-link>
                </li>
                <li>
                    <a class="border-1 border-bottom border-gray-dark" data-bs-toggle="modal" data-bs-target="#createEntityModal">
                        <span><i class="me-2 bi bi-plus-square"></i>Add new</span>
                    </a>
                </li>
                <li>
                    <a class="toggle-icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span><i class="me-2 bi bi-briefcase"></i>Briefcase</span>
                    </a>
                    <ul id="collapseOne" class="collapse" data-bs-parent="#navbarAccordion">
                        <li>
                            <a class="" data-bs-toggle="modal" data-bs-target="#createEntityModal">
                                <span class="flex-fill"><i class="me-2 bi bi-plus-square"></i>Add new</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span><i class="me-2 bi bi-briefcase"></i>Sub briefcase</span>
                                <button class="icon" @click.prevent="edit"><i class="bi bi-pencil"></i></button>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span><i class="me-2 bi bi-briefcase"></i>Sub briefcase</span>
                                <button class="icon" @click.prevent="edit"><i class="bi bi-pencil"></i></button>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span><i class="me-2 bi bi-briefcase"></i>Sub briefcase</span>
                                <button class="icon" @click.prevent="edit"><i class="bi bi-pencil"></i></button>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link to="/portfolio">
                        <span><i class="me-2 bi bi-briefcase"></i>Briefcase</span>
                        <button class="icon" @click.prevent="edit"><i class="bi bi-pencil"></i></button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/expenses">
                        <span><i class="me-2 bi bi-cash-coin"></i>Expenses</span>
                        <button class="icon" @click.prevent="edit"><i class="bi bi-pencil"></i></button>
                    </router-link>
                </li>
                <li>
                    <a class="toggle-icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                        <span><i class="me-2 bi bi-briefcase"></i>Briefcase</span>
                    </a>
                    <ul id="collapseOne1" class="collapse" data-bs-parent="#navbarAccordion">
                        <li>
                            <!-- border-1 border-bottom border-blue-500 -->
                            <a class="" data-bs-toggle="modal" data-bs-target="#createEntityModal">
                                <span><i class="me-2 bi bi-plus-square"></i>Add new</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span><i class="me-2 bi bi-briefcase"></i>Sub briefcase</span>
                                <button class="icon" @click.prevent="edit"><i class="bi bi-pencil"></i></button>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span><i class="me-2 bi bi-briefcase"></i>Sub briefcase</span>
                                <button class="icon" @click.prevent="edit"><i class="bi bi-pencil"></i></button>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span><i class="me-2 bi bi-briefcase"></i>Sub briefcase</span>
                                <button class="icon" @click.prevent="edit"><i class="bi bi-pencil"></i></button>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
        <article class="w-100 p-0 bg-light">
            <header class="header d-flex align-items-center justify-content-end w-100 bg-white border-bottom border-white-grey border-1">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link fs-5 active" href="#">
                                        <i class="bi bi-gear"></i>
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-person-circle"></i>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div class="container-fluid py-2 px-3">
                <div class="d-flex justify-content-between  align-items-center mb-2">
                    <h2 class="m-0">Dashboard</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>
                <router-view/>
            </div>
        </article>
    </main>
</template>

<script>
import TabsComponent from '@/components/ui/TabsComponent'
import ModalComponent from '@/components/ui/modal/ModalComponent'
import ModalButton from '@/components/ui/modal/ModalButton'

export default {
  components: { ModalComponent, TabsComponent },
  data () {
    return {
      ModalButton: ModalButton
    }
  },
  methods: {
    edit () {
      console.log('edit')
    },
    switchTab (tab) {
      console.log(tab)
    }
  }
}
</script>

<style>

</style>
