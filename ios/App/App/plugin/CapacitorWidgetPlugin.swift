import Foundation
import Capacitor
import WidgetKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorWidgetPlugin)
public class CapacitorWidgetPlugin: CAPPlugin {
    // private let implementation = CapacitorWidget()

    @objc func setItem(_ call: CAPPluginCall) {
        guard let key = call.getString("key") else {
            call.reject("Key must be provided")
            return
        }
        
        guard let value = call.getString("value") else {
            call.reject("Value must be provided")
            return
        }
        
        guard let group = call.getString("group") else {
            call.reject("Group must be provided")
            return
        }
        
        if let userDefaults = UserDefaults.init(suiteName: group) {
            userDefaults.set(value, forKey: key)
            call.resolve(["results": true])
            return
        }
        
        call.reject("Could not set item")
    }
    
    @objc func getItem(_ call: CAPPluginCall) {
        guard let key = call.getString("key") else {
            call.reject("Key must be provided")
            return
        }
        
        guard let group = call.getString("group") else {
            call.reject("Group must be provided")
            return
        }
        
        if let userDefaults = UserDefaults.init(suiteName: group) {
            let value = userDefaults.value(forKey: key)
            if value != nil {
                call.resolve(["results": value!])
                return
            }
        }
        
        call.reject("Could not get item")
    }
    
    @objc func removeItem(_ call: CAPPluginCall) {
        guard let key = call.getString("key") else {
            call.reject("Key must be provided")
            return
        }
        
        guard let group = call.getString("group") else {
            call.reject("Group must be provided")
            return
        }
        
        if let userDefaults = UserDefaults.init(suiteName: group) {
            userDefaults.removeObject(forKey: key)
            call.resolve(["results": true])
            return
        }
        
        call.reject("Could not remove item")
    }
    
    @objc func reloadWidget(_ call: CAPPluginCall) {
        if #available(iOS 14.0, *) {
            let widgetAppId = call.getString("widgetAppId")
            
            

            if (widgetAppId != nil) {
                WidgetCenter.shared.reloadTimelines(ofKind: widgetAppId!)
            } else {
                WidgetCenter.shared.reloadAllTimelines()
            }
            
            call.resolve(["results": true])
        } else {
            call.unavailable("Not available in iOS 13 or earlier.")
        }
    }
}
