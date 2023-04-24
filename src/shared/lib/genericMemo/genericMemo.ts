import { memo } from 'react';

export const genericMemo: <T>(c: T) => T = memo;
