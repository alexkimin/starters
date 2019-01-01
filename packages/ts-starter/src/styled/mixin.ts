import { css } from 'styled-components';
import { detect } from 'detect-browser';
const browser: any = detect();
const { os } = browser;

// Null Transform Hacks
const _hardwareAccelerationAllowed =
  os.includes('Mac') || os.includes('Windows') || os.includes('Linux');

const acceleration = _hardwareAccelerationAllowed
  ? css`
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000;
    `
  : '';

export { acceleration };
