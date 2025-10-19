import * as React from 'react';
import { PluginLogin } from './PluginLogin';
import { FigmaPlugin } from './FigmaPlugin';

export function App() {
  const [output, setOutput] = React.useState<any>(null);
  const figmaPlugin = React.useRef(new FigmaPlugin());

  async function onReadNodes() {
    try {
      const result = await figmaPlugin.current.figma_read(['root']);
      setOutput(result);
    } catch (err) {
      setOutput({ error: err instanceof Error ? err.message : String(err) });
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Designer Figma Plugin</h1>
      <PluginLogin />
      <button onClick={onReadNodes} style={{ marginTop: 20 }}>
        Read Figma Nodes
      </button>
      <div style={{ marginTop: 20, whiteSpace: 'pre-wrap', maxHeight: 300, overflow: 'auto', border: '1px solid #ccc', padding: 10 }}>
        {output ? JSON.stringify(output, null, 2) : 'Output will appear here...'}
      </div>
    </div>
  );
}
