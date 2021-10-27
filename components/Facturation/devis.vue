<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="width">
    <div class="flex flex-col width">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="
              shadow
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Numéro
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Statut
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Prospect
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    date
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Montant HT
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Montant TTC
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Montant TVA
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="f in devis" :key="f.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm font-medium text-gray-900">
                          {{ f.numero }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap">
                    <div
                      class="
                        px-2
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        rounded-full
                        bg-green-100
                        text-green-800
                      "
                      v-if="f.statut"
                    >
                      Accepté
                    </div>
                    <div
                      class="
                        px-2
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        rounded-full
                        bg-red-100
                        text-red-800
                      "
                      v-if="!f.statut"
                    >
                      En attente
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ f.client }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {{ f.date | $moment('YYYY') }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ f.montantht }}€</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ f.montantttc }}€</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ f.tva }}€</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900 edit">
                      <img src="~assets/img/svg/file-edit-alt.svg" alt="" />
                       <!-- <a :href="getStrapiMedia(f.pdf.url)"> -->
                      <img src="~assets/img/svg/eye.svg" alt="" />
                       <!-- </a> -->
                      <img
                        src="~assets/img/svg/file-times-alt.svg"
                        @click="deletePopup = !deletePopup"
                        alt=""
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="deletePopup" v-if="deletePopup">
       <transition name="opacity" appear>
      <div class="overlay">
       
     <transition name="fade" appear>

        <div class="popup" v-for="f in devis" :key="f.id">
          <div class="icon">
            <div class="icon_svg">
              <svg
                class="h-6 w-6 text-red-600"
                x-description="Heroicon name: outline/exclamation"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
            </div>
            <h2>Supprimer le devis</h2>
          </div>
          <div class="content_popup">
            <p>
              Voulez vous vraiment supprimer ce devis ? Celui-ci sera
              définitivement effacé de votre dashboard.
            </p>
          </div>
          <hr />
          <div class="delete">
            <div class="btn_retour">
              <button @click="deletePopup = !deletePopup">Retour</button>
            </div>
            <div class="btn_delete">
              <a href="/facturation">
              <button @click="deleteClient(f.id)">Supprimer</button>
              </a>
            </div>
          </div>
        </div>
     </transition>
      </div>
       </transition>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'

export default {
  props: {
    devis: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      deletePopup: false,
    }
  },
  methods: {
    getStrapiMedia,
    deleteClient(id) {
      this.$axios
        .delete('http://localhost:1337/devis/' + id)
        .then((res) => (this.item.splice(id, 1), this.$router.go('/')))
        .catch()
      console.log('Impossible')
    },
  },
}
</script>

<style scoped>
.width {
  max-width: 100%;
  margin-left: 105px;
}

tr {
  background-color: white;
}

.edit {
  display: flex;
}

.edit img {
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
}

.overlay {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.205);
  inset: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.popup {
  position: fixed;
  width: 600px;

  background-color: white;
  border-radius: 9px;
  padding: 30px 40px;
}

.icon {
  display: flex;
  align-items: center;
}

.icon_svg {
  background-color: #fde2e1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.icon h2 {
  font-size: 20px;
  font-weight: bold;
}

.content_popup {
  margin-left: 60px;
}

.content_popup p {
  color: #6b7280;
}

hr {
  margin-top: 20px;
}

.delete {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  margin-top: 30px;
}

.btn_retour button {
  background-color: transparent;
  color: #6b7280;
  border: 1px solid #d2d8e4;
  padding: 8px 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 4px;
}

.btn_delete button {
  background-color: #dc2626;
  color: white;
  border: 1px solid #dc2626;
  padding: 8px 16px;
  margin-left: 15px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 4px;
}

.opacity-enter-active {
  animation: opacity .5s;
}
@keyframes opacity  {
  from {
    opacity: 0;
   

  }
  to{
    opacity: 1;

  }

}

.fade-enter-active {
  animation: fade .5s;
}
@keyframes fade  {
  from {
    opacity: 0;
    transform: translateY(-20px);

  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }

}
</style>
