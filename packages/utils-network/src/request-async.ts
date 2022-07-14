import fetch, { RequestInit } from 'node-fetch';

/** Convenience wrapper for asynchronously request an URL. */
export const requestAsync = async (options: string | RequestInit): Promise<any> => {
    const response = await fetch(options as any);
    return response.body;
};
