<template>
  <header>
    <h1>Fingerprint example</h1>
  </header>
  <section>
    <h2>Device fingerprint</h2>
    <p>{{device}}</p>
  </section>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      device: null
    };
  },
  components: {
  },
  methods: {},
  mounted() {
    const _self = this;
    const script = document.createElement('script');
    script.src = 'http://localhost:3100/js/analytics.js';
    script.async = true;
    script.onload = function() {
      window.bayonet.analyze({
        jsKey: '123456789',
        onAnalyzedCallback: function (token) {
          _self.device = token.token;
        },
      });
    };

    document.body.appendChild(script);
  },
};
</script>

<style>
#app {}
</style>
