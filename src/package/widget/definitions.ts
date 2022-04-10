export interface CapacitorWidgetPlugin {
  /**
   * Return the value from user’s defaults database associated with the specified key
   *
   * @param {UserDefaultsOptions} options
   * @since 1.0.0
   * @returns {Promise<DataResults<any>>} Promise represents the value
   */
  getItem<T>(options: UserDefaultsOptions): Promise<DataResults<T>>;

  /**
   * Set the value to user’s defaults database associated with the specified key
   *
   * @param {UserDefaultsOptions} options
   * @since 1.0.0
   * @returns {Promise<DataResults<boolean>>} Promise represents the operation results
   */
  setItem(options: UserDefaultsOptions): Promise<DataResults<boolean>>;

  /**
   * Remove the value from user’s defaults database associated with the specified key
   *
   * @param {UserDefaultsOptions} options
   * @since 1.0.0
   * @returns {Promise<DataResults<boolean>>} Promise represents the operation results
   */
  removeItem(options: UserDefaultsOptions): Promise<DataResults<boolean>>;

  /**
   * Reloads the timelines for all configured widgets belonging to the containing app
   *
   * @since 1.0.0
   * @returns {Promise<DataResults<boolean>>} Promise represents the operation results
   */
  reloadWidget(options?: {
    widgetAppId: string;
  }): Promise<DataResults<boolean>>;
}

export interface UserDefaultsOptions {
  /**
   * The key whose value to retrieve from storage.
   *
   * @since 1.0.0
   */
  key: string;

  /**
   * User defaults database name which holds and organizes key/value pairs
   *
   * @since 1.0.0
   */
  group: string;

  /**
   * The value to set in storage with the associated key
   *
   * @since 1.0.0
   */
  value?: string;
}

export interface TimelinesOptions {
  /**
   * A string that identifies the widget and matches the value you used when you created the widget’s configuration
   *
   * @since 1.0.0
   */
  ofKind: string;
}

export interface DataResults<T> {
  /**
   * Holds response results from native code
   *
   * @since 1.0.0
   */
  results: T;
}
