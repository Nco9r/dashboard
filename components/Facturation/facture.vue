<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="width">
  <div class="flex flex-col width">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Numéro
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Statut
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clients
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  date
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Montant HT
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Montant TTC
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Montant TVA
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="f in factures" :key="f.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-left">
                    <div>
                      <div class="text-sm font-medium text-gray-900">
                        {{ f.numero }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" v-if="f.statut">Payée</div>
                  <div class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800" v-if="!f.statut">Non payée</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900"> {{ f.client }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ f.date }}</div>
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
                  <div class="text-sm text-gray-900 edit" ><img src="~assets/img/svg/file-edit-alt.svg" alt=""></div>
                </td>
              
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'

export default {
    props: {
    factures: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
     
    }
  },
   methods: {
    getStrapiMedia
  },
}
</script>

<style scoped>
.width {
    max-width: 100%;
    height: 90vh;
    margin-left: 105px;
}

tr {
  background-color: white;
}

.edit img {
  width: 20px;
  cursor: pointer;
}
</style>
