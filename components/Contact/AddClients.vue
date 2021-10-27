<template>
  <div class="group_form">
    <div class="title_form">
      <h2>Ajouter un client</h2>
      <p>Fermer</p>
    </div>
    <form @submit="submit">
      <div class="label_group">
        <div class="label">
          <p>Client</p>
          <input type="text" v-model="form.client" />
        </div>
        <div class="label">
          <p>Numéro de Siret</p>
          <input type="text" v-model="form.client" />
        </div>
        <div class="label">
          <p>Adresse de facturation</p>
          <input type="text" v-model="form.client" />
        </div>
        <div class="label">
          <p>Nom du contact</p>
          <input type="text" v-model="form.name" />
        </div>
        <div class="label w">
          <label class="block text-sm font-medium text-gray-700"> Logo </label>
          <div
            class="
              mt-1
              flex
              justify-center
              px-6
              pt-5
              pb-6
              border-2 border-gray-300 border-dashed
              rounded-md
            "
          >
            <div class="space-y-1 text-center">
              <svg
                class="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="
                    relative
                    cursor-pointer
                    bg-white
                    rounded-md
                    font-medium
                    text-bleue-600
                    hover:text-indigo-500
                    focus-within:outline-none
                    focus-within:ring-2
                    focus-within:ring-offset-2
                    focus-within:ring-indigo-500
                  "
                >
                  <span>Télécharger le fichier</span>
                  <input
                   name="file"
                    type="file"
                    ref="file"
           
                    @change="onFileSelected"
                  />
                </label>
              </div>
              <p class="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
            </div>
          </div>
        </div>
         <input
             name="file"
                    type="file"
                    ref="file"
                   
                    @change="onFileSelected"
                  />
        <div class="label">
          <p>Catégorie</p>
          <input type="text" v-model="form.categorie" />
        </div>
        <div class="label">
          <p>Email</p>
          <input type="email" v-model="form.email" />
        </div>
        <div class="label">
          <p>Téléphone</p>
          <input type="text" v-model="form.telephone" />
        </div>
        <hr />
      </div>
      <div class="btn_add_client">
        <button>Ajouter</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: null,
      form: {
        client: '',
        name: '',
        categorie: '',
        email: '',
        telephone: '',
        facture: '',
        date: '',
        prix: '',
        accompte: '',
      },
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
      const fd = new FormData()
      fd.append('file', this.img)
      this.$axios
        .post('http://localhost:1337/clients', fd)
        .then((res) => (this.form = ''))
        .catch(e)
    },
    onFileSelected() {
      this.img = this.$refs.file.files[0]
    },
  },
}
</script>

<style scoped>
hr {
  border: none;
  background-color: #ebeff3;
  width: 100%;
  margin-top: 20px;
  height: 1px;
}
.group_form {
  position: fixed;
  overflow-y: scroll;
  width: 700px;
  display: flex;
  flex-flow: column;
  background-color: white;
  border-radius: 9px;
  padding: 75px 100px;
}

.title_form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title_form p {
  color: #111827;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 12px;
}

.title_form h2 {
  color: #4868fd;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 18px;
}

.label_group {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.label {
  width: 48%;
  margin-bottom: 20px;
}

.label p {
  font-weight: 400;
  font-size: 14px;
  color: #374151;
  margin-bottom: 3px;
}

.label input {
  border: 1px solid #d1d5da;
  border-radius: 4px;
  padding: 8px 16px;
  width: 100%;
}

.btn_add_client {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  margin-top: 30px;
}

.btn_add_client button {
  background-color: #4868fd;
  color: white;
  padding: 8px 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 4px;
}

.w {
  width: 100% !important;
}
</style>
