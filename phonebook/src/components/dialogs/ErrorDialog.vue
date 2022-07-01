<template>
  <!-- transition="dialog-top-transition" -->
  <v-dialog v-model="error.visible" width="500">
    <!-- <template v-slot:activator="{ on, attrs }">
      <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
        Click Me
      </v-btn>
    </template> -->

    <v-card>
      <v-card-title class="red white--text"> {{ error.title }} </v-card-title>

      <v-card-text class="pa-0">
        <v-container>
          <v-row>
            <!-- <v-col cols="auto"> -->
            <!-- <v-icon color="red" x-large class="py-5"
                >mdi-close-octagon</v-icon
              > -->
            <!-- </v-col> -->
            <v-col>
              <v-container>
                <p
                  class="body-1"
                  v-for="(message, index) in error.messages"
                  :key="index"
                >
                  {{ message }}
                </p>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="red white--text"
          text
          @click="setError({ visible: false })"
          outlined
        >
          Ok
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ErrorDialog",

  computed: {
    ...mapGetters("dialog", ["error"]),
  },
  methods: {
    ...mapActions("dialog", ["setError"]),
  },
};
</script>
