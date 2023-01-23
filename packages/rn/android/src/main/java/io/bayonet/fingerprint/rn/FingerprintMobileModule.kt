package io.bayonet.fingerprint.rn

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

import io.bayonet.fingerprint.core.domain.Token
import io.bayonet.fingerprint.services.FingerprintService

/**
 * FingerprintMobileModule
 */
class FingerprintMobileModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  /**
   * analize generate a token from the backend
   *
   * @param apiKey is the API Key of a client
   * @param promise is the promise to resolve
   */
  @ReactMethod
  fun analyze(apiKey: String, promise: Promise) {
    CoroutineScope(Dispatchers.IO).launch {
        try {
          val token: Token = withContext(context = Dispatchers.IO) {
              val fs = FingerprintService(
              reactApplicationContext.applicationContext,
                  apiKey
                  )
                  fs.analyze()
          }

          // Resolving the promise with the token serialized
          val tokenSerialized: String = Json.encodeToString(token)
          promise.resolve(tokenSerialized)
      } catch (e: Exception) {
          promise.reject(e)
      }
    }
  }

  companion object {
    const val NAME = "FingerprintMobile"
  }
}
