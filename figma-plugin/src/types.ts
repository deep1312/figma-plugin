// Plugin atomic patch model definition
export type FigmaPatch =
  | { op: 'create_node'; node: any }
  | { op: 'update_node_props'; id: string; props: Record<string, any> }
  | { op: 'set_variable'; variableId: string; value: any }
  | { op: 'create_component'; component: any }
  | { op: 'update_variant'; variantId: string; props: Record<string, any> };

// Example RPC interface outline
export interface FigmaRPC {
  figma_read(nodes: string[]): Promise<any>;
  figma_write(ops: FigmaPatch[]): Promise<any>;
}

// Plugin state management
export interface PluginState {
  apiKey?: string;
  version: number;
  patches: FigmaPatch[];
}

// Plugin UI states
export type PluginUIState =
  | { status: 'unauthenticated' }
  | { status: 'authenticated' }
  | { status: 'loading' }
  | { status: 'error'; message: string };

// Authentication and RPC methods would be implemented separately
