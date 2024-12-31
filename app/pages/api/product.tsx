// src/pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '../../utils/axiosInstance';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axiosInstance.get('products');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
