import Foundation

@objc public class CapacitorWidget: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
