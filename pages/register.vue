<template>
  <section class="login">
    <div class="block_left">
      <div class="img">
        <img src="~assets/img/png/illustration-login.png" alt="" />
      </div>
      <div class="title">
        <h1>CRM de gestion clients/prospects et de facturation</h1>
      </div>
      <div class="content">
        <p>
          Ce CRM associe tous les outils digitaux et tous les conseils
          nécessaires pour vous aider à faire de la croissance.
        </p>
      </div>
      <div class="btn">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.48817 10.5171L6.00526 12L2.14339e-07 6.00526L6.00526 4.12017e-07L7.48817 1.48291L2.97634 6.00526L7.48817 10.5171Z"
            fill="#4868FD"
          ></path>
        </svg>
        <p>Demandez votre essai gratuit</p>
      </div>
    </div>
    <div class="block_right">
      <div class="form">
        <div class="logo">
          <img src="~assets/img/svg/logo.svg" alt="" />
          <p>Se connecter</p>
        </div>
        <form @submit="register">
          <div class="label_group">
            <div class="label">
              <p>Username</p>
              <input
                type="text"
                placeholder="votre@email.fr"
                v-model="username"
              />
            </div>
            <div class="label">
              <p>Email</p>
              <input
                type="email"
                placeholder="votre@email.fr"
                v-model="email"
              />
            </div>
            <div class="label">
              <p>Mot de passe</p>
              <input type="password" placeholder="*******" v-model="password" />
             
            </div>
          </div>
          <div class="btn_group">
            <button>S'inscrire</button>
          </div>
          <hr />
          <div class="compte">
              <nuxt-link to="/login">
            <p>
              Vous avez déjà un compte ?
              <span class="bleu">Connectez vous !</span>
            </p>
              </nuxt-link>
          </div>

          <div class="compte" v-if="error">
            <p>{{ error }} <span class="bleu">Connectez !</span></p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      success: null,
      error: null,
    }
  },
  methods: {
    async register(e) {
        e.preventDefault()
      this.error = null
      try {
        this.$axios.setToken(false)
        await this.$axios.post('auth/local/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        this.success = `A confirmation link has been sent to your email account. \
 Please click on the link to complete the registration process.`
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message
      }
    },
  },
}
</script>

<style scoped>
.login {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 100vh;
}

.block_left {
  width: 75%;
  display: flex;
  text-align: center;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.img {
  text-align: center;
  margin-bottom: 40px;
}

.img img {
  width: 450px;
}

.title h1 {
  color: #02016f;
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 30px;
  line-height: 38px;
  width: 500px;
}

.content p {
  color: #02016f;
  font-weight: 400;
  font-size: 16px;
  width: 500px;
  margin-bottom: 30px;

  line-height: 24px;
}

.btn {
  display: flex;
  align-items: center;
}

.btn p {
  margin-left: 10px;
  color: #02016f;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
}

.block_right {
  width: 25%;
  background-color: white;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.logo img {
  width: 100px;
  text-align: center;
  margin: 20px auto;
}

.logo p {
  margin: 24px 0 32px;
  font-size: 20px;
  line-height: 36px;
  font-weight: 700;
  text-align: center;

  color: #02016f;
}

form {
  width: 100%;
  margin: auto;
}

.label_group {
  text-align: left;
}
.label {
  margin-bottom: 7px;
}

.label p {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  line-height: 20px;
}

.label p:nth-child(3) {
  font-size: 10px;
  font-weight: 600;
  margin-top: -8px;
  line-height: 20px;
  color: #4868fd;
}

.label input {
  background-color: #fff;
  padding: 8px 16px;
  width: 100%;
  border-radius: 2px;
  color: rgb(70, 70, 70);
  background-color: #fff !important;
  margin-bottom: 16px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #ccccd1;
}

.label input::placeholder {
  color: #ccccd1;
  font-size: 12px;
}

.btn_group {
  width: 100%;
  margin-bottom: -10px;
  display: flex;
  justify-content: flex-end;
}

.btn_group button {
  background-color: #4868fd;
  color: white;
  padding: 8px 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 4px;
}

hr {
  width: 100%;
  margin-top: 30px;
}

.compte {
  margin-top: 20px;
  text-align: center;
}

.compte p {
  font-size: 11px;
  color: #929292;
}

.bleu {
  color: #4868fd;
}
</style>
