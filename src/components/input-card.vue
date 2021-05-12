<template>
  <form class="new-item" @submit.prevent="submit($event.target)">
    <label class="new-item__label"
      >Name:
      <input
        v-model.trim.lazy="$v.form.name.$model"
        name="name"
        class="new-item__input"
        :class="!$v.form.name.minLength ? 'error__border' : ''"
        type="text"
        placeholder="Add name"
      />
    </label>
    <div class="error__box">
      <span class="error" v-if="$v.form.name.$error">Error:</span>
      <span class="error" v-if="$v.form.name.$dirty && !$v.form.name.required"> The name can`t be empty.</span>
      <span class="error" v-if="!$v.form.name.minLength">
        The name must be more than 3 characters.</span
      >
    </div>

    <label class="new-item__label"
      >Price:
      <input
        v-model.lazy.number.trim="$v.form.price.$model"
        name="price"
        step="100"
        class="new-item__input"
        :class="$v.form.price.$dirty &&!$v.form.price.notZero ? 'error__border' : ''"
        type="number"
        min="0"
        placeholder="Add price"
      />
    </label>

    <div class="error__box" >
      <template v-if="$v.form.price.$dirty && !$v.form.price.notZero">
        <span  class="error">Error:</span>
        <span  class="error"> Please add price</span>
      </template>
      
    </div>

    <label class="new-item__label"
      >ImgUrl:
      <input
        v-model.lazy.trim="$v.form.img.$model"
        name="img"
        class="new-item__input"
        type="url"
        placeholder="Add picture"
      />
    </label>

    <div class="error__box">
      <div v-if="$v.form.img.$dirty && !$v.form.img.required">
        <span class="error">Error:</span>
        <span class="error"> Please enter a url</span>
      </div>

    </div>
    <button type="submit" class="button">Add</button>
  </form>
</template>

<script lang="ts">
import { cardsMapper } from "@/store/cards";
import { ICard } from "@/store/cards";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        name: "",
        price: 0,
        img: "",
      },
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
      },
      price:{
        required,
        notZero(value:number):boolean{
          return '0'!==value.toString()
        }
      },
      img:{
        required
      }
    }
  },
  methods: {
    ...cardsMapper.mapMutations(["addNewCard"]),
    submit(form: HTMLFormElement) {
      console.log(this.$v.form);
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        const data = new FormData(form);
        const newField: ICard = {
          name: data.get("name"),
          img: data.get("img"),
          price: Number(data.get("price")),
          count: 0,
        };
        this.addNewCard(newField);
      }
    },
  },
};
</script>

<style lang="scss">
.new-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;

  &__label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__input {
    padding: 0.5em 1em;
  }
}

.error {
  color: red;
  font-size: 0.8em;
  &__border {
    border: 1px solid red;
  }
&__box{
  height: 2em;
}
}
</style>
