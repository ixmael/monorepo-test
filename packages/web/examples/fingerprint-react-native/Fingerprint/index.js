import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

// import html from './fingerprint.html';

const generateHTML = (jsKey) => {
  return `
    <html>
      <head></head>
      <body>
        <div>Fingerprint Test</div>
        <ul id="response">
          <li id="response-token">Token: <span id="response-token-value"></span></div>
        </ul>
        <script
          onload="initBayonet();"
          src="http://10.0.2.2:3100/js/analytics.js"
          async
        >
        </script>
        <script>
          function initBayonet() {
            console.log('init bayonet');
            // workaround for cookie access issue on some React Native versions
            if(!document.__defineGetter__) {
              Object.defineProperty(document, 'cookie', {
                  get: function(){return ''},
                  set: function(){return true},
              });
            } else {
                document.__defineGetter__("cookie", function() { return '';} );
                document.__defineSetter__("cookie", function() {} );
            }
            bayonet.init({
              js_key: "123456789",
              callback_function: "callback"
            });
            bayonet.track();
          }
          
          function callback(response) {
            const tokenHTML = document.getElementById('response-token-value');
            // status.textContent = params.status;
            tokenHTML.textContent = response.token;

            window.ReactNativeWebView.postMessage(response.token);
          }
        </script>
      </body>
    </html>
  `;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Fingerprint = (props) => {
  const {
    jsKey,
  } = props;

  const html = generateHTML(jsKey);

  return (
    <View style={{height:"50%" , width:"100%"}}>
      <WebView
        style={styles.container}
        source={{ html, baseUrl: 'localhost' }}
        javaScriptEnabled={true}
        javaScriptEnabledAndroid={true}
        domStorageEnabled={true}
        thirdPartyCookiesEnabled={true}
        sharedCookiesEnabled={true}
        originWhitelist={['*']}
        mixedContentMode="always"
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        onError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
        }}
        // onLoad={(syntheticEvent) => {
        // const { nativeEvent } = syntheticEvent;
        // this.url = nativeEvent.url;
        // console.log('onload', syntheticEvent);
        // initBayonet();
        // }}
        // injectedJavaScript={runFirst}
        // injectedJavaScriptBeforeContentLoaded={runSecond}
        onMessage={event => {
          console.log('MENSAJE RECIBIDO');
          alert(event.nativeEvent.data);
        }}
      />
    </View>
  );
};

export default Fingerprint;
