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
import fingerprint from '@bayonetio/fingerprint';

export default {
  name: 'App',
  data() {
    return {
      device: null
    };
  },
  mounted() {
    const _self = this;
    fingerprint.analyze({
      jsKey: '123456789',
      onAnalyzedCallback: function (token) {
        _self.device = token.token;
      },
    });
  },
};
</script>

<style>
#app {
}
</style>
