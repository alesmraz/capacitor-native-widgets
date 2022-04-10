import { registerPlugin } from '@capacitor/core';

import type { CapacitorWidgetPlugin } from './definitions';

const CapacitorWidget =
  registerPlugin<CapacitorWidgetPlugin>('CapacitorWidget');

export * from './definitions';

export { CapacitorWidget };
