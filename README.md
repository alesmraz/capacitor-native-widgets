# Capacitor native iOS and Android widgets bridge

This is **example implementation** of native widgets with bridge to Capacitor app. Both widgets (iOS, Android) is written in native language (swift and kotlin) and are controlled by Capacitor app.


## How it works:

there is 3 basic functions to control widgets.

`getItem` - return stored value that widgets used

`setItem` - set value that widgets used. Widgets are **not** automaticly refresh when `setItem` function is called, to do this use `reloadWidget`

`reloadWidget` - this function programmatically refresh widgets data. Don't call this function offen, updating widgets is expensive and drain battery. Also widgets can be config (in native code) to auto refresh every 30 minutes.

example of usage is here: 
go to `src/App.tsx` and check `reload` function. 


```tsx
async function onClick() {
    await CapacitorWidget.setItem({
      group: 'group.com.example.secrets',
      key: 'my-secret-api-key',
      value: makeId(10),
    });

    await CapacitorWidget.getItem<string>({
      group: 'group.com.example.secrets',
      key: 'my-secret-api-key',
    });

    await CapacitorWidget.reloadWidget();
}
```


## How it looks:

https://user-images.githubusercontent.com/16062058/162631606-8a463c16-1224-477f-b744-87aae6644fa6.mp4

https://user-images.githubusercontent.com/16062058/162631858-d2f6a32e-369a-44e0-9c22-d659f0a66f96.mp4


## How it works in native:

This plugin use [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) on iOS and [SharedPreferences](https://developer.android.com/reference/android/content/SharedPreferences) on Android. On Android all works without extra configuration. on iOS you need to add new capability named `App groups` (check video bellow).

https://user-images.githubusercontent.com/16062058/162632626-9a17198c-0f57-45bf-90d6-62a4c6d5f915.mp4

## FAQ

- error message: `this project is not configure for android` - don't forget to register this local plugin in [MainActivity](https://github.com/alesmraz/capacitor-native-widgets/blob/main/android/app/src/main/java/com/example/plugin/MainActivity.kt#12)
- something broken in Android build for Android X - try to use https://github.com/mikehardy/jetifier to fix this
- why this is not a installable plugin via npm? It's extreamly hard (imposible? Correct me in PR!) to connect your android widget plugin with this plugin due security reason. For iOS it's way easer and if you build only for iOS here is plugin for you (warning does'n work for Android!) [LINK](https://github.com/0xn33t/capacitor-widgetsbridge-plugin)


PR welcommed :)
