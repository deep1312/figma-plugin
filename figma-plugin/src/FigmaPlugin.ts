import { PluginAuth } from './auth';
import { FigmaRPC, FigmaPatch } from './types';

export class FigmaPlugin implements FigmaRPC {
  auth = new PluginAuth();

  async figma_read(nodes: string[]) {
    const token = this.auth.getToken();
    if (!token) throw new Error('Not authenticated');

    // Construct Figma API URL
    const fileId = 'JJMmuKy0JuFlBGIIYvh0oT';
    const url = `https://api.figma.com/v1/files/${fileId}`;

    // Fetch file JSON
    const response = await fetch(url, {
      headers: { 'X-Figma-Token': token }
    });

    if (!response.ok) throw new Error('Failed to fetch Figma file data');

    const data = await response.json();

    // Filter node tree by requested node IDs (TODO: implement proper filtering)
    // For now, return entire document
    return data;
  }

  async figma_write(ops: FigmaPatch[]) {
    const token = this.auth.getToken();
    if (!token) throw new Error('Not authenticated');

    // Placeholder for applying patches
    // Note: Figma API doesn't currently support direct node tree patching via API.
    // This requires client-side plugin API usage or draft page manipulation.
    return { success: false, message: 'Write operations to Figma file must be performed via plugin UI.' };
  }
}
